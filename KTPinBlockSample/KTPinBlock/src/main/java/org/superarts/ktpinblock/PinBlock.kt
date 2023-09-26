package org.superarts.ktpinblock

import android.util.Log
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.utility.toHexString
import kotlin.experimental.xor

/**
 * Implements PinBlockEncoder.
 */
class PinBlock : PinBlockEncoder {
    override fun encode(pin: String, pan: String, format: PinBlockFormat) : String {
        val pinBytes = format.preparePin(pin)
        val panBytes = format.preparePan(pan)
        val blockBytes = format.calculateBlock(pinBytes, panBytes)
        Log.d("test", pinBytes.toHexString())
        Log.d("test", panBytes.toHexString())
        Log.d("test", blockBytes.toHexString())
        return blockBytes.toHexString()
    }

    private fun setHiNibbleValue(value: Byte): Byte = (0xF0 and (value.toInt() shl
            4)).toByte()
    private fun setLowNibbleValue(value: Byte): Byte = (0x0F and
            value.toInt()).toByte()

    private fun xor(pinBytes: ByteArray, panBytes: ByteArray) : ByteArray {
        val result = ByteArray(16)
        for (index in 0 until 16) {
            result[index] = pinBytes[index] xor panBytes[index]
            //Log.d("test", index.toString() + " " + pinBytes[index] + " " + panBytes[index] + " " + result[index])
        }
        return result
    }
}