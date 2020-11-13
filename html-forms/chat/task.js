const badgeChat = document.getElementsByClassName("chat-widget")[0]
const inputMsg = document.querySelector(".chat-widget__input");
const redyMsg = document.querySelector( '.chat-widget__messages' );

badgeChat.addEventListener('click', e => badgeChat.classList.add("chat-widget_active"));
inputMsg.addEventListener('change', e => {
    sendMsg(inputMsg.value, 'message_client');
    sayBot();    
});



function sendMsg(text, sender) {
    redyMsg.innerHTML += `
    <div class="message ${sender}">
        <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
        <div class="message__text">
            ${text}
        </div>
    </div>`;
    inputMsg.value = '';
};

function sayBot () {
    const messageRobot = [
        'Кто тут?',
        'Где ваша совесть?',
        'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
        'Вы не купили не одного товара, что б так с нами разговаривать!',
        'Добрый день! До свидания!',
        'Мы нечего не будем вам продавать!',
        'Где ваша совесть?'
    ];
    let index = Math.floor(Math.random() * messageRobot.length);
    redyMsg.innerHTML += `
    <div class="message">
        <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
        <div class="message__text">
            ${messageRobot[index]}
        </div>
    </div>`;
}
