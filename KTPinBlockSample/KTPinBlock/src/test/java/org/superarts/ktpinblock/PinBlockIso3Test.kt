package org.superarts.ktpinblock

import org.junit.Test

import org.junit.Assert.*
import org.superarts.ktpinblock.format.PinBlockIso3

class PinBlockIso3Test {
    @Test(expected = PinException::class)
    fun encodeToBytes_shouldThrowWithShortPin() {
        PinBlockIso3.encodeToBytes("1111222233334444", "123")
    }

    @Test(expected = UnexpectedNullException::class)
    fun encodeToBytes_shouldThrowWithoutPan() {
        PinBlockIso3.encodeToBytes(null, "1234")
    }

    @Test
    fun encodeToBytes_shouldMatchSize() {
        assertEquals(Const.PIN_BLOCK_LENGTH, PinBlockIso3.encodeToBytes("1111222233334444", "1234").size)
    }

    /**
     * EFTLab Example:
        PIN blocks: PIN block encrypt operation finished
        ****************************************
        PAN:            43219876543210987
        PIN:            1234
        PAD:            N/A
        Format:         Format 3 (ISO-3)
        —————————————-
        Clear PIN block:3412ACC9B98CDF43
     */
    @Test
    fun encodeToBytes_shouldMatchEftLab() {
        val pan = "43219876543210987"
        val pin = "1234"
        // Only bytes 0-5 are not random.
        assertEquals(0x3, PinBlockIso3.encodeToBytes(pan, pin)[0])
        assertEquals(0x4, PinBlockIso3.encodeToBytes(pan, pin)[1])
        assertEquals(0x1, PinBlockIso3.encodeToBytes(pan, pin)[2])
        assertEquals(0x2, PinBlockIso3.encodeToBytes(pan, pin)[3])
        assertEquals(0xA, PinBlockIso3.encodeToBytes(pan, pin)[4])
        assertEquals(0xC, PinBlockIso3.encodeToBytes(pan, pin)[5])
    }

    // TODO: add more unit tests
}