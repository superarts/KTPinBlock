package org.superarts.ktpinblock

import android.util.Log
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.utility.toHexString
import kotlin.experimental.or
import kotlin.experimental.xor

/**
 * Implements PinBlockEncoder based on different PinBlockFormats.
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
        val compactBytes = ByteArray((blockBytes.size + 1) / 2)
        for (index in 0 until blockBytes.size / 2) {
            val highByte = setHiNibbleValue(blockBytes[index * 2])
            val lowByte = setLowNibbleValue(blockBytes[index * 2 + 1])
            compactBytes[index] = highByte or lowByte
        }
        if (blockBytes.size % 2 == 1) {
            compactBytes[blockBytes.size / 2 + 1] = setHiNibbleValue(blockBytes[blockBytes.size - 1])
        }
        return compactBytes
    }

    /**
     * Shift left then empty lower 4 bits of a Byte.
     */
    private fun setHiNibbleValue(value: Byte): Byte = (0xF0 and (value.toInt() shl
            4)).toByte()

    /**
     * Empty higher 4 bits of a Byte.
     */
    private fun setLowNibbleValue(value: Byte): Byte = (0x0F and
            value.toInt()).toByte()

    private fun xor(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        val result = ByteArray(16)
        for (index in 0 until 16) {
            result[index] = pinBytes[index] xor panBytes[index]
            //Log.d("test", index.toString() + " " + pinBytes[index] + " " + panBytes[index] + " " + result[index])
        }
        return result
    }
}