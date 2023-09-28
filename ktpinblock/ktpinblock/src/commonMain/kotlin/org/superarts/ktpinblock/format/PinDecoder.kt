package org.superarts.ktpinblock.format

/**
 * Decode PIN block.
 */
interface PinDecoder {
    /**
     * Convert PIN block string "12AB..." to ByteArray with 0x01, 0x02, 0x0a, 0x0b...
     */
    fun prepareBlockBytes(pinBlock: String) : ByteArray

    /**
     * Decode ISO PIN bytes to String. It is the reversed process of preparing a PIN.
     */
    fun decodePinBytes(pinBytes: ByteArray, version: Byte) : String
}