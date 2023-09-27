package org.superarts.ktpinblock.utility

import kotlin.experimental.xor
import kotlin.random.Random

/**
 * Simple math utility.
 */
internal interface MathUtility {
    /**
     * Random nimble from 0x0 to 0xF.
     */
    fun randomNibble() : Byte

    /**
     * ByteArray xor operation.
     * TODO: is operator overriding more readable?
     */
    fun xor(lhs: ByteArray, rhs: ByteArray) : ByteArray
}

/**
 * A simple kotlinx compatible math utility.
 * TODO: create interface and inject this dependency as the default implementation.
 */
internal object MathUtilityX : MathUtility {
    /**
     * Random nimble from 0x0 to 0xF.
     *
     * Discussion: java.lang.Math is not available in KMM for now.
     */
    override fun randomNibble() : Byte {
        return Random.nextInt(0, 16).toByte()
    }

    /**
     * ByteArray xor operation.
     */
    override fun xor(lhs: ByteArray, rhs: ByteArray) : ByteArray {
        return lhs.zip(rhs).map { (x, y) -> x xor y }.toByteArray()
    }
}