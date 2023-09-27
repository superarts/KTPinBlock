package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PanException
import org.superarts.ktpinblock.UnexpectedNullException
import org.superarts.ktpinblock.coder.BlockDecoder
import org.superarts.ktpinblock.coder.BlockEncoder
import org.superarts.ktpinblock.utility.MathUtility
import org.superarts.ktpinblock.utility.RandomNibbleProvider

/**
 * Implementation of [ISO-3](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-3)
 */
internal object PinBlockIso3: BlockEncoder, BlockDecoder {
    /**
    Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value from X’0′ to X’F’
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    3	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    private fun preparePin(pin: String) : ByteArray {
        return IsoPinPreparer(RandomNibbleProvider).preparePin(pin, Const.ISO3_VERSION)
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
        return IsoPanPreparer.preparePan(pan)
    }

    /**
     * Encode PAN and PIN to PIN block
     */
    private fun encodeBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        // ISO3: Perform XOR bytes by bytes.
        return MathUtility.xor(panBytes, pinBytes)
    }

    /**
     * BlockEncoder: encode to byte
     */
    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        if (pan == null) {
            throw UnexpectedNullException("PAN should not be null for ISO3")
        }
        val pinBytes = preparePin(pin)
        val panBytes = preparePan(pan)
        return encodeBlock(pinBytes, panBytes)
    }

    /**
     * BlockDecoder: decode to string
     */
    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        if (pan == null) {
            throw UnexpectedNullException("PAN should not be null for ISO3")
        }
        val blockBytes = IsoPinDecoder.prepareBlockBytes(pinBlock)
        val panBytes = preparePan(pan)
        var pinBytes = MathUtility.xor(blockBytes, panBytes)
        return IsoPinDecoder.decodePinBytes(pinBytes, Const.ISO3_VERSION)
    }
}