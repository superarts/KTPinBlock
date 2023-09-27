package org.superarts.ktpinblock.utility

object StringUtility {
    /**
     * Very basic `toByteArray` implementation for ASCII only.
     *
     * Discussion: String.toByteArray(Charsets.US_ASCII) is not available in kotlinx yet.
     */
    fun getByteArray(string: String) : ByteArray {
        val bytes = ByteArray(string.length)
        for (index in string.indices) {
            bytes[index] = string[index].code.toByte()
        }
        return bytes
    }
}
