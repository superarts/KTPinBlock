package org.superarts.ktpinblock.format

/**
 * Prepare PAN from default String input to ByteArray.
 */
internal interface PanPreparer {
    fun preparePan(pan: String) : ByteArray
}

