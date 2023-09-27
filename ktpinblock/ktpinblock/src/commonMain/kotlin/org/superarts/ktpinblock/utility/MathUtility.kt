package org.superarts.ktpinblock.utility

import kotlin.experimental.xor
import kotlin.random.Random

/**
 * A simple math utility.
 * TODO: create interface and inject this dependency as the default implementation.
 */
internal object MathUtility {
    /**
     * Random nimble from 0x0 to 0xF.
     *
     * Discussion: java.lang.Math is not available in KMM for now.
     */
    fun randomNibble() : Byte {
        return Random.nextInt(0, 16).toByte()
    }

    /**
     * ByteArray xor operation.
     * TODO: is operator overriding more readable?
     */
    fun xor(lhs: ByteArray, rhs: ByteArray) : ByteArray {
        return lhs.zip(rhs).map { (x, y) -> x xor y }.toByteArray()
    }
}