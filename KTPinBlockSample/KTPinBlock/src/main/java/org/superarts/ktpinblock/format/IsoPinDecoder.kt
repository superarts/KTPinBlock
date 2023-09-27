package org.superarts.ktpinblock.format

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PinBlockLengthException
import org.superarts.ktpinblock.PinException
import org.superarts.ktpinblock.utility.toHexString

/**
 * PIN decoder for ISO formats.
 */
internal object IsoPinDecoder {
    /**
     * Convert PIN block string "12AB..." to ByteArray with 0x01, 0x02, 0x0a, 0x0b...
     */
    fun prepareBlockBytes(pinBlock: String) : ByteArray {
        if (pinBlock.length != Const.PIN_BLOCK_LENGTH) {
            throw PinBlockLengthException("PIN block length is not " + Const.PIN_BLOCK_LENGTH)
        }

        val blockBytes = pinBlock.toByteArray(Charsets.US_ASCII)
        val preparedBlockBytes = ByteArray(blockBytes.size)
        for (index in blockBytes.indices) {
            val byte = blockBytes[index]
            if (byte < Const.PIN_BLOCK_CHAR_A) {
                preparedBlockBytes[index] = (byte - Const.PIN_CHAR_0).toByte()
            } else {
                preparedBlockBytes[index] = (byte - Const.PIN_BLOCK_CHAR_A + 0xa).toByte()
            }
        }
        return preparedBlockBytes
    }

    /**
     * Decode ISO PIN bytes to String. It is the reversed process of preparing a PIN, e.g. ISO1:
     * Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value
        1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
        1	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    fun decodePinBytes(pinBytes: ByteArray, version: Byte) : String {
        if (pinBytes[0] != version) {
            throw PinException("Invalid PIN bit 1, version mismatch")
        }

        val length = pinBytes[1]
        return pinBytes.toHexString().substring(2, 2 + length)
    }
}