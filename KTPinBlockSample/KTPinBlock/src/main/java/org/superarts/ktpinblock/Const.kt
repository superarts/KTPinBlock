package org.superarts.ktpinblock

internal object Const {
    /**
     * From ETFLab, PIN appears to be 4 digits at least.
     * so PAN should be at least 12 digits.
     */
    var PIN_MIN_LENGTH = 4

    /**
     * "0" in ASCII to perform PIN and PIN block calculation.
     * It should not be used for other purposes.
     */
    var PIN_CHAR_0 = 0x30

    // PAN

    /**
     * From ETFLab: "take 12 rightmost digits of the primary account number",
     * so PAN should be at least 12 digits.
     */
    var PAN_MIN_LENGTH = 12

    // PIN block

    /**
     * Length of PIN block.
     * TODO: purchase ISO PDF and confirm it's always the case for all formats.
     */
    var PIN_BLOCK_LENGTH = 16

    /**
     * "0" in ASCII to perform PIN block calculation.
     * It should not be used for other purposes.
     */
    var PIN_BLOCK_CHAR_A = 0x41

    // ISO

    /**
     * ISO 9564-1:2003 Format 0
     */
    var ISO0_VERSION = 0.toByte()

    /**
     * ISO 9564-1:2003 Format 1
     */
    var ISO1_VERSION = 1.toByte()

    /**
     * ISO 9564-1:2003 Format 2
     */
    var ISO2_VERSION = 2.toByte()

    /**
     * ISO 9564-1:2003 Format 3
     */
    var ISO3_VERSION = 3.toByte()
}