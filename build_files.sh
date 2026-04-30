#!/usr/bin/env bash
# build_files.sh — Vercel build script
# Note: --break-system-packages is required because Vercel's Python runtime
# is managed by uv (PEP 668) and blocks plain pip installs by default.
set -e

pip install --upgrade pip --break-system-packages
pip install -r requirements.txt --break-system-packages
python manage.py collectstatic --no-input

# Migrate non-fatal: if DB is unreachable during build, don't fail the build.
# Django will apply pending migrations on first request via the pooler connection.
python manage.py migrate --no-input || echo "WARNING: migrate skipped (DB unreachable at build time)"