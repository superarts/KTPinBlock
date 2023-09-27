//
//  ContentView.swift
//  KTPinBlockSample
//
//  Created by Leo on 9/27/23.
//

import SwiftUI
import ktpinblock

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("KMM Test")
            Text(Greeting().greet())
            Text(PinBlock().encode(pan: "43219876543210987", pin: "1234", format: .iso3))
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
