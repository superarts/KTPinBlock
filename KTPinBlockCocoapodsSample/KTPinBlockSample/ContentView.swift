//
//  ContentView.swift
//  KTPinBlockSample
//
//  Created by Leo on 9/27/23.
//

import SwiftUI
import ktpinblock

struct ContentView: View {

    private let pinBlock = PinBlock()
    private var pinBlockEncoder: PinBlockEncoder { pinBlock }
    private var pinBlockDecoder: PinBlockDecoder { pinBlock }

    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("KMM Test")
            Text(Greeting().greet())
        }
        VStack {
            Text("ISO-3")
            Divider()
            Text(pinBlockEncoder.encode(pan: "43219876543210987", pin: "1234", format: .iso3))
            Divider()
            Text(pinBlockEncoder.encodeToBytes(pan: "43219876543210987", pin: "1234", format: .iso3).toHexString(separator: " ", prefix: "0x0"))
            Divider()
            Text(pinBlockEncoder.encodeToCompactBytes(pan: "43219876543210987", pin: "1234", format: .iso3).toHexString(separator: " ", prefix: "0x"))
            Divider()
            Text(pinBlockDecoder.decodePinBlock(pinBlock: "3412ACC9B98CDF43", pan: "43219876543210987", format: .iso3))
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
