// Code your solutions in this file
function writeCards(names, occasion) {
    const messages = [];
        for (let name of names) {
            messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
        }
    console.log(messages)
}