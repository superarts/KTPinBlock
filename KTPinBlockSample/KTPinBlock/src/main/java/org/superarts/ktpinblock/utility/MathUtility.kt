package org.superarts.ktpinblock.utility

import kotlin.experimental.xor

/**
 * A simple math utility.
 * TODO: create interface and inject this dependency as the default implementation.
 */
internal object MathUtility {
    /**
     * Random nimble from 0x0 to 0xF.
     */
    fun randomNibble() : Byte {
        return (Math.random() * 16).toInt().toByte()
    }

    fun xor(lhs: ByteArray, rhs: ByteArray) : ByteArray {
        return lhs.zip(rhs).map { (x, y) -> x xor y }.toByteArray()
    }
}