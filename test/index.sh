#!/bin/bash

set -e
set -o pipefail
cd $(dirname $(realpath $0))
set -x

node hafas.js
