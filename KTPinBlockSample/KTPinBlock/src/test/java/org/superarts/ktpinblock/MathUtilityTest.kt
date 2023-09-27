package org.superarts.ktpinblock

import org.junit.Test

import org.superarts.ktpinblock.utility.MathUtility

class MathUtilityTest {
    @Test
    fun randomNibble_shouldAlwaysBeLessThan0x10() {
        repeat(100) {
            assert(MathUtility.randomNibble() < 0x10)
        }
    }

    // TODO: add more test cases
}