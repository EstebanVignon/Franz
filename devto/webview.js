const path = require('path');

module.exports = (Franz) => {
    function getMessages() {
        let count = 0;
        const notificationNumer = document.getElementById('notifications-number');

        if (!notificationNumer.classList.contains('hidden')) {
            count = notificationNumer.innerText;
        }
        Franz.setBadge(count);
    }

    Franz.loop(getMessages);

    Franz.injectCSS(path.join(__dirname, 'service.css'));
};

