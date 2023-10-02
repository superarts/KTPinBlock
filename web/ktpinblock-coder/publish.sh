#!/bin/bash
# TODO: refactor this terrible script and change it to Makefile
browserify script.js -o bundle.js
mkdir -p ~/tmp/pinblock-web
cp index.html bundle.js README.md ~/tmp/pinblock-web/
cd ../..
git checkout gh-pages
cp ~/tmp/pinblock-web/index.html ~/tmp/pinblock-web/bundle.js ~/tmp/pinblock-web/RAEDME.md .
git status
echo "TODO: review, commit, and push changes, and verify on https://www.superarts.org/KTPinBlock/"