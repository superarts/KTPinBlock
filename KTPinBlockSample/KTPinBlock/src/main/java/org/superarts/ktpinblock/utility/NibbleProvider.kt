package org.superarts.ktpinblock.utility

/**
 * Provide a nibble for purposes like filling, padding, etc.
 */
interface NibbleProvider {
    /**
     * A nibble.
     */
    val nibble: Byte
}

/**
 * Provide a random nibble. Usage: ISO3, etc.
 */
internal object RandomNibbleProvider : NibbleProvider {
    private val mathUtility: MathUtility = MathUtilityX

    override val nibble: Byte
        get() = mathUtility.randomNibble()
}

/**
 * Provide a nibble with value F. Usage: ISO2, etc.
 */
internal object FNibbleProvider : NibbleProvider {
    override val nibble: Byte
        get() = 0xf.toByte()
}