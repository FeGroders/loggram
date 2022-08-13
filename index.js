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
}