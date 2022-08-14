module.exports = class Loggram {
    constructor(telegramBotToken, telegramChatId) {
        this.telegramBotToken = telegramBotToken;
        this.telegramChatId = telegramChatId;
    }

    sendLog(message) {
        return new Promise((resolve, reject) => {
            const axios = require('axios').default;

            axios.post(`https://api.telegram.org/bot${this.telegramBotToken}/sendMessage?chat_id=${this.telegramChatId}&text=${message}`)
                .then(res => {
                    resolve(res);
                }).catch(err => {	
                    reject(err);
                });    
        });
    }

    sendLog(appName, type, message) {
        return new Promise((resolve, reject) => {
            const axios = require('axios').default;
            var logMessage = '';

            switch (type.toLowerCase()) {
                case 'warning':
                    logMessage += '\xE2\x9A\xA0'; //⚠️
                    break;
                case 'error':
                    logMessage += '\xF0\x9F\x94\xB4'; //🛑
                    break;
                case 'success':
                    logMessage += '\xE2\x9C\x85'; //✅
                    break;
                case 'info':
                    logMessage += '\xE2\x84\xB9'; //ℹ️
                    break;
                default:
                    logMessage += ''; 
                    break;
            }

            if (appName) {
                logMessage += ` ${appName} - `;
            }

            logMessage += ` ${message}`;
            logMessage = logMessage.replace(' ', '%20');    
            console.log(`https://api.telegram.org/bot${this.telegramBotToken}/sendMessage?chat_id=${this.telegramChatId}&text=${logMessage}`);

            axios.post(`https://api.telegram.org/bot${this.telegramBotToken}/sendMessage?chat_id=${this.telegramChatId}&text=${logMessage}`)
                .then(res => {
                    resolve(res);
                }).catch(err => {	
                    reject(err);
                });    
        });
    }
}