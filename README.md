<p align="center"><img src="public/dh-logo.png" height="250" alt="web3-gateway" /></p>

# Lightning Channel Explorer

A SPA for lightning channel explorer<br />
This is a Next.js project bootstrapped with create-next-app.

## Environment

```zsh
$ node -v
v16.13.9
$ yarn -vs
v1.22.10
```

## Configuration

Set .env file

```
NEXT_PUBLIC_BACKEND_ENDPOINT="your endpoint"
```

## How To Use

```bash
yarn
yarn dev
```

## Translation

This project is using [react-intl](https://github.com/formatjs/formatjs) to handle localization.
Please refer to `src/modules/i18n/files/LANGUAGE.json` file to add or edit sentences.

## SEO

This project is using [next-seo](https://github.com/garmeeh/next-seo) to handle SEO settings. Please
refer to `src/modules/seo/index.tsx` file to add or edit sentences.

## How To Contribute

When you push your branch to remote ones, please run `yarn lint --fix` to comply to the code convention.

When you add a new library, please make sure its license is not
[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.

### References

- [Figma](https://www.figma.com/file/YqrvbuqniHxqF6xdvvwnlo/20211029-3_Channel-Explorer?node-id=0%3A1)
