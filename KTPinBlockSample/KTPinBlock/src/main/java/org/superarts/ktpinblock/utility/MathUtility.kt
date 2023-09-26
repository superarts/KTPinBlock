package org.superarts.ktpinblock.utility

/**
 * A simple math utility.
 */
internal object MathUtility {
    /**
     * Random nimble from 0x0 to 0xF.
     */
    fun randomNibble() : Byte {
        return (Math.random() * 16).toInt().toByte()
    }
}