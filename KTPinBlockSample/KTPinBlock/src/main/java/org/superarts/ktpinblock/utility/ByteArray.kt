package org.superarts.ktpinblock.utility

//fun ByteArray.toHexString() = asUByteArray().joinToString(" ") { it.toString(16).padStart(2, '0') }

/**
 * ByteArray helper.
 */
fun ByteArray.toHexString(separator: String = "", format: String = "%01X") : String {
    return this.joinToString(separator) {
        java.lang.String.format(format, it)
    }
}
