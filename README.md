# Pokedex

This is Pokedex app built with NextJS, Redux, Typescript and Tailwindcss

!!! Attention: `packages/pokedex-redux` is page router, because the module `next-redux-wrapper` is only available for pages router of NextJS application, `pokedex-app` is built with pages router and `@mui/x-data-grid` is used for first page.

## Run this project

This project uses pnpm@9.0.4 for package manager

You should install this by running this command before run the project

```sh
npm install -g pnpm@9.0.4
```

Run the following command:

```sh
npm install -g turbo
pnpm install
pnpm dev
```

or you can run the project by docker

```sh
docker compose up -d
```

Then you can browse the example apps on [Pokedex-redux](http://localhost:3000)

![image](https://github.com/dragon1227/pokemon-explorer/assets/122885050/861c3552-354e-4fd1-bd27-a00c2fd577c2)
![image](https://github.com/dragon1227/pokemon-explorer/assets/122885050/3427852b-b85d-4f88-aea8-c914ebaa148d)
![image](https://github.com/dragon1227/pokemon-explorer/assets/122885050/a4287c26-0892-48f2-88c2-8621d01907aa)
![image](https://github.com/dragon1227/pokemon-explorer/assets/122885050/c9be4802-2925-4d53-9c88-44cb01e9ed20)

And this project contains storybook for shared components defined in `@repo/components` package

Storybook is defined in `pokedex` (apps/pokedex)

```sh
pnpm storybook
```

Then you can browse the storybook on [Storybook](http://localhost:6006)
![image](https://github.com/dragon1227/pokemon-explorer/assets/122885050/1735c3a9-8c0f-40cd-ac6a-733418153952)

## What kind of this project?

This project is monorepo powered by [Turborepo](http://turbo.build) including apps and packages

They share config files for typescript, eslint, tailwindcss

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `pokedex-app (apps/pokedex-app)`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) in Pages router with next-redux-wrapper and @reduxjs/toolkit
- `pokedex (apps/pokedex)`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) in App router with @tanstack/react-query and storybook
- `@repo/components`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `pokedex-app` and `pokedex` applications
- `@repo/types`: an ESM module with type definition with typescript shared by whole project
- `@repo/utils`: a stub NodeJS library with Typescript shared by both `pokedex-app` and `pokedex` applications
- `@repo/eslint-config (packages/config-eslint)`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config (packages/config-typescript)`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config (packages/config-tailwind)`: `tailwind.config.ts`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

