# Installation

## Installation

- Install `npm`
- Setup project `bash setup.sh`
  - **ALWAYS** run `bash setup.sh` after cloning, we need to link the githook!

## Documentations

- Framework
  - [React.js](https://reactjs.org/docs/getting-started.html)
    - [Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [React Router](https://reactrouter.com/docs/en/v6/examples/basic)
  - [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- Styling
  - [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
    - [Bootstrap Icons](https://icons.getbootstrap.com)
  - [Animate.css](https://animate.style)
  - [SCSS](https://sass-lang.com/guide)

# Developing

## Run server
`npm start`

## Coding practices
- Always ensure to use `<Fallback message="loading data" />` when loading data from server
- All network calls should be in `src/Helpers/Network.tsx` and then called through the component
- Constants should be in `src/Helpers/Constants.tsx`
- Shared functions should be in `src/Helpers/Functions.tsx`
- Interfaces (for `tsx`) should be in `src/Helpers/Interfaces.tsx`
- Components used by many should be in `src/components/Shared` and add them to the `index.tsx` file
- Try to break components into smaller ones whenever possible
- Format UI using bootstrap's `classes` when ever possible (They have a lot of helpers, look at it before using inline styles)
- `import`s should be seperated in 3 sections packages, functions, UI by newline
  - It is also mandatory to sort it alphebetically
  - It is also mandatory to sort declarations alphebetically

## MRs
- Do not use `eslint-ignore`, etc. to pass the eslint check
- ESLint must pass
- Console in Chrome should not have any error or warning related to created components