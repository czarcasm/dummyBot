request.post({
    url: "https://api.kik.com/v1/config",
    auth: {
        username: 'master_alfred',
        pass: process.env.API_KEY
    },
    json: {
        "webhook": "https://master-alfred.herokuapp.com/", 
        "features": {
            "receiveReadReceipts": false, 
            "receiveIsTyping": false, 
            "manuallySendReadReceipts": false, 
            "receiveDeliveryReceipts": false
        }
    }
}, callback);
