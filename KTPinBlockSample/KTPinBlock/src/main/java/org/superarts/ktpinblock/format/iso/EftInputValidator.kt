package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PanException
import org.superarts.ktpinblock.PinBlockLengthException
import org.superarts.ktpinblock.PinException
import org.superarts.ktpinblock.UnexpectedNotNullException
import org.superarts.ktpinblock.UnexpectedNullException
import org.superarts.ktpinblock.format.InputValidator
import org.superarts.ktpinblock.format.PinBlockFormat

/**
 * Input validator based on [EFTLab](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks).
 * It is a very rough implementation.
 * TODO: purchase ISO PDFs and replace this class with IsoInputValidator in this package,
 *  and do the same for other standards.
 */
internal object EftInputValidator : InputValidator {
    /**
     * Validate PIN String.
     * Throws an exception when validation fails.
     */
    override fun validatePin(pin: String, format: PinBlockFormat) {
        if (pin.length < Const.PIN_MIN_LENGTH) {
            throw PinException("Pin length is less than 4")
        }

        // TODO: validate max length
        // TODO: validate PIN string to between 0 and 9
    }

    /**
     * Validate PAN String.
     * Throws an exception when validation fails.
     * TODO: know more about PAN checksum.
     *  Figure out whether PAN for formats like ISO-0 should be ignored or invalidated (they are invalidated for now).
     */
    override fun validatePan(pan: String?, format: PinBlockFormat) {
        when (format) {
            PinBlockFormat.ISO0, PinBlockFormat.ISO3, PinBlockFormat.ISO4,
            PinBlockFormat.ANSIX98,
            PinBlockFormat.ECI1,
            PinBlockFormat.VISA1, PinBlockFormat.VISA4,
            PinBlockFormat.DOCUTEL2 -> {
                if (pan == null) {
                    throw UnexpectedNullException("PAN should NOT be null for this format.")
                }
                validatePanNotNull(pan)
            }
            PinBlockFormat.ISO1, PinBlockFormat.ISO2,
            PinBlockFormat.OEM1,
            PinBlockFormat.ECI2, PinBlockFormat.ECI3, PinBlockFormat.ECI4,
            PinBlockFormat.IBM3621, PinBlockFormat.IBM3624, PinBlockFormat.IBM4704, PinBlockFormat.IBM5906,
            PinBlockFormat.VISA2, PinBlockFormat.VISA3,
            PinBlockFormat.AS2805Format1, PinBlockFormat.AS2805Format8 -> {
                if (pan != null) {
                    throw UnexpectedNotNullException("PAN should be null for this format.")
                }
            }
        }
    }

    /**
     * Validate PAN String knowing it is not null.
     * Throws an exception when validation fails.
     */
    override fun validatePanNotNull(pan: String) {
        if (pan.length < Const.PAN_MIN_LENGTH) {
            throw PanException("Pan length is less than 12")
        }
        // TODO: validate max PAN length
        // TODO: validate PAN string to between 0 and 9
    }

    /**
     * Validate PIN block String.
     * Throws an exception when validation fails.
     */
    override fun validatePinBlock(pinBlock: String, format: PinBlockFormat) {
        if (pinBlock.length != Const.PIN_BLOCK_LENGTH) {
            throw PinBlockLengthException("PIN block length is not " + Const.PIN_BLOCK_LENGTH)
        }

        // TODO: validate PIN block string to between 0 and F
    }
}