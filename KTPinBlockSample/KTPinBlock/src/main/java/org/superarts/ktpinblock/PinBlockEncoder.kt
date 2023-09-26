package org.superarts.ktpinblock

import org.superarts.ktpinblock.format.PinBlockFormat

/**
 * Provides PIN block encoding functionalities.
 */
interface PinBlockEncoder {
    fun encode(pin: String, pan: String, format: PinBlockFormat) : String
}

