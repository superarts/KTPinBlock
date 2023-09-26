package org.superarts.ktpinblock.format

import org.superarts.ktpinblock.calculator.BlockCalculator
import org.superarts.ktpinblock.calculator.PanPreparer
import org.superarts.ktpinblock.calculator.PinPreparer
import org.superarts.ktpinblock.calculator.RedundantPanPreparer
import org.superarts.ktpinblock.calculator.TodoBlockCalculator
import org.superarts.ktpinblock.calculator.TodoPanPreparer
import org.superarts.ktpinblock.calculator.TodoPinPreparer

/**
 * PIN block formats to be supported.
 * From: https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks
 * TODO: support other formats, e.g. Q/CUP 006.4
 */
enum class PinBlockFormat : PinPreparer, PanPreparer, BlockCalculator {
    ISO0, ISO1, ISO2, ISO3, ISO4,
    ANSIX98, OEM1,
    ECI1, ECI2, ECI3, ECI4,
    IBM3621, IBM3624, IBM4704, IBM5906,
    VISA1, VISA2, VISA3, VISA4,
    DOCUTEL2, AS2805Format1, AS2805Format8,
    ;

    /**
     * Prepare PIN as string.
     */
    override fun preparePin(pin: String): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3.preparePin(pin)
            else -> TodoPinPreparer.preparePin(pin)
        }
    }

    /**
     * Prepare PIN as ByteArray.
     */
    override fun preparePinBytes(pinBytes: ByteArray): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3.preparePinBytes(pinBytes)
            else -> TodoPinPreparer.preparePinBytes(pinBytes)
        }
    }

    /**
     * Prepare PAN as string.
     */
    override fun preparePan(pan: String): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3.preparePan(pan)
            ISO1, ISO2, OEM1, ECI2, ECI3, ECI4,
            IBM3621, IBM3624, IBM4704, IBM5906,
            VISA2, VISA3, AS2805Format1, AS2805Format8 -> RedundantPanPreparer.preparePan(pan)
            else -> TodoPanPreparer.preparePan(pan)
        }
    }

    /**
     * Prepare PAN as ByteArray.
     */
    override fun preparePanBytes(panBytes: ByteArray): ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3.preparePanBytes(panBytes)
            ISO1, ISO2, OEM1, ECI2, ECI3, ECI4,
            IBM3621, IBM3624, IBM4704, IBM5906,
            VISA2, VISA3, AS2805Format1, AS2805Format8 -> RedundantPanPreparer.preparePanBytes(panBytes)
            else -> TodoPanPreparer.preparePanBytes(panBytes)
        }
    }

    /**
     * Calculate PIN block.
     * If PAN is not required, the default implementation returns prepared PIN,
     * which is the desired behavior of certain formats, e.g. ISO-1 etc.
     */
    override fun calculateBlock(panBytes: ByteArray, pinBytes: ByteArray) : ByteArray {
        return when (this) {
            ISO3 -> PinBlockIso3.calculateBlock(panBytes, pinBytes)
            // In the following formats, PAN is not required, and prepared PIN bytes should be returned.
            ISO1, ISO2, OEM1, ECI2, ECI3, ECI4,
            IBM3621, IBM3624, IBM4704, IBM5906,
            VISA2, VISA3, AS2805Format1, AS2805Format8 -> return pinBytes
            else -> TodoBlockCalculator.calculateBlock(panBytes, pinBytes)
        }
    }
}
