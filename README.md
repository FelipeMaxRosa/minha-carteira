# Frontend Template 

<!-- PROJECT SHIELDS -->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->

|                                                   Frontend Template                                                |
| :------------------------------------------------------------------------------------------------------: |
|                                              ![app-icon][]                                               |
|Felipe Rosa's frontend template|
|                          [🐞 Report a bug or 🙋‍♂️ request a feature][issues-url]                           |
| [![contributions welcome][contributions-welcome]][issues-url] [![License][badge-apache]][apache-license] |

- [Frontend Template](#frontend-template)
  - [Frontend Template Docs](#frontend-template-docs)
    - [Features](#features)
    - [Built With](#built-with)
  - [Pre requirements](#pre-requirements)
  - [How to run the project:](#how-to-run-the-project)
  - [Technologies:](#technologies)
  - [GIT USE:](#git-use)
    - [Available Scripts](#available-scripts)
    - [Learn More](#learn-more)
  - [Collaborators](#collaborators)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)

## Frontend Template Docs

This frontend Template is made to boost the creation of your project, giving you a basic project with various tools already configured. We already have configured EsLint, Prettier, Spell, husky, TypeScript in your Frontend Project. **Just clone and start to develop!**

### Features

![javascript][]

- Sets `eslint` rules
- Linters
- React
- React-DOM
- PropTypes
- ES6 syntax
- Export/import ES6+ notation

### Built With

- `ESLint`
- `npm` 7.0.0 +
- `vscode` with _ESLint_ extension
- Linux/GNU, macOS, Windows
- Love and Passion for code

## Pre requirements

Before to start you need have some requirements:

1. [Node.js](https://nodejs.org/) > v14.0.0

   Node.js is a runtime environment for Javascript that allows us to use the language outside of the browser, in this case we use it to configure and run the development server.

2. [npm](https://www.npmjs.com/) > v6.0.0

   npm is a package manager for Node.js and comes installed with it, we use it to install and manage application dependencies.

3. [Git](https://git-scm.com/) > v2.0.0

   Git is a version control system for code, we use it to manage the different branches of the code.

4. Connection to internet

5. [Visual Studio Code](https://code.visualstudio.com/) or another code editor (optional)

## How to run the project:

1. Clone the repository

```
git clone https://github.com/FelipeMaxRosa/react-template.git
```

2. Go to the project folder

```
cd react-template
```

3. Install dependencies

```
npm install
```

or

```
yarn install
```

4. Run

```
npm start
```

or

```
yarn start
```

After executing any of the above commands, a development server will start; generally on port 3000. You must go to your browser and enter to `localhost:3000` and you will have access to the project.

## Technologies:

The project has been developed using various technologies. Some of them are:

**React:**
For the front, React has been used, which is a powerful framework that allows us to interact dynamically with the DOM and encapsulate tons of functionalities through components. [React Docs](https://reactjs.org/docs/getting-started.html).

**EsLint:**
We like that our projects handle a clean code; that's why every time you commit & push, EsLint will analyze your input to make sure it complies with best practices.

## GIT USE:

There are some rules that apply when interacting with the project repository. This will allow us to have a standard that any developer can understand. It is important to comply with these rules so that the linting tool allows us to use the repository.

**Branch:**

Every time an issue is assigned to you, you must create a new branch. This can be done through the command:

```
git branch <name of branch>
```

For convenience, the branches should have a defined structure. For example, if the issue is about adding a new feature, the branch should be:

```
feature/#issuenumber-brief-description-of-the-feature
```

Suppose we have issue #12 that asks us to add a header to the main page. Then, the branch would be as follows:

```
feature/#12-add-header-to-main-page
```

If it is about solving a bug, we just have to put the word "fix" in front of it. For example:

```
fix/#14-remove-bad-media-queries-in-rating-component
```

**Commits:**

We have configured CSpell with LeftHook to check maintain a clean commit nomenclature, the rule that we are following is: `<fix or feat>: <lowercase message>`. CSpell too is looking for typos on the commit message and don't allow do commit if exist a typo. 

Then, like branches, commits must also follow a format. Notice how the commit message varies if it is a feature or a bug fix.

**feat**: added header to main page

**fix**: removed bad media queries in rating component

**Pull Request (PR):**

The PR’s are requests that as developers we make once the solution of an issue is completed and we want the code to be integrated into the master branch of the project. Before that, we must ensure that our code is fully functional and adhering to best practices.

Once we have done a commit & push in our branch, a notification with a yellow background will appear in the github repository and will ask us to continue with the PR. In the TextArea to perform the PR you will find several sections that you want to complete: A brief description of what you did, a snapshot (if applicable), the tasks that were completed and the steps to view them.

### Available Scripts

In the project directory, you can run:

**`npm run start`**:
Runs the app in the development mode.
Open `http://localhost:3000` to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

**`npm run build`**:
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## Collaborators

| [Israel Laguan][author-github] | ![email-icon][] Email me to [contact@israellaguan.com][author-email] / ![linkedin-icon][] Connect to [my Linkedin][author-linkedin] |
| :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|        ![author-pic][]         |                                                                                                                          |
| [Angelica Molina][ange-github] |                              ![email-icon][] Email me to [angeli.molina1@gmail.com][ange-email]                                     |
|         ![ange-pic][]         |                                                                                                                          |

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

## Show your support

🤗 Give a ⭐️ if you like this project!

## License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it!

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/FelipeMaxRosa/react-template?style=for-the-badge
[contributors-url]: https://github.com/FelipeMaxRosa/react-template/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/FelipeMaxRosa/react-template?style=for-the-badge 
[forks-url]: https://github.com/FelipeMaxRosa/react-template/network/members

[stars-shield]: https://img.shields.io/github/stars/FelipeMaxRosa/react-template?style=for-the-badge
[stars-url]: https://github.com/FelipeMaxRosa/react-template/stargazers

[issues-open-shield]: https://img.shields.io/github/issues/FelipeMaxRosa/react-template?style=for-the-badge
[issues-closed-shield]: https://img.shields.io/github/issues-closed/FelipeMaxRosa/react-template?style=for-the-badge

[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[css]: https://img.shields.io/badge/style-CSS-1572B6?style=for-the-badge&logo=css3
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[issues-url]: https://github.com/FelipeMaxRosa/react-template/issues
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
[app-banner]: docs/app-banner.png
[app-icon]: public/logo.png
[icons8]: https://icons8.com/
[icons8-logo]: https://img.icons8.com/fluent/20/000000/icons8-new-logo.png
