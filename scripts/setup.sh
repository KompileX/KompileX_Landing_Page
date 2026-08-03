#!/bin/bash
set -e

echo "🚀 Setting up kompilex.ai..."

# Check for required tools
command -v bun >/dev/null 2>&1 || { echo "❌ Bun is required. Install from https://bun.sh"; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required. Install from https://docker.com"; exit 1; }

# Copy env file if not exists
if [ ! -f .env ]; then
  cp .env.example .env
  echo "📝 Created .env file - please update with your API keys"
fi

# Start database containers
echo "🐘 Starting PostgreSQL & Redis..."
docker-compose up -d

# Wait for database to be ready
echo "⏳ Waiting for database..."
sleep 5

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Run database migrations
echo "🔄 Pushing database schema..."
bun run db:push

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your API keys:"
echo "   - GROQ_API_KEY (get from https://console.groq.com)"
echo "   - DEEPGRAM_API_KEY (get from https://console.deepgram.com)"
echo ""
echo "2. Start development:"
echo "   bun run dev:api   # Start API server (port 8787)"
echo "   bun run dev:web   # Start web server (port 3000)"
echo ""
echo "3. Or run both:"
echo "   bun run dev"
echo ""
