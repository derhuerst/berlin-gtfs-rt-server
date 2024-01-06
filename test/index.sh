#!/bin/bash

set -e
set -o pipefail
cd $(dirname $(realpath $0))
set -x

node hafas.js
# todo: somehow run hafas.js with $RANDOM_LOCAL_ADDRESSES_PREFIX (fails in the CI)
