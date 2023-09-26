package org.superarts.ktpinblock.calculator

import org.superarts.ktpinblock.NotImplementedException

/**
 * PIN block decoder. It's the reversed procedure of PIN block calculator.
 */
interface BlockDecoder {
    /**
     * Decode PIN block to PIN.
     */
    fun decodeBlock(pinBlock: String, pan: String?) : String
//    fun decodeBlock(blockBytes: ByteArray, panBytes: ByteArray) : ByteArray
}

/**
 * A placeholder PIN block calculator to indicate an implementation will be required.
 * This class should be removed after all PIN block calculators are implemented.
 */
//object TodoBlockDecoder : BlockDecoder {
//    override fun decodeBlock(pinBlock: String, pan: String) : String {
//        throw NotImplementedException("PIN block decoder for this standard is not implemented yet.")
//    }
//
//    override fun decodeBlock(blockBytes: ByteArray, panBytes: ByteArray) : ByteArray {
//        throw NotImplementedException("PIN block decoder for this standard is not implemented yet.")
//    }
//}
