package org.superarts.ktpinblock

import org.junit.Test

import org.superarts.ktpinblock.utility.MathUtility

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class MathUtilityTest {
    @Test
    fun randomNibble_shouldLessThan0x10() {
        repeat(100) {
            assert(MathUtility.randomNibble() < 0x10)
        }
    }
}