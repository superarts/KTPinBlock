package org.superarts.ktpinblock

import org.superarts.ktpinblock.format.PinBlockFormat

/**
 * Provides more PIN block encoding APIs based on `BlockEncoder`.
 * Pass null as PAN if it is not available for certain formats.
 * TODO: figure out the actual use cases and build easy-to-use APIs.
 */
interface PinBlockEncoder {
    /**
     * Encode to ByteArray, e.g. 0x3 0x4 0x1 0x2 ...
     */
    fun encodeToBytes(pan: String?, pin: String, format: PinBlockFormat) : ByteArray

    /**
     * Encode to String, e.g. 3412ACC9B98CDF43
     */
    fun encode(pan: String?, pin: String, format: PinBlockFormat) : String

    /**
     * Encode to compact ByteArray, i.e. putting nibbles together. e.g. 0x34 0x12 0xAC 0xC9 ...
     * TODO: `encodeToBytes` and `encodeToNibbles` sound confusing either way, need more discussion.
     */
    fun encodeToCompactBytes(pan: String?, pin: String, format: PinBlockFormat) : ByteArray
}

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
