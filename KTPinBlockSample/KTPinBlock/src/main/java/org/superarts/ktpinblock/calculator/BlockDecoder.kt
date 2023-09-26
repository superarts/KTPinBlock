package org.superarts.ktpinblock.calculator

/**
 * PIN block decoder. It's the reversed procedure of PIN block calculator.
 */
interface BlockDecoder {
    /**
     * Decode PIN block to PIN.
     */
    fun decodeBlock(pinBlock: String, pan: String?) : String
}
