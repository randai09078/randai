#!/bin/bash
wget https://github.com/xtekky/gpt4free/archive/refs/tags/0.2.1.6.zip
# Unzip the downloaded file

unzip 0.2.1.6.zip 
mkdir randapi/randai/g4ff/gpt4free0216
# Move the contents to a specific folder
mv gpt4free-0.2.1.6/* randapi/randai/g4ff/gpt4free0216

# Clean up by removing the zip file and the extracted folder
rm 0.2.1.6.zip
rm -r gpt4free-0.2.1.6