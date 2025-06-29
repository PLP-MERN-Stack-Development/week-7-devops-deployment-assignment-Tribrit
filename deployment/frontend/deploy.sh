#!/bin/bash

# Exit on error
set -e

echo "Starting frontend deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the app
echo "Building application..."
npm run build

# Serve the app
echo "Starting server..."
serve -s build -l 3000