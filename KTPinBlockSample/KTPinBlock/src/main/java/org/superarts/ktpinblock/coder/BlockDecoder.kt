package org.superarts.ktpinblock.coder

/**
 * PIN block decoder. It's the reversed procedure of PIN block calculator.
 */
interface BlockDecoder {
    /**
     * Decode PIN block to PIN.
     */
    fun decodeBlock(pinBlock: String, pan: String?) : String
}
