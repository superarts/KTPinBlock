package org.superarts.ktpinblock

import android.util.Log
import kotlin.experimental.xor

// https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks
enum class PinBlockFormat : PinPreparer, PanPreparer {
    ISO0, ISO1, ISO2, ISO3, ISO4,
    ANSIX98, OEM1,
    ECI1, ECI2, ECI3, ECI4,
    IBM3621, IBM3624, IBM4704, IBM5906,
    VISA1, VISA2, VISA3, VISA4,
    DOCUTEL2, AS2805Format1, AS2805Format8,
    ;

    override fun preparePin(pin: String): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3().preparePin(pin)
            else -> TodoPinPreparer().preparePin(pin)
        }
    }

    override fun preparePan(pan: String): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3().preparePan(pan)
            ISO1, ISO2, OEM1, ECI2, ECI3, ECI4,
            IBM3621, IBM3624, IBM4704, IBM5906,
            VISA2, VISA3, AS2805Format1, AS2805Format8 -> RedundantPanPreparer().preparePan(pan)
            else -> TodoPanPreparer().preparePan(pan)
        }
    }
}

interface PinBlockEncoder {
    fun encode(pin: String, pan: String, format: PinBlockFormat) : String
}

class PinBlock : PinBlockEncoder {
    override fun encode(pin: String, pan: String, format: PinBlockFormat) : String {
        val pinBytes = format.preparePin(pin)
        val panBytes = format.preparePan(pan)
        val blockBytes = xor(pinBytes, panBytes)
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

//fun ByteArray.toHexString() = asUByteArray().joinToString(" ") { it.toString(16).padStart(2, '0') }

fun ByteArray.toHexString() : String {
    return this.joinToString("") {
        java.lang.String.format("%01x", it)
    }
}