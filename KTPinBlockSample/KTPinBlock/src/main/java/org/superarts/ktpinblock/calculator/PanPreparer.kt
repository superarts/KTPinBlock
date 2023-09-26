package org.superarts.ktpinblock.calculator

import org.superarts.ktpinblock.NoImplementionNeededException
import org.superarts.ktpinblock.NotImplementedException

/**
 * Prepare PAN.
 */
interface PanPreparer {
    fun preparePan(pan: String) : ByteArray
    fun preparePanBytes(panBytes: ByteArray) : ByteArray
}

/**
 * A placeholder PAN preparer to indicate an implementation will be required.
 * This class should be removed after all PAN preparers are implemented.
 */
object TodoPanPreparer : PanPreparer {
    override fun preparePan(pan: String) : ByteArray {
        throw NotImplementedException("PAN preparer for this standard is not implemented yet.")
    }

    override fun preparePanBytes(panBytes: ByteArray) : ByteArray {
        throw NotImplementedException("PAN preparer for this standard is not implemented yet.")
    }
}

/**
 * A placeholder PAN preparer to indicate an implementation is not required for a certain format.
 * Some PIN block formats do not require PAN, only PIN.
 * An exception should be thrown for any attempts to prepare PAN for these formats.
 */
object RedundantPanPreparer : PanPreparer {
    override fun preparePan(pan: String) : ByteArray {
        throw NoImplementionNeededException("PAN preparer is not needed for this standard.")
    }

    override fun preparePanBytes(panBytes: ByteArray) : ByteArray {
        throw NoImplementionNeededException("PAN preparer is not needed for this standard.")
    }
}