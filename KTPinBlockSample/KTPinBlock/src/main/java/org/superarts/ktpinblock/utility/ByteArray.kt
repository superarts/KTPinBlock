package org.superarts.ktpinblock.utility

/**
 * ByteArray helper.
 */
fun ByteArray.toHexString(separator: String = "", format: String = "%01X") : String {
    return this.joinToString(separator) {
        java.lang.String.format(format, it)
    }
}
