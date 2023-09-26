package org.superarts.ktpinblock

import android.util.Log
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.utility.toHexString
import kotlin.experimental.or
import kotlin.experimental.xor

/**
 * Implements PinBlockEncoder based on different PinBlockFormats.
 * Internal calculation should be based on bytes.
 * To combine hi and low nibbles together, use `encodeToCompactBytes`.
 */
class PinBlock : PinBlockEncoder {
    override fun encode(pan: String, pin: String, format: PinBlockFormat) : String {
        return encodeToBytes(pan, pin, format).toHexString()
    }

    override fun encodeToBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray {
        val pinBytes = format.preparePin(pin)
        val panBytes = format.preparePan(pan)
        Log.d("test", pinBytes.toHexString())
        Log.d("test", panBytes.toHexString())
        return format.calculateBlock(pinBytes, panBytes)
    }

    override fun encodeToCompactBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray {
        val blockBytes = encodeToBytes(pan, pin, format)
        if (blockBytes.size != Const.PIN_BLOCK_LENGTH) {
            throw PinBlockLengthException("PIN block size should be: " + Const.PIN_BLOCK_LENGTH)
        }

        val compactBytes = ByteArray(blockBytes.size / 2)
        for (index in 0 until blockBytes.size / 2) {
            val highByte = setHiNibbleValue(blockBytes[index * 2])
            val lowByte = setLowNibbleValue(blockBytes[index * 2 + 1])
            compactBytes[index] = highByte or lowByte
        }

        // TODO: I came up the following code to support various length PIN block,
        //  but realized that PIN block size should always be 16.
        //  The following code should be removed after it's confirmed from ISO documents.
        /*
        val compactBytes = ByteArray((blockBytes.size + 1) / 2)
        for (index in 0 until blockBytes.size / 2) {
            val highByte = setHiNibbleValue(blockBytes[index * 2])
            val lowByte = setLowNibbleValue(blockBytes[index * 2 + 1])
            compactBytes[index] = highByte or lowByte
        }
        if (blockBytes.size % 2 == 1) {
            compactBytes[blockBytes.size / 2 + 1] = setHiNibbleValue(blockBytes[blockBytes.size - 1])
        }
         */

        return compactBytes
    }

    // TODO: move the following functions to MathUtility.
    //  However, they have to be private for some reason for the time being.

    /**
     * Shift nibble left, then empty the low nibble.
     */
    private fun setHiNibbleValue(value: Byte): Byte = (0xF0 and (value.toInt() shl
            4)).toByte()

    /**
     * Empty the high nibble.
     */
    private fun setLowNibbleValue(value: Byte): Byte = (0x0F and
            value.toInt()).toByte()
}