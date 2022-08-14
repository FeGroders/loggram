<h1 align="center">
    Loggram
</h1>

<h4 align="center">
  Send your app logs to your Telegram
</h4>

<p align="center">
  <img alt="NPM version" src="https://img.shields.io/npm/v/loggram">&nbsp;
  <img alt="Package size" src="https://img.shields.io/bundlephobia/min/loggram">&nbsp;
  <img alt="NPM downloads" src="https://img.shields.io/npm/dw/loggram">&nbsp;
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/FeGroders/loggram">&nbsp;
  <a href="https://github.com/fegroders/loggram/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fegroders/loggram">&nbsp;
  </a>
  <a href="https://github.com/fegroders/loggram/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/fegroders/loggram">&nbsp;
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/fegroders/loggram">
</p>

<p align="center">
  <a href="https://github.com/FeGroders/loggram#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/FeGroders/loggram#-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/FeGroders/loggram#-license">License</a>&nbsp;&nbsp;&nbsp;
</p>

## 📘 Usage
First, you need to create a Telegram bot. [How to Create](https://core.telegram.org/bots#:~:text=Use%20the%20%2Fnewbot%20command%20to,mentions%20and%20t.me%20links.)

After creating the bot, you need to get a chat id. [How to Get](https://www.alphr.com/find-chat-id-telegram/)

Then, you can start implementing the Loggram.

## 📘 Example

```js
const Loggram = require('loggram')

var loggram = new Loggram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID);
loggram.sendLog('Hello World!').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```

## 📘 Options
```js
sendLog(appName, type, message){
  //appName optional
  //type optional ('info', 'error', 'warning', 'success')
  //message required
};

sendLog(message){
  //message required
};
```

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js][node]
- [Axios][axios]

## 📄 License
This project is under the MIT license. See the [LICENSE](https://github.com/FeGroders/pronounce/blob/master/LICENSE) for more information.

## 💻 Author

<a href="https://github.com/FeGroders">
 <img style="border-radius: 50%" src="https://avatars3.githubusercontent.com/u/62064189?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Fernando Groders</b></sub></a>
 
Made by Fernando Groders 👋🏽 Contact-me! <br/>
[![Instagram Badge](https://img.shields.io/badge/-Instagram-%23E4405F?style=flat-square&labelColor=%23E4405F&logo=instagram&logoColor=white&link=https://instagram.com/fegroders)](https://instagram.com/fegroders) 
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fernandogroders/)](https://www.linkedin.com/in/fernandogroders/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fernandogroder@gmail.com)](mailto:fernandogroder@gmail.com)

[node]: https://nodejs.org/en/
[axios]: https://github.com/axios/axios
[discord]: https://discord.com/developers/docs/intro