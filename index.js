// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // Example usage:
  const names = ['Alice', 'Bob', 'Charlie'];
  const eventName = 'birthday';
  const messages = writeCards(names, eventName);
  console.log(messages);
  
 function countDown(number){
    while(number >=0){
        console.log(number)
       number--;
    }
 }
 countDown(10);