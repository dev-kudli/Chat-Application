#!/bin/bash

git pull
npm ci
# npm run build
pm2 start index.js start --watch

# EOF