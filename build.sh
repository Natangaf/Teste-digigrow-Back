#!/usr/bin/env bash
# Exit on error
set -o errexit

# Instalar dependências
npm install

# Compilar TypeScript
npm run build

