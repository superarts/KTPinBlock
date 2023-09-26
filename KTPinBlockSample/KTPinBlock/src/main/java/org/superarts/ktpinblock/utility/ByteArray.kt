package org.superarts.ktpinblock.utility

//fun ByteArray.toHexString() = asUByteArray().joinToString(" ") { it.toString(16).padStart(2, '0') }

/**
 * ByteArray helper.
 *
 * Discussion: we may make it public if there's any actual external use case.
 */
internal fun ByteArray.toHexString(separator: String = "", format: String = "%01X") : String {
    return this.joinToString("") {
        java.lang.String.format(format, it)
    }
}
