# `ktpinblock` Encoder and Decoder Static Web Page

This static website is hosted on the `gh-pages` branch, and can be accessed [here](https://www.superarts.org/KTPinBlock/).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Install dependency](#install-dependency)
- [Build static website](#build-static-website)
- [Test locally](#test-locally)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install dependency

- `npm install -g browserify`

## Build static website

- Build `ktpinblock-js`: `cd ../../ktpinBlock && gradle build`
- Update `ktpinblock-js`: `npm install`
- Export static `JS`: `browserify script.js -o bundle.js`

## Test locally

- `npm install -g http-server`
- `http-server`