package org.superarts.ktpinblock.format

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PanException
import org.superarts.ktpinblock.PinException
import org.superarts.ktpinblock.calculator.BlockCalculator
import org.superarts.ktpinblock.calculator.PanPreparer
import org.superarts.ktpinblock.calculator.PinPreparer
import org.superarts.ktpinblock.utility.MathUtility
import kotlin.experimental.xor

/**
 * Implementation of [ISO-3](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-3)
 */
internal object PinBlockIso3: PinPreparer, PanPreparer, BlockCalculator {
    /**
    Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value from X’0′ to X’F’
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    3	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    override fun preparePin(pin: String) : ByteArray {
        if (pin.length < 4) {
            throw PinException("Pin length is less than 4")
        }
        val pinBytes = pin.toByteArray(Charsets.US_ASCII)
        return preparePinBytes(pinBytes)
    }

    override fun preparePinBytes(pinBytes: ByteArray) : ByteArray {
        val blockBytes = ByteArray(Const.PIN_BLOCK_LENGTH)
        blockBytes[0] = 3.toByte()
        blockBytes[1] = pinBytes.size.toByte()
        for (index in 2 until 6) {
            blockBytes[index] = (pinBytes[index - 2] - Const.PIN_CHAR_0).toByte()
        }
        for (index in 6 until Const.PIN_BLOCK_LENGTH) {
            if (pinBytes.size + 2 > index) {
                blockBytes[index] = (pinBytes[index - 2] - Const.PIN_CHAR_0).toByte()
            } else {
                blockBytes[index] = MathUtility.randomNibble()
            }
        }

        return blockBytes
    }

    /**
    Prepare PAN – take 12 rightmost digits of the primary account number (excluding the check digit)
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    0	0	0	0	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN
     * TODO: buy ISO 9564-1: 2002 Format 3 and see if PAN can be shorter than 12 digits.
     * TODO: The following implementation takes the statement above literally, which may be wrong.
     */
    override fun preparePan(pan: String) : ByteArray {
        if (pan.length < 12) {
            throw PanException("Pan length is less than 12")
        }
        val panBytes = pan.toByteArray(Charsets.US_ASCII)
        return preparePanBytes(panBytes)
    }

    override fun preparePanBytes(panBytes: ByteArray) : ByteArray {
        val blockBytes = ByteArray(Const.PIN_BLOCK_LENGTH)
        for (index in 0 until 4) {
            blockBytes[index] = 0.toByte()
        }
        for (index in 4 until Const.PIN_BLOCK_LENGTH) {
            blockBytes[index] = (panBytes[panBytes.size - 12 - 1 + index - 4] - Const.PIN_CHAR_0).toByte()
        }

        return blockBytes
    }

    override fun calculateBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        // ISO3: Perform XOR bytes by bytes.
        return panBytes.zip(pinBytes).map { (x, y) -> x xor y }.toByteArray()
    }
}