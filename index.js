function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const message = `Thank you, ${name}, for the wonderful ${event} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
