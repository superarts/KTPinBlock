package org.superarts.ktpinblock

import org.junit.Test

import org.junit.Assert.*
import org.superarts.ktpinblock.format.PinBlockIso3

class PinBlockIso3Test {
    @Test(expected = PinException::class)
    fun preparePin_shouldFailWithShortPin() {
        PinBlockIso3.preparePin("123")
    }

    @Test
    fun preparePin_shouldMatchSize() {
        for (index in 4 until 20) {
            val pin = "0".repeat(index)
            val bytes = PinBlockIso3.preparePin(pin)
            assertEquals(16, bytes.size)
        }
    }

    @Test
    fun preparePin_shouldMatchResult() {
        val bytes = PinBlockIso3.preparePin("1234")
        assertEquals(3, bytes[0].toInt())
        assertEquals(4, bytes[1].toInt())
        assertEquals(1, bytes[2].toInt())
        assertEquals(2, bytes[3].toInt())
        assertEquals(3, bytes[4].toInt())
        assertEquals(4, bytes[5].toInt())
    }

    // TODO: add more unit tests
}