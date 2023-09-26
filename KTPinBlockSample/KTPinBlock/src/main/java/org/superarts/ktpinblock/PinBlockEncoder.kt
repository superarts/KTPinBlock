package org.superarts.ktpinblock

import org.superarts.ktpinblock.format.PinBlockFormat

/**
 * Provides PIN block encoding functionalities.
 * TODO: figure out the actual use cases and build easy-to-use APIs.
 */
interface PinBlockEncoder {
    /**
     * Encode to String, e.g. 3412ACC9B98CDF43
     */
    fun encode(pan: String, pin: String, format: PinBlockFormat) : String

    /**
     * Encode to ByteArray, e.g. 0x3 0x4 0x1 0x2 ...
     */
    fun encodeToBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray

    /**
     * Encode to compact ByteArray, e.g. 0x34 0x12 0xAC 0xC9 ...
     */
    fun encodeToCompactBytes(pan: String, pin: String, format: PinBlockFormat) : ByteArray
}

