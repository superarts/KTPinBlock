package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PinException
import org.superarts.ktpinblock.utility.NibbleProvider

/**
 * PIN preparer for ISO formats.
 */
internal class IsoPinPreparer(private val fillProvider: NibbleProvider) {
    /**
     * Convert PIN string "1234..." to ByteArray with 0x01, 0x02, 0x03, 0x04...
     */
    fun preparePin(pin: String, version: Byte): ByteArray {
        if (pin.length < 4) {
            throw PinException("Pin length is less than 4")
        }
        val pinBytes = ByteArray(16) // TODO: pin.toByteArray(Charsets.US_ASCII)
        return preparePinBytes(pinBytes, version)
    }

    /**
     * Prepare ISO PIN bytes, e.g. ISO1:
     * Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value
        1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
        1	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    private fun preparePinBytes(pinBytes: ByteArray, version: Byte): ByteArray {
        val blockBytes = ByteArray(Const.PIN_BLOCK_LENGTH)
        blockBytes[0] = version
        blockBytes[1] = pinBytes.size.toByte()
        for (index in 2 until 6) {
            blockBytes[index] = (pinBytes[index - 2] - Const.PIN_CHAR_0).toByte()
        }
        for (index in 6 until Const.PIN_BLOCK_LENGTH) {
            if (pinBytes.size + 2 > index) {
                blockBytes[index] = (pinBytes[index - 2] - Const.PIN_CHAR_0).toByte()
            } else {
                blockBytes[index] = fillProvider.nibble
            }
        }

        return blockBytes
    }
}