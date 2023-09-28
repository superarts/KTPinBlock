package org.superarts.ktpinblock.format

/**
 * Validate input values.
 */
internal interface InputValidator {
    /**
     * Validate PIN String.
     * Throws an exception when validation fails.
     */
    fun validatePin(pin: String, format: PinBlockFormat)

    /**
     * Validate PAN String.
     * Throws an exception when validation fails.
     */
    fun validatePan(pan: String?, format: PinBlockFormat)

    /**
     * Validate PAN String knowing it is not null.
     * Throws an exception when validation fails.
     */
    fun validatePanNotNull(pan: String)

    /**
     * Validate PIN block String.
     * Throws an exception when validation fails.
     */
    fun validatePinBlock(pinBlock: String, format: PinBlockFormat)
}