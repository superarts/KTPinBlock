plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    id("com.android.library")
}

@OptIn(org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi::class)
kotlin {
    targetHierarchy.default()

    android {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    iosX64()
    iosArm64()
    iosSimulatorArm64()

    cocoapods {
        summary = "A Kotlin implementation of PIN Block formats."
        homepage = "https://github.com/superarts/KTPinBlock"
        version = "1.0"
        ios.deploymentTarget = "14.1"
        framework {
            baseName = "ktpinblock"
        }
    }
    
    sourceSets {
        val commonMain by getting {
            dependencies {
                //put your multiplatform dependencies here
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
    }
}

android {
    namespace = "org.superarts.ktpinblock"
    compileSdk = 33
    defaultConfig {
        minSdk = 24
    }
}