package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.UnexpectedNotNullException
import org.superarts.ktpinblock.coder.BlockDecoder
import org.superarts.ktpinblock.coder.BlockEncoder
import org.superarts.ktpinblock.format.PinDecoder
import org.superarts.ktpinblock.format.PinPreparer
import org.superarts.ktpinblock.utility.FNibbleProvider

/**
 * Implementation of [ISO-2](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-2)
 */
internal object PinBlockIso2: BlockEncoder, BlockDecoder {
    private val pinPreparer: PinPreparer = IsoPinPreparer(FNibbleProvider)
    private val pinDecoder: PinDecoder = IsoPinDecoder

    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        if (pan != null) {
            throw UnexpectedNotNullException("PAN should be null for ISO2")
        }
        return pinPreparer.preparePin(pin, Const.ISO2_VERSION)
    }

    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        if (pan != null) {
            throw UnexpectedNotNullException("PAN should be null for ISO2")
        }
        val blockBytes = pinDecoder.prepareBlockBytes(pinBlock)
        return pinDecoder.decodePinBytes(blockBytes, Const.ISO2_VERSION)
    }
}