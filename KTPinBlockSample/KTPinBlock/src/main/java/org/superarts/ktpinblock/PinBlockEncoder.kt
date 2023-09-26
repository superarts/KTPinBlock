package org.superarts.ktpinblock

/**
 * Provides PIN block encoding functionalities.
 */
interface PinBlockEncoder {
    fun encode(pin: String, pan: String, format: PinBlockFormat) : String
}

