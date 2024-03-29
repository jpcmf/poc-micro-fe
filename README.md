# POC Micro-Frontend

<h1 align="center">
    <img alt="Webpack" src=".github/modulefederation.png" width="500" />
</h1>

In this repository you'll find a case study of an app using the concepts of [Module Federation](https://webpack.js.org/concepts/module-federation/) (Webpack 5) with [React](https://reactjs.org/) and using [react-router-dom](https://reactrouter.com/) to manage the routing.

## :gear: Build Setup

You need run these commands in the directories in a different terminal window for each app:

```bash
yarn && yarn start
```

Tip: For the server you can run the app in develop mode:

```bash
yarn && yarn start:dev

```

## :microscope: Tests

You have the choice to use two types of test. The unity test methodology or the end2end methodology.  
_I have added some simple examples in how to work on with them: [unity test with Jest](home/src/useCartCount.spec.js) and [end2end test with Cypress](home/cypress/integration/e2e_spec.js)_.

### To run with [Jest](https://jestjs.io/)

```bash
cd home && yarn jest
```

### To run with [Cypress](https://www.cypress.io/)

```bash
cd home && yarn run cypress open
```

## :man_technologist: About the author

<img src="https://github.com/jpcmf.png" width="235" alt="avatar"/>

[![Linkedin Badge](https://img.shields.io/badge/-joaopaulo80-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaopaulo80/)](https://www.linkedin.com/in/joaopaulo80/)
[![Gmail Badge](https://img.shields.io/badge/-jpfricks@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jpfricks@gmail.com)](mailto:jpfricks@gmail.com)

<small>"If at first the idea is not absurd, then there is no hope for it." – Albert Einstein</small>

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Made with :purple_heart:&nbsp; by João Paulo Fricks
