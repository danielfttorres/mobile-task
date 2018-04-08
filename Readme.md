# Mobile Task
> A [React Native](https://facebook.github.io/react-native/) mobile app for **Android** and **iOS** platforms

## Getting started
First, make sure that you have installed the tools below:
- **[Node.js](https://nodejs.org/)** (version **8.11.1** is *recommended*)
- **[Yarn](https://yarnpkg.com/)**

After that, clone this repository, move to `RNMobileTask` path and and install the dependencies:
```bash
$ cd RNMobileTask && yarn
```

## Running
Before running, you need to create the `.env` file on root of `RNMobileTask` path. This file must be contain the `API_KEY` generated in the **[NewsAPI.org](https://newsapi.org)**. The `.env` file need to be like:
```
API_KEY=your_api_key_here
```

After that, you must to be keep the server running in a tab of your terminal, with execute the command*:

```bash
$ react-native start
```

And then, for running on **iOS** platform (it will start the emulator):
```bash
$ react-native run-ios
```

Or, for **Android** platform:
```bash
$ react-native run-android
```

*Make sure that you are in `RNMobileTask` path when execute that commands.

> **Note**: is necessary you have to install and configure the **[XCode](https://developer.apple.com/xcode/)** to run this project on **iOS** platform. In this case, the emulator will start automatically. To run this project on **Android** platform is necessary to install the **[Android Studio](https://developer.android.com/studio/)**, and in this case is necessary to configure an Android Emulator.

## Tests
You can also run the **unit tests** to see that the all tests writed passed. You also can check the test **coverage** to see that the tests cover all piece of the code of the app.

To run the **unit tests**, execute the command below:
```bash
$ yarn test
```

After run the tests you will see the *coverage* report on the screen. The report is generated also in *HTML* and just go to the `coverage` path and then open the `index.html` file.

> **Note**: I use **[Jest](https://facebook.github.io/jest/)** to test the application, and before the tests ran, the code is *linted* by using **[ESLint](http://eslint.org)** tool.
