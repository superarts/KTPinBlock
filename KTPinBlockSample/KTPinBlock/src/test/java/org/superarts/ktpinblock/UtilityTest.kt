package org.superarts.ktpinblock

import org.junit.Assert.assertEquals
import org.junit.Test
import org.superarts.ktpinblock.format.iso.IsoPinDecoder
import org.superarts.ktpinblock.utility.toHexString

/**
 * TODO: Misc utility tests that should be refactored.
 */
class UtilityTest {
    @Test
    fun decodePinBlockFromBytes_shouldDecodeIso3() {
        val bytes = IsoPinDecoder.prepareBlockBytes("3412ACC9B98CDF43")
        assertEquals("3412ACC9B98CDF43", bytes.toHexString())
    }
}
