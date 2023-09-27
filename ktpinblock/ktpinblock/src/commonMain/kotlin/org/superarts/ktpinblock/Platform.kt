package org.superarts.ktpinblock

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform