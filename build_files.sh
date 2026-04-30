#!/usr/bin/env bash
# build_files.sh — Vercel build script
set -e

pip install --upgrade pip
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate --no-input