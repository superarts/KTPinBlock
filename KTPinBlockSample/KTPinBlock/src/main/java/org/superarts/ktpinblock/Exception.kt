package org.superarts.ktpinblock

sealed class PinBlockException(message: String): Exception(message)

class UnexpectedNullException(message: String) : PinBlockException(message)
class PinException(message: String) : PinBlockException(message)
class PanException(message: String) : PinBlockException(message)
class PinBlockLengthException(message: String) : PinBlockException(message)
class NotImplementedException(message: String) : PinBlockException(message)
class NoImplementionNeededException(message: String) : PinBlockException(message)
