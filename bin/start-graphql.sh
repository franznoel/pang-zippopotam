#!/bin/sh

echo 'Starting GQL server\n'
pushd
cd graphql-server
npm ci && npm start
popd

echo 'Starting React Client app\n'
pushd
cd react-client
npm ci && npm start
popd
