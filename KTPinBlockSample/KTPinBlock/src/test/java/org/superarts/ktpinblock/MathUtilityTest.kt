package org.superarts.ktpinblock

import org.junit.Test

import org.superarts.ktpinblock.utility.MathUtility
import org.superarts.ktpinblock.utility.MathUtilityX

class MathUtilityTest {
    private val mathUtility: MathUtility = MathUtilityX

    @Test
    fun randomNibble_shouldAlwaysBeLessThan0x10() {
        repeat(100) {
            assert(mathUtility.randomNibble() < 0x10)
        }
    }

    // TODO: add more test cases
}