package org.superarts.ktpinblock.format

/**
 * Prepare PIN from String to ByteArray for further processing.
 */
interface PinPreparer {
    fun preparePin(pin: String, version: Byte): ByteArray
}