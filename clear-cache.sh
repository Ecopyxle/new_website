#!/bin/bash

echo "🧹 Clearing Next.js Cache"
echo "========================"

# Clear Next.js cache
if [ -d ".next" ]; then
    rm -rf .next
    echo "✅ Cleared .next directory"
fi

# Clear node_modules cache
if [ -d "node_modules/.cache" ]; then
    rm -rf node_modules/.cache
    echo "✅ Cleared node_modules cache"
fi

echo ""
echo "🎉 Cache cleared successfully!"
echo "💡 Now run: npm run dev"
