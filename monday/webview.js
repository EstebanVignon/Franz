const path = require('path');

module.exports = (Franz) => {
    function getMessages() {
        let sum = 0;
        let counters = document.querySelectorAll('.item-counter');
        let inbox = document.querySelectorAll('.surface-item-counter-component');
        for (let i = 0; i < counters.length; i++) {
            sum += parseInt(counters[i].innerHTML);
        }
        for (let i = 0; i < inbox.length; i++) {
            sum += parseInt(inbox[i].innerHTML);
        }
        Franz.setBadge(sum);
    }

    Franz.loop(getMessages);

    Franz.injectCSS(path.join(__dirname, 'service.css'));
};

