#!/bin/bash

# Exit on error
set -e

echo "Starting backend deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Start the server
echo "Starting server..."
node app.js