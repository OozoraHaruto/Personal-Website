#!/bin/sh

BLUE='\033[1;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# install go packages
echo "${BLUE}Installing npm packages${NC}"
npm install

# setup the git hooks folder
echo "${BLUE}Setting git hooks${NC}"
git config core.hooksPath .githooks
HOOK_FLDR=".githooks"
HOOK_FILES=$(ls $HOOK_FLDR)
for file in $HOOK_FILES; do
  chmod +x "$HOOK_FLDR/$file"
done
echo "${GREEN}Setup ☆-(ﾉﾟДﾟ)ハ(ﾟДﾟ )ﾉ-☆ Done${NC}"