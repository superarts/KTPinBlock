package org.superarts.ktpinblock.calculator

import org.superarts.ktpinblock.NotImplementedException

/**
 * PIN block calculator. Every PIN block format requires a PIN preparer.
 */
interface BlockCalculator {
    /**
     * Calculate PIN block.
     */
    fun calculateBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray
}

/**
 * A placeholder PIN block calculator to indicate an implementation will be required.
 * This class should be removed after all PIN block calculators are implemented.
 */
object TodoBlockCalculator : BlockCalculator {
    override fun calculateBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        throw NotImplementedException("PIN block calculator for this standard is not implemented yet.")
    }
}
