#!/bin/env bash
git add .
git commit -m "publish to npm"
npm version $1 && \
git push

