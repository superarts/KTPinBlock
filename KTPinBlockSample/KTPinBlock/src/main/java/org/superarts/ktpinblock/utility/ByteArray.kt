package org.superarts.ktpinblock.utility

/**
 * ByteArray helper. It works for nibbles only.
 *
 * Discussion: `String.format` based implementations provide better APIs,
 * but they are not supported by kotlinx for now.
 * See [here](https://stackoverflow.com/questions/23086291/kotlin-string-formatting) for more discussion.
 */
fun ByteArray.toHexString(separator: String = "", prefix: String = "") : String {
    return this.asUByteArray().joinToString(separator) {
        prefix + it.toString(radix = 16).uppercase()
    }
}
