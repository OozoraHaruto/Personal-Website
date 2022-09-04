#!/bin/sh

BLUE='\033[1;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# move src to src-copy
echo "${BLUE}Copy src-copy to src${NC}"
mkdir src-copy
mv ./src/* ./src-copy
rm -rf ./src
rm -rf ./public
cp package.json package-copy.json

# clone the `create-react-app`
echo "${BLUE}Cloning react-app${NC}"
npx create-react-app my-app --template typescript

# copy all files from the folder
echo "${BLUE}Copying files over${NC}"
mv ./my-app/README.md ./README-react.md
mv ./my-app/* ./
rm -r ./my-app
rm package.json
mv package-copy.json package.json

# install needed packages
echo "${BLUE}Installing packages${NC}"
npm i @mui/joy @emotion/react @emotion/styled @fortawesome/fontawesome-svg-core @fortawesome/pro-light-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/react-fontawesome@latest animate.css axios babel-plugin-macros node-sass react-router-dom sass-loader serve typescript
# install needed `dev-packages`
npm i --save-dev @types/jest @types/node @types/react-dom @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-google eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react prettier

# backup index.js file
echo "${BLUE}Backing up index file${NC}"
mv ./src/index.js ./src/index-backup.js
git checkout --their ./tsconfig.json

# remove original files we do not need
echo "${BLUE}Removing files we do not need${NC}"
rm ./src/App.css
rm ./src/App.js
rm ./src/App.test.js
rm ./src/index.css
rm ./src/index.tsx
rm ./src/logo.svg
rm ./src/App.test.tsx
rm ./src/react-app-env.d.ts
rm ./src/setupTests.ts

# copy src-copy to src
echo "${BLUE}Copy src-copy to src${NC}"
mv ./src-copy/* ./src
rm -r ./src-copy

# setup the git hooks folder
echo "${BLUE}Setting git hooks${NC}"
git config core.hooksPath .githooks
HOOK_FLDR=".githooks"
HOOK_FILES=$(ls $HOOK_FLDR)
for file in $HOOK_FILES; do
  chmod +x "$HOOK_FLDR/$file"
done

echo "${GREEN}Setup ☆-(ﾉﾟДﾟ)ハ(ﾟДﾟ )ﾉ-☆ Done${NC}"

rm setup-new.sh