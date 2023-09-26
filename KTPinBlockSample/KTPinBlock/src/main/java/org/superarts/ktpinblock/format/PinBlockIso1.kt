package org.superarts.ktpinblock.format

import org.superarts.ktpinblock.UnexpectedNotNullException
import org.superarts.ktpinblock.calculator.BlockDecoder
import org.superarts.ktpinblock.calculator.BlockEncoder

/**
 * Implementation of [ISO-3](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-1)
 */
internal object PinBlockIso1: BlockEncoder, BlockDecoder {
    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        if (pan != null) {
            throw UnexpectedNotNullException("PAN should be null for ISO1")
        }
        return IsoPinPreparer.preparePin(pin, 1)
    }

    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        if (pan != null) {
            throw UnexpectedNotNullException("PAN should be null for ISO1")
        }
        val blockBytes = IsoPinDecoder.prepareBlockBytes(pinBlock)
        return IsoPinDecoder.decodePinBytes(blockBytes, 1)
    }
}