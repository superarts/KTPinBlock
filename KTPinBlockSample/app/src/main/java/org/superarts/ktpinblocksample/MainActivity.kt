package org.superarts.ktpinblocksample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import org.superarts.ktpinblocksample.ui.theme.KTPinBlockSampleTheme
import org.superarts.ktpinblock.PinBlock
import org.superarts.ktpinblock.PinBlockEncoder
import org.superarts.ktpinblock.format.PinBlockFormat
import org.superarts.ktpinblock.utility.toHexString

class MainActivity : ComponentActivity() {
    private val pinBlockEncoder: PinBlockEncoder = PinBlock()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KTPinBlockSampleTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val pan = "43219876543210987"
                    val pin = "1234"
                    TextInfo("PAN: " + pan + "\n"
                            + "PIN: " + pin
                            + "\n\n"
                            + "ISO3 string:\n"
                            + pinBlockEncoder.encode(pan, pin, PinBlockFormat.ISO3)
                            + "\n\n"
                            + "ISO3 hex:\n"
                            + pinBlockEncoder.encodeToBytes(pan, pin, PinBlockFormat.ISO3).toHexString(" ", "0x%02X")
                            + "\n\n"
                            + "ISO3 compact hex:\n"
                            + pinBlockEncoder.encodeToCompactBytes(pan, pin, PinBlockFormat.ISO3).toHexString(" ", "0x%02X")
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