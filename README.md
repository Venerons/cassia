# cassia

The cassia project aims to collect a wide range of tools to learn and teach cryptography and steganography and their history.

## Setup

```bash
npm install
```

### Start development mode

```bash
quasar dev
```

### Build and deploy

```bash
# 1. build the project
quasar build
# 2. commit and push the build
git commit -m "..."
git push
# 3. push the build to the gh-pages subtree branch
git subtree push --prefix dist/spa origin gh-pages
```
