# KTPinBlock

A Kotlin implementation of [PIN Block formats](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks).

- [ ] Rename to `ktpinblock`
- [x] Encoding
- [x] Decoding
- [x] Supported formats: `ISO1, ISO2, ISO3`
- [ ] Support all formats
- [x] Establish custom exceptions
- [ ] More input validation and exception throwing
- [x] Basic documentation
- [ ] More documentation
- [x] Some unit test
- [ ] 100% unit test coverage
- [ ] Add [Hilt](https://developer.android.com/training/dependency-injection/hilt-android)
- [ ] Add `ktlint`
- [ ] `KMM` (to support iOS and web)
- [ ] CI with GitHub actions
- [ ] CD with GitHub actions
- [ ] Remove all TODOs in the codebase

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [File structure](#file-structure)
- [Basic concepts](#basic-concepts)
- [How to use](#how-to-use)
  - [Encoding](#encoding)
  - [Decoding](#decoding)
- [Implementation highlights](#implementation-highlights)
  - [Packages](#packages)
  - [Domain questions](#domain-questions)
- [About TODOs in source code](#about-todos-in-source-code)
- [Naming convention](#naming-convention)
  - [About plural form](#about-plural-form)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## File structure

- `KTPinBlockSample`: Sample project with `KTPinBlock` module as a library.
- TODO: other root level directories for documents, artifacts, KMM, etc.

## Basic concepts

- PAN: primary account number, e.g. checking account number.
- PIN: personal identification number, e.g. ATM code.
- PIN block: A block of data used to encapsulate a PIN during processing.
- PIN block formats: [different formats]((https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks)) to generate PIN blocks.

The goal of `KTPinBlock` is to implement encrypting (encoding) and decoding of various PIN block formats.

*NOTES: terminology "encoding" is used instead of "encrypting" or "generating", because currently only encoding based formats like ISO-3 etc. are supported. I need to read more documents to determine the proper terminology here.*

<details>
  <summary>Example: ISO-3 (Format 3)</summary>

The following output is from [BP-Tools](https://www.eftlab.com/post/bp-tools-is-multiplatform).

```
PIN blocks: PIN block encrypt operation finished
****************************************
PAN:            43219876543210987
PIN:            1234
PAD:            N/A
Format:         Format 3 (ISO-3)
—————————————-
Clear PIN block:3412ACC9B98CDF43

PIN blocks: PIN block decode operation finished
****************************************
PIN block:      3412ACC9B98CDF43
PAN:            43219876543210987
PAD:            N/A
Format:         Format 3 (ISO-3)
—————————————-
Decoded PIN:    1234
```

</details>

- Encoding: PAN + PIN -> PIN block
- Decoding: PIN block + PAN -> PIN

## How to use

Open `KTPinBlockSample`, and take a look at `MainActivity` for sample codes.

`PinBlockFormat` is an `enum` that contains all PIN block formats. If you try to use a format that is not currently supported, e.g. ISO-4, an exception will be thrown. Furthermore, this library relies heavily on custom exceptions. Please make sure to catch and handle them properly from client app side.

Please contribute to support more formats, thanks! And please suggest other APIs to suit your need.

### Encoding

```kotlin
val pinBlockEncoder: PinBlockEncoder = PinBlock()

val pan = "43219876543210987"
val pin = "1234"

// Encode to String, e.g. "3412ACC9B98CDF43"
val block: String = pinBlockEncoder.encode(pan, pin, PinBlockFormat.ISO3)

// Encode to ByteArray with one digit in each byte: 0x03, 0x04, 0x01, 0x02, 0x0a, 0x0c, ...
val block: ByteArray = pinBlockEncoder.encodeToBytes(pan, pin, PinBlockFormat.ISO3)

// Encode to ByteArray with 2 digits (nibbles) in each byte: 0x34, 0x12, 0xac, 0xc9, 0xb9, 0x8c, ...
val block: ByteArray = pinBlockEncoder.encodeToCompactBytes(pan, pin, PinBlockFormat.ISO3)
```

### Decoding

```kotlin
val pinBlockEncoder: PinBlockDecoder = PinBlock()

val blockIso3 = "3412ACC9B98CDF43"
val pan = "43219876543210987"

// Encode to String, e.g. "1234"
pinBlockDecoder.decodePin(blockIso3, pan, PinBlockFormat.ISO3)
```

More `ByteArray` based APIs should be added.

## Implementation highlights

There are different approaches to implement top level `Exception` and `Const`, like companion object, `enum class`, and so on. The differences are generally quite trivial, but please let me know if there are some major design flaws.

Although the APIs heavily favours `Strings` as shown above, internally, all data processing is handled via bytes. This means a digit `"1"` or `"A"` will be converted to `0x01` or `0x0a` internally, even though we only need a nibble (4 bits) to store, not a byte (8 bits). It is neither the fastest, nor the most memory efficient way, but it provides the best readability to developers. In general, the expected platform this library runs on shouldn't be any machines with 1 KHz CPU or 4KB memory. But even that's the case, it will be very easy to replace the current implementations when needed, thanks to the interface oriented design of this library. A C library would be preferred in that case though.

Inside the main class `PinBlock`, it provides wrapper APIs to support Strings and nibbles for `PinBlockEncoder`. Currently they are not added to `PinBlockDecoder` yet, but we'll add them soon.

### Packages

In `org.superarts.ktpinblock.coder`, we have encoder and decoder interfaces for public and internal uses. At this point, dependency injection is not properly implemented, but we should always try to use interfaces instead of the actual implementations. For example, in the sample code above, `PinBlock` is the implementation that can be injected as either `PinBlockEncoder` or `PinBlockDecoder`.

In `org.superarts.ktpinblock.format`, we have a `public enum PinBlockFormat` that implements `BlockEncoder, BlockDecoder` by utilizing actual coders like `PinBlockIso3` in the same package.

In `org.superarts.ktpinblock.utility`, we have public and internal utility classes to handle small tasks like providing a random nibble, formatting `ByteArray` `toHexString()`, and so on.

### Domain questions

There are some essential questions not answered. PIN block related knowledge is surprisingly hard to find. For example, here are [some questions](https://github.com/hosseinmd/data-crypto/issues/10#issuecomment-1734701260) from me, and they are directly related to the implementation of this codebase.

Another important question is whether PAN should be verified based on a format, or be ignored. In the current implementation, verification is performed and exceptions will be thrown. For example, if PAN is missing in `ISO-3`, or is presented in `ISO-2`, different exceptions will be raised. However, it is arguably better to always ignore PAN and just ignore them. More use cases from client app are needed. In the end, easy-to-use is always the purpose of this library.

## About TODOs in source code

We should always avoid merging dead codes to `develop` or `main` branch. However, due to the scope of tasks and communication restriction, certain doubts may not be clarified before merging.

In this case, it is OK to merge dead codes, but only with explicit TODO messages. These should be treated as tech debts, and Jira/GitHub issues should be raised for each item.

## Naming convention

Please note that this section is 100% subjective. I'm listing some of my thought process here, but none of them should be treated as "standards". In fact, they are just personal preferences. They can be challenged and changed anytime.

However, consistency is very important. No matter what conventions we decide to use, we should always stick to them, document them, and enforce them via code review process and even CI checks.

### About plural form

Plural forms are purposely avoided in the package and file names. The reasons are:

- Plural form in such places do not provide much additional information. 
  - For example, it should be obvious that `Exception.kt` contains all kinds of Exceptions in the package, and `ktpinlock.format` package contains all the formats.
- Plural form is tedious for refactoring.
  - For example, `ktpinlock.utility` only contains one utility class at some point, but more classes may be added anytime. While the cost of refactoring it to `ktpinlock.utilities` is not high, it's still arguably unnecessary.

But of course, plural forms should be used in other places when needed, e.g. variable names of collection types.