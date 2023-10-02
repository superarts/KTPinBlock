package org.superarts.ktpinblock

import org.superarts.ktpinblock.coder.PinBlockDecoder
import org.superarts.ktpinblock.coder.PinBlockEncoder
import org.superarts.ktpinblock.format.InputValidator
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.format.iso.EftInputValidator
import org.superarts.ktpinblock.utility.toHexString
import kotlin.experimental.or
import kotlin.js.JsExport

/**
 * Implements PinBlockEncoder and PinBlockDecoder based on different PinBlockFormats.
 * Internal calculation is based on bytes, i.e. `encodeToBytes`.
 * To combine hi and low nibbles together, use `encodeToCompactBytes`.
 */
@JsExport
class PinBlock : PinBlockEncoder, PinBlockDecoder {
    private val inputValidator: InputValidator = EftInputValidator

    override fun encodeToBytes(pan: String?, pin: String, format: PinBlockFormat) : ByteArray {
        inputValidator.validatePan(pan, format)
        inputValidator.validatePin(pin, format)
        return format.encodeToBytes(pan, pin)
    }

    override fun encode(pan: String?, pin: String, format: PinBlockFormat) : String {
        return encodeToBytes(pan, pin, format).toHexString()
    }

    override fun encodeToCompactBytes(pan: String?, pin: String, format: PinBlockFormat) : ByteArray {
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

    override fun decodePinBlock(pinBlock: String, pan: String?, format: PinBlockFormat) : String {
        inputValidator.validatePinBlock(pinBlock, format)
        inputValidator.validatePan(pan, format)
        return format.decodeBlock(pinBlock, pan)
    }

    override fun decodePinBlockFromBytes(pinBlock: ByteArray, pan: String?, format: PinBlockFormat) : String {
        // TODO: validate PIN block bytes
        inputValidator.validatePan(pan, format)
        return format.decodeBlock(pinBlock.toHexString(), pan)
    }

    /**
     * Decode PIN block from compact ByteArray.
     * TODO: is it useful?
     */
    // override fun decodePinBlockFromCompactBytes(pinBlock: ByteArray, pan: String?, format: PinBlockFormat) : String { return "" }

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