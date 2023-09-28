package org.superarts.ktpinblock.utility

/**
 * String utility.
 */
interface StringUtility {
    fun getByteArray(string: String) : ByteArray
}

/**
 * kotlinx compatible string utility..
 */
object StringUtilityX : StringUtility {
    /**
     * Very basic `toByteArray` implementation for ASCII only.
     *
     * Discussion: String.toByteArray(Charsets.US_ASCII) is not available in kotlinx yet.
     */
    override fun getByteArray(string: String) : ByteArray {
        val bytes = ByteArray(string.length)
        for (index in string.indices) {
            bytes[index] = string[index].code.toByte()
        }
        return bytes
    }
}
