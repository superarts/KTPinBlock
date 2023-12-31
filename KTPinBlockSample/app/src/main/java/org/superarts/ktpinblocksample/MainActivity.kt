package org.superarts.ktpinblocksample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import org.superarts.ktpinblocksample.ui.theme.KTPinBlockSampleTheme
import org.superarts.ktpinblock.PinBlock
import org.superarts.ktpinblock.coder.PinBlockDecoder
import org.superarts.ktpinblock.coder.PinBlockEncoder
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.utility.toHexString

class MainActivity : ComponentActivity() {
    private val pinBlockEncoder: PinBlockEncoder = PinBlock()
    private val pinBlockDecoder: PinBlockDecoder = PinBlock()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KTPinBlockSampleTheme {
                Surface(
                    modifier = Modifier
                        .fillMaxSize()
                        .verticalScroll(rememberScrollState()),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val pan = "43219876543210987"
                    val pin = "1234"
                    val blockIso3 = "3412ACC9B98CDF43"
                    val blockIso1 = "141234CE8C767872"
                    val blockIso2 = "241234FFFFFFFFFF"
                    val blockIso0 = "0412AC89ABCDEF67"
                    TextInfo("PAN: " + pan + "\n"
                            + "PIN: " + pin + "\n"
                            + "PIN Block ISO-3: " + blockIso3 + "\n"
                            + "PIN Block ISO-1: " + blockIso1 + "\n"
                            + "PIN Block ISO-2: " + blockIso2 + "\n"
                            + "PIN Block ISO-0: " + blockIso0 + "\n"
                            + "\n"
                            + "ISO3 string:\n"
                            + pinBlockEncoder.encode(pan, pin, PinBlockFormat.ISO3)
                            + "\n\n"
                            + "ISO3 hex:\n"
                            + pinBlockEncoder.encodeToBytes(pan, pin, PinBlockFormat.ISO3).toHexString(" ", "0x0")
                            + "\n\n"
                            + "ISO3 compact hex:\n"
                            + pinBlockEncoder.encodeToCompactBytes(pan, pin, PinBlockFormat.ISO3).toHexString(" ", "0x")
                            + "\n\n"
                            + "ISO3 decode:\n"
                            + pinBlockDecoder.decodePinBlock(blockIso3, pan, PinBlockFormat.ISO3)
                            + "\n\n"
                            + "ISO1 string:\n"
                            + pinBlockEncoder.encode(null, pin, PinBlockFormat.ISO1)
                            + "\n\n"
                            + "ISO1 hex:\n"
                            + pinBlockEncoder.encodeToBytes(null, pin, PinBlockFormat.ISO1).toHexString(" ", "0x0")
                            + "\n\n"
                            + "ISO1 compact hex:\n"
                            + pinBlockEncoder.encodeToCompactBytes(null, pin, PinBlockFormat.ISO1).toHexString(" ", "0x")
                            + "\n\n"
                            + "ISO1 decode:\n"
                            + pinBlockDecoder.decodePinBlock(blockIso1, null, PinBlockFormat.ISO1)
                            + "\n\n"
                            + "ISO2 string:\n"
                            + pinBlockEncoder.encode(null, pin, PinBlockFormat.ISO2)
                            + "\n\n"
                            + "ISO2 hex:\n"
                            + pinBlockEncoder.encodeToBytes(null, pin, PinBlockFormat.ISO2).toHexString(" ", "0x0")
                            + "\n\n"
                            + "ISO2 compact hex:\n"
                            + pinBlockEncoder.encodeToCompactBytes(null, pin, PinBlockFormat.ISO2).toHexString(" ", "0x")
                            + "\n\n"
                            + "ISO2 decode:\n"
                            + pinBlockDecoder.decodePinBlock(blockIso2, null, PinBlockFormat.ISO2)
                            + "\n\n"
                            + "ISO0 string:\n"
                            + pinBlockEncoder.encode(pan, pin, PinBlockFormat.ISO0)
                            + "\n\n"
                            + "ISO0 hex:\n"
                            + pinBlockEncoder.encodeToBytes(pan, pin, PinBlockFormat.ISO0).toHexString(" ", "0x0")
                            + "\n\n"
                            + "ISO0 compact hex:\n"
                            + pinBlockEncoder.encodeToCompactBytes(pan, pin, PinBlockFormat.ISO0).toHexString(" ", "0x")
                            + "\n\n"
                            + "ISO0 decode:\n"
                            + pinBlockDecoder.decodePinBlock(blockIso0, pan, PinBlockFormat.ISO0)
                    )
                }
            }
        }
    }
}

@Composable
fun TextInfo(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "KTPinBlock\n\n$name",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    KTPinBlockSampleTheme {
        TextInfo("Android")
    }
}