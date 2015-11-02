#!/bin/bash

if [ ! -e node_modules ]; then
    mkdir -p node_modules
fi

if [ -e node_modules/app ]; then
  echo 'removing old app symlink'
  rm node_modules/app
fi

echo 'creating app symlink'
ln -sf ../server node_modules/app
