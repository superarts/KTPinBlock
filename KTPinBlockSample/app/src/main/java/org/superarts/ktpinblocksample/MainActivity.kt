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

class MainActivity : ComponentActivity() {
    private val pinBlockEncoder: PinBlockEncoder = PinBlock()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KTPinBlockSampleTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("ISO3: " + pinBlockEncoder.encode("1234", "43219876543210987", PinBlockFormat.ISO3))
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "KTPinBlock\n\n$name",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    KTPinBlockSampleTheme {
        Greeting("Android")
    }
}