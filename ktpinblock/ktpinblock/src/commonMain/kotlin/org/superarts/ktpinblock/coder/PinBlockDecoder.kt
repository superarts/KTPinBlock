package org.superarts.ktpinblock.coder

import org.superarts.ktpinblock.format.PinBlockFormat
import kotlin.js.JsExport

/**
 * Provides PIN block decoding functionalities.
 * TODO: figure out the actual use cases and build easy-to-use APIs.
 */
@JsExport
interface PinBlockDecoder {
    /**
     * Decode PIN block as String.
     */
    fun decodePinBlock(pinBlock: String, pan: String?, format: PinBlockFormat) : String

    // TODO: provide `ByteArray` based APIs

    /**
     * Decode PIN block from ByteArray.
     */
    fun decodePinBlockFromBytes(pinBlock: ByteArray, pan: String?, format: PinBlockFormat) : String

    /**
     * Decode PIN block from compact ByteArray.
     * TODO: is it useful?
     */
    // fun decodePinBlockFromCompactBytes(pinBlock: ByteArray, pan: String?, format: PinBlockFormat) : String
}

