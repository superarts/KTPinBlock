package org.superarts.ktpinblock

import org.junit.Test

import org.junit.Assert.*
import org.superarts.ktpinblock.format.PinBlockIso2

class PinBlockIso2Test {
    @Test(expected = PinException::class)
    fun encodeToBytes_shouldThrowWithShortPin() {
        PinBlockIso2.encodeToBytes(null, "123")
    }

    @Test(expected = UnexpectedNotNullException::class)
    fun encodeToBytes_shouldThrowWithoutPan() {
        PinBlockIso2.encodeToBytes("1111222233334444", "1234")
    }

    @Test
    fun encodeToBytes_shouldMatchSize() {
        assertEquals(Const.PIN_BLOCK_LENGTH, PinBlockIso2.encodeToBytes(null, "1234").size)
    }

    /**
     * EFTLab Example:
        PIN blocks: PIN block encrypt operation finished
        ****************************************
        PAN:            43219876543210987
        PIN:            1234
        PAD:            N/A
        Format:         Format 2 (ISO-2)
        —————————————-
        Clear PIN block:241234FFFFFFFFFF     */
    @Test
    fun encodeToBytes_shouldMatchEftLab() {
        // TODO: should PAN be not null, and just ignored?
        //val pan = "43219876543210987"
        val pin = "1234"
        // Only bytes 0-5 are not random.
        assertEquals(0x2.toByte(), PinBlockIso2.encodeToBytes(null, pin)[0])
        assertEquals(0x4.toByte(), PinBlockIso2.encodeToBytes(null, pin)[1])
        assertEquals(0x1.toByte(), PinBlockIso2.encodeToBytes(null, pin)[2])
        assertEquals(0x2.toByte(), PinBlockIso2.encodeToBytes(null, pin)[3])
        assertEquals(0x3.toByte(), PinBlockIso2.encodeToBytes(null, pin)[4])
        assertEquals(0x4.toByte(), PinBlockIso2.encodeToBytes(null, pin)[5])
        for (index in 6 until 16) {
            assertEquals(0xf.toByte(), PinBlockIso2.encodeToBytes(null, pin)[index])
        }
    }

    @Test(expected = PinBlockLengthException::class)
    fun decodeToBytes_shouldThrowBlock() {
        val block = "11112222333344445"
        PinBlockIso2.decodeBlock(block, null)
    }

    @Test(expected = PinException::class)
    fun decodeToBytes_shouldThrowPinVersion() {
        val block = "1111222233334444"
        // Pin version validation should fail
        PinBlockIso2.decodeBlock(block, null)
    }

    /**
     * PIN blocks: PIN block decode operation finished
        ****************************************
        PIN block:      241234FFFFFFFFFF
        PAN:            N/A
        PAD:            N/A
        Format:         Format 2 (ISO-2)
        —————————————-
        Decoded PIN:    1234
     */
    @Test
    fun decodeToBytes_shouldMatchEftLab() {
        val block = "241234FFFFFFFFFF"
        assertEquals("1234", PinBlockIso2.decodeBlock(block, null))
    }

    // TODO: add more test cases
}