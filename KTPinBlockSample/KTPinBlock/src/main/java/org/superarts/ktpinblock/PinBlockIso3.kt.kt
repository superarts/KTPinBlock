package org.superarts.ktpinblock

sealed interface PinPreparer {
    fun preparePin(pin: String) : ByteArray
}

sealed interface PanPreparer {
    fun preparePan(pan: String) : ByteArray
}

class TodoPinPreparer : PinPreparer {
    override fun preparePin(pin: String) : ByteArray {
        throw NotImplementedException("PIN preparer for this standard is not implemented yet.")
    }
}

class TodoPanPreparer : PanPreparer {
    override fun preparePan(pan: String) : ByteArray {
        throw NotImplementedException("PAN preparer for this standard is not implemented yet.")
    }
}

class RedundantPanPreparer : PanPreparer {
    override fun preparePan(pan: String) : ByteArray {
        throw NoImplementionNeededException("PAN preparer is not needed for this standard.")
    }
}

// Implementation of: https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks#ISO-3
class PinBlockIso3: PinPreparer, PanPreparer {
    /**
    Prepare a PIN – L is length of the PIN, P is PIN digit, R is random value from X’0′ to X’F’
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    3	L	P	P	P	P	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R	P/R
     */
    override fun preparePin(pin: String) : ByteArray {
        if (pin.length < 4) {
            throw PinException("Pin length is less than 4")
        }
        val pinBytes = pin.toByteArray(Charsets.US_ASCII)

        val result = ByteArray(16)
        result[0] = 3.toByte()
        result[1] = pin.length.toByte()
        for (index in 2 until 6) {
            result[index] = (pinBytes[index - 2] - 0x30).toByte()
        }
        for (index in 6 until 16) {
            if (pin.length + 2 > index) {
                result[index] = (pinBytes[index - 2] - 0x30).toByte()
            } else {
                result[index] = (Math.random() * 15).toInt().toByte()
            }
        }

        return result
    }

    /**
    Prepare PAN – take 12 rightmost digits of the primary account number (excluding the check digit)
    1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16
    0	0	0	0	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN	PAN
     */
    override fun preparePan(pan: String) : ByteArray {
        if (pan.length < 12) {
            throw PanException("Pan length is less than 12")
        }
        val panBytes = pan.toByteArray(Charsets.US_ASCII)

        val result = ByteArray(16)
        for (index in 0 until 4) {
            result[index] = 0.toByte()
        }
        for (index in 4 until 16) {
            result[index] = (panBytes[panBytes.size - 12 - 1 + index - 4] - 0x30).toByte()
        }

        return result
    }
}