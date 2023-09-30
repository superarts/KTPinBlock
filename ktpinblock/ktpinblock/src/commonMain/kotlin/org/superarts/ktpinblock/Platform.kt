package org.superarts.ktpinblock

import kotlin.js.JsExport

@JsExport
interface Platform {
    val name: String
}

expect fun getPlatform(): Platform