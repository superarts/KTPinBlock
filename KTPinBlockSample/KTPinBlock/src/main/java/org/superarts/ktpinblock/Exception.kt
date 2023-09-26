package org.superarts.ktpinblock

sealed class PinBlockException(message: String): Exception(message)

// Invalid PIN.
class PinException(message: String) : PinBlockException(message)

// Invalid PAN.
class PanException(message: String) : PinBlockException(message)

// Invalid PIN block.
// TODO: replace with javax.crypto.IllegalBlockSizeException?
class PinBlockLengthException(message: String) : PinBlockException(message)

// Missing implementation.
class NotImplementedException(message: String) : PinBlockException(message)

// Implementation is not needed.
class NoImplementationNeededException(message: String) : PinBlockException(message)
