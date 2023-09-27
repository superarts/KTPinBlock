package org.superarts.ktpinblock

import org.junit.Assert.assertEquals
import org.junit.Test
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.format.iso.IsoPinDecoder

class KtPinBlockTest {
    @Test
    fun todoTest() {
        // TODO: add more unit tests, targeting %95+ coverage.
    }

    @Test(expected = NotImplementedException::class)
    fun encode_shouldThrowWithIso4() {
        PinBlock().encode("1111222233334444", "1234", PinBlockFormat.ISO4)
    }

    @Test
    fun encode_shouldEncodeIso0() {
        assertEquals("0412AC89ABCDEF67", PinBlock().encode("43219876543210987", "1234", PinBlockFormat.ISO0))
    }

    @Test
    fun decodePinBlock_shouldDecodeIso3() {
        assertEquals("1234", PinBlock().decodePinBlock("3412ACC9B98CDF43", "43219876543210987", PinBlockFormat.ISO3))
    }

    @Test
    fun decodePinBlockFromBytes_shouldDecodeIso3() {
        val bytes = IsoPinDecoder.prepareBlockBytes("3412ACC9B98CDF43")
        assertEquals("1234", PinBlock().decodePinBlockFromBytes(bytes, "43219876543210987", PinBlockFormat.ISO3))
    }
}
