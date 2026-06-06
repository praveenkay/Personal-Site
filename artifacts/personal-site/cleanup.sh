#!/bin/bash

# Cleanup script for Personal Site repository
# Removes old version directories and build artifacts

echo "🧹 Cleaning up Personal Site repository..."

# Remove old version directories
if [ -d "praveen_personal_site_v2_executive" ]; then
  echo "Removing praveen_personal_site_v2_executive..."
  rm -rf praveen_personal_site_v2_executive
fi

if [ -d "praveen_personal_site_v3_executive" ]; then
  echo "Removing praveen_personal_site_v3_executive..."
  rm -rf praveen_personal_site_v3_executive
fi

# Clean build artifacts
if [ -d ".next" ]; then
  echo "Removing .next build directory..."
  rm -rf .next
fi

echo "✓ Cleanup complete!"
echo ""
echo "Project structure is now clean and ready to use."
echo ""
echo "To get started:"
echo "  npm install"
echo "  npm run dev"
