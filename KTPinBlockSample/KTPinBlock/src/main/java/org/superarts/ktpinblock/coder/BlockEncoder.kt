package org.superarts.ktpinblock.coder

/**
 * Encode PAN and PIN to PIN block.
 * PAN is nullable for certain formats, .e.g. ISO1.
 */
interface BlockEncoder {
    /**
     * Encode to ByteArray, e.g. 0x3 0x4 0x1 0x2 ...
     */
    fun encodeToBytes(pan: String?, pin: String) : ByteArray
}
