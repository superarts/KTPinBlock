package org.superarts.ktpinblock.format

import org.superarts.ktpinblock.NotImplementedException
import org.superarts.ktpinblock.UnexpectedNotNullException
import org.superarts.ktpinblock.coder.BlockDecoder
import org.superarts.ktpinblock.coder.BlockEncoder

/**
 * PIN block formats to be supported.
 * From: [ETFLab](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks)
 * TODO: support other formats if needed, e.g. Q/CUP 006.4
 */
enum class PinBlockFormat : BlockEncoder, BlockDecoder {
    ISO0, ISO1, ISO2, ISO3, ISO4,
    ANSIX98, OEM1,
    ECI1, ECI2, ECI3, ECI4,
    IBM3621, IBM3624, IBM4704, IBM5906,
    VISA1, VISA2, VISA3, VISA4,
    DOCUTEL2, AS2805Format1, AS2805Format8,
    ;

    /**
     * Encode PIN block.
     */
    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        checkPan(pan)
        return when (this) {
            ISO1 -> PinBlockIso1.encodeToBytes(null, pin)
            ISO2 -> PinBlockIso2.encodeToBytes(null, pin)
            ISO3 -> PinBlockIso3.encodeToBytes(pan, pin)
            else -> throw NotImplementedException("Encoder for this format is not implemented yet.")
        }
    }

    /**
     * Decode PIN block.
     */
    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        checkPan(pan)
        return when (this) {
            ISO1 -> PinBlockIso1.decodeBlock(pinBlock, null)
            ISO2 -> PinBlockIso2.decodeBlock(pinBlock, null)
            ISO3 -> PinBlockIso3.decodeBlock(pinBlock, pan)
            else -> throw NotImplementedException("Decoder for this format is not implemented yet.")
        }
    }

    /**
     * PAN validation check for `this` format.
     * Currently only nullable check is performed.
     * TODO: perform other possible checks if it's possible, e.g. length check.
     */
    private fun checkPan(pan: String?) {
        when (this) {
            ISO0, ISO3, ISO4,
            ANSIX98, ECI1,
            VISA1, VISA4,
            DOCUTEL2 -> {
                if (pan == null) {
                    throw UnexpectedNotNullException("PAN should NOT be null for this format.")
                }
            }
            ISO1, ISO2, OEM1, ECI2, ECI3, ECI4,
            IBM3621, IBM3624, IBM4704, IBM5906,
            VISA2, VISA3, AS2805Format1, AS2805Format8 -> {
                if (pan != null) {
                    throw UnexpectedNotNullException("PAN should be null for this format.")
                }
            }
        }
    }
}
