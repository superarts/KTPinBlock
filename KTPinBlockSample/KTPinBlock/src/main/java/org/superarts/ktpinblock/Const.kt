package org.superarts.ktpinblock

internal object Const {
    /**
     * Length of PIN block.
     * TODO: purchase ISO PDF and confirm it's always the case for all formats.
     */
    var PIN_BLOCK_LENGTH = 16

    /**
     * "0" in ASCII to perform PIN calculation.
     * It should not be used for other purposes.
     */
    var PIN_CHAR_0 = 0x30
}