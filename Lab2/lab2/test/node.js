const os = require('os');

let userName = os.userInfo().username;
let currentDate = new Date();

module.exports.getMessage = () =>{
  let hour = currentDate.getHours();
  if (hour > 12){
      return 'Пиздуй спать, ' +userName;
  }else if (hour > 10 && hour < 19){
      return 'Добрый день, ' + userName;
  }
  else{
      return 'Пошел нахуй, ' + userName;
  }
};