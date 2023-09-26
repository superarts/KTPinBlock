package org.superarts.ktpinblock.format

import android.util.Log
import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PanException
import org.superarts.ktpinblock.UnexpectedNullException
import org.superarts.ktpinblock.calculator.BlockDecoder
import org.superarts.ktpinblock.calculator.BlockEncoder
import org.superarts.ktpinblock.utility.MathUtility
import org.superarts.ktpinblock.utility.toHexString

/**
 * Implementation of [ISO-3](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-3)
 */
internal object PinBlockIso3: BlockEncoder, BlockDecoder {
    /**
    Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value from X’0′ to X’F’
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    3	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    fun preparePin(pin: String) : ByteArray {
        return IsoPinPreparer.preparePin(pin, 3)
    }

    fun preparePinBytes(pinBytes: ByteArray) : ByteArray {
        return IsoPinPreparer.preparePinBytes(pinBytes, 3)
    }

    /**
    Prepare PAN – take 12 rightmost digits of the primary account number (excluding the check digit)
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    0	0	0	0	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN
     * TODO: buy ISO 9564-1: 2002 Format 3 and see if PAN can be shorter than 12 digits.
     *  Need to figure out what is the check digit in PAN (VERY IMPORTANT)
     *  The following implementation may be wrong, without clarification of the questions above.
     */
    private fun preparePan(pan: String) : ByteArray {
        if (pan.length < 12) {
            throw PanException("Pan length is less than 12")
        }
        val panBytes = pan.toByteArray(Charsets.US_ASCII)
        return preparePanBytes(panBytes)
    }

    private fun preparePanBytes(panBytes: ByteArray) : ByteArray {
        val blockBytes = ByteArray(Const.PIN_BLOCK_LENGTH)
        for (index in 0 until 4) {
            blockBytes[index] = 0.toByte()
        }
        for (index in 4 until Const.PIN_BLOCK_LENGTH) {
            blockBytes[index] = (panBytes[panBytes.size - 12 - 1 + index - 4] - Const.PIN_CHAR_0).toByte()
        }

        return blockBytes
    }

    private fun calculateBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        // ISO3: Perform XOR bytes by bytes.
        return MathUtility.xor(panBytes, pinBytes)
    }

    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        if (pan == null) {
            throw UnexpectedNullException("PAN should not be null for ISO3")
        }
        val pinBytes = preparePin(pin)
        val panBytes = preparePan(pan)
        Log.d("test", pinBytes.toHexString())
        Log.d("test", panBytes.toHexString())
        return calculateBlock(pinBytes, panBytes)
    }

    /**
     * Convert PIN block string "1234..." to ByteArray with 0x01, 0x02, 0x03, 0x04...
     * This function does NOT validate PIN block length.
     */
//    fun prepareBlockBytes(pinBlock: String) : ByteArray {
//        val blockBytes = pinBlock.toByteArray(Charsets.US_ASCII)
//        val preparedBlockBytes = ByteArray(blockBytes.size)
//        for (index in blockBytes.indices) {
//            val byte = blockBytes[index]
//            if (byte < Const.PIN_BLOCK_CHAR_A) {
//                preparedBlockBytes[index] = (byte - Const.PIN_CHAR_0).toByte()
//            } else {
//                preparedBlockBytes[index] = (byte - Const.PIN_BLOCK_CHAR_A + 0xa).toByte()
//            }
//        }
//        return preparedBlockBytes
//    }

    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        if (pan == null) {
            throw UnexpectedNullException("PAN should not be null for ISO3")
        }
//        if (pinBlock.length != Const.PIN_BLOCK_LENGTH) {
//            throw PinBlockLengthException("PIN block length is not " + Const.PIN_BLOCK_LENGTH)
//        }
//
//        val blockBytes = prepareBlockBytes(pinBlock)
        val blockBytes = IsoPinDecoder.prepareBlockBytes(pinBlock)
        val panBytes = preparePan(pan)
        var pinBytes = MathUtility.xor(blockBytes, panBytes)
        return IsoPinDecoder.decodePinBytes(pinBytes, 3)
//        if (pinBytes[0].toInt() != 3) {
//            throw PinException("Invalid PIN bit 1")
//        }
//
//        val length = pinBytes[1]
//        return pinBytes.toHexString().substring(2, 2 + length)
    }
}