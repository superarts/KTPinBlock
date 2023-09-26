package org.superarts.ktpinblock

import org.superarts.ktpinblock.format.PinBlockFormat

/**
 * Provides PIN block decoding functionalities.
 * TODO: figure out the actual use cases and build easy-to-use APIs.
 */
interface PinBlockDecoder {
    /**
     * Decode PIN to String, e.g. 1234
     */
    fun decodePin(pinBlock: String, pan: String, format: PinBlockFormat) : String

    /**
     * Decode PIN to ByteArray, e.g. 0x1 0x2 0x3 0x4 ...
     */
    // fun decodePinToBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray

    /**
     * Decode PIN to compact ByteArray, e.g. 0x12 0x34 ...
     */
    // fun decodePinToCompactBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray
}

