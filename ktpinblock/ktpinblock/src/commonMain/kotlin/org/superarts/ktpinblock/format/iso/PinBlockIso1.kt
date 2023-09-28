package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.UnexpectedNotNullException
import org.superarts.ktpinblock.coder.BlockDecoder
import org.superarts.ktpinblock.coder.BlockEncoder
import org.superarts.ktpinblock.format.InputValidator
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.format.PinDecoder
import org.superarts.ktpinblock.format.PinPreparer
import org.superarts.ktpinblock.utility.FNibbleProvider
import org.superarts.ktpinblock.utility.RandomNibbleProvider

/**
 * Implementation of [ISO-1](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-1)
 */
internal object PinBlockIso1: BlockEncoder, BlockDecoder {
    private val pinPreparer: PinPreparer = IsoPinPreparer(RandomNibbleProvider)
    private val pinDecoder: PinDecoder = IsoPinDecoder
    private val inputValidator: InputValidator = EftInputValidator

    override fun encodeToBytes(pan: String?, pin: String) : ByteArray {
        inputValidator.validatePan(pan, PinBlockFormat.ISO1)
        inputValidator.validatePin(pin, PinBlockFormat.ISO1)

        return pinPreparer.preparePin(pin, Const.ISO1_VERSION)
    }

    override fun decodeBlock(pinBlock: String, pan: String?) : String {
        inputValidator.validatePinBlock(pinBlock, PinBlockFormat.ISO1)
        inputValidator.validatePan(pan, PinBlockFormat.ISO1)

        val blockBytes = pinDecoder.prepareBlockBytes(pinBlock)
        return pinDecoder.decodePinBytes(blockBytes, Const.ISO1_VERSION)
    }
}