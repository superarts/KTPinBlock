package org.superarts.ktpinblock

class JsPlatform : Platform {
    override val name: String = "JS"
}

actual fun getPlatform(): Platform = JsPlatform()
