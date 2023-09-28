package org.superarts.ktpinblock.format.iso

import org.superarts.ktpinblock.Const
import org.superarts.ktpinblock.PanException
import org.superarts.ktpinblock.format.InputValidator
import org.superarts.ktpinblock.format.PanPreparer
import org.superarts.ktpinblock.utility.StringUtility
import org.superarts.ktpinblock.utility.StringUtilityX

/**
 * PAN preparer for ISO formats.
 */
internal object IsoPanPreparer : PanPreparer {
    private val stringUtility: StringUtility = StringUtilityX

    /**
     * Convert PAN string "1234..." to ByteArray with 0x01, 0x02, 0x03, 0x04...
     */
    override fun preparePan(pan: String) : ByteArray {
        val panBytes = stringUtility.getByteArray(pan)
        return preparePanBytes(panBytes)
    }

    /**
    Prepare PAN – take 12 rightmost digits of the primary account number (excluding the check digit)
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    0	0	0	0	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN
     */
    private fun preparePanBytes(panBytes: ByteArray) : ByteArray {
        val blockBytes = ByteArray(Const.PIN_BLOCK_LENGTH)
        for (index in 0 until 4) {
            blockBytes[index] = 0.toByte()
        }
        for (index in 4 until Const.PIN_BLOCK_LENGTH) {
            blockBytes[index] = (panBytes[panBytes.size - 12 - 1 + index - 4] - Const.PIN_CHAR_0).toByte()
        }

        return blockBytes
    }
}