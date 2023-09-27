package org.superarts.ktpinblock

import org.junit.Test

import org.junit.Assert.*
import org.superarts.ktpinblock.format.iso.PinBlockIso0

class PinBlockIso0Test {
    @Test(expected = PinException::class)
    fun encodeToBytes_shouldThrowWithShortPin() {
        PinBlockIso0.encodeToBytes("1111222233334444", "123")
    }

    @Test(expected = UnexpectedNullException::class)
    fun encodeToBytes_shouldThrowWithoutPan() {
        PinBlockIso0.encodeToBytes(null, "1234")
    }

    @Test
    fun encodeToBytes_shouldMatchSize() {
        assertEquals(Const.PIN_BLOCK_LENGTH, PinBlockIso0.encodeToBytes("1111222233334444", "1234").size)
    }

    /**
     * EFTLab Example:
        PIN blocks: PIN block encrypt operation finished
        ****************************************
        PAN:            43219876543210987
        PIN:            1234
        PAD:            N/A
        Format:         Format 0 (ISO-0)
        —————————————-
        Clear PIN block:0412AC89ABCDEF67
     */
    @Test
    fun encodeToBytes_shouldMatchEftLab() {
        val pan = "43219876543210987"
        val pin = "1234"
        // Only bytes 0-5 are not random.
        assertEquals(0x0.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[0])
        assertEquals(0x4.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[1])
        assertEquals(0x1.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[2])
        assertEquals(0x2.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[3])
        assertEquals(0xA.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[4])
        assertEquals(0xC.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[5])
        assertEquals(0x8.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[6])
        assertEquals(0x9.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[7])
        assertEquals(0xa.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[8])
        assertEquals(0xb.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[9])
        assertEquals(0xc.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[10])
        assertEquals(0xd.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[11])
        assertEquals(0xe.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[12])
        assertEquals(0xf.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[13])
        assertEquals(0x6.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[14])
        assertEquals(0x7.toByte(), PinBlockIso0.encodeToBytes(pan, pin)[15])
    }

    @Test(expected = PinBlockLengthException::class)
    fun decodeToBytes_shouldThrowBlock() {
        val block = "11112222333344445"
        val pan = "1111222233334444"
        PinBlockIso0.decodeBlock(block, pan)
    }

    @Test(expected = PinException::class)
    fun decodeToBytes_shouldThrowPinVersion() {
        val block = "1111222233334444"
        val pan = "1111222233334444"
        // Pin version validation should fail
        PinBlockIso0.decodeBlock(block, pan)
    }

    /**
     * EFTLab Example:
        PIN blocks: PIN block decode operation finished
        ****************************************
        PIN block:      0412AC89ABCDEF67
        PAN:            43219876543210987
        PAD:            N/A
        Format:         Format 0 (ISO-0)
        —————————————-
        Decoded PIN:    1234
     */
    @Test
    fun decodeToBytes_shouldMatchEftLab() {
        val block = "0412AC89ABCDEF67"
        val pan = "43219876543210987"
        assertEquals("1234", PinBlockIso0.decodeBlock(block, pan))
    }

    // TODO: add more test cases
}