#!/bin/sh

echo 'Starting GQL server\n'
pushd
cd graphql-server
npm ci && npm start
popd
