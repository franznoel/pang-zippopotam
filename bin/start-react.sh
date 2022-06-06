#!/bin/sh

echo 'Starting React Client app\n'
pushd
cd react-client
npm ci && npm start
popd
