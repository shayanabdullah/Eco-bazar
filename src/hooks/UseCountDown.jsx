import { useState, useEffect } from 'react';

export const UseCountDown = (targetDate='Jun 16, 2027') => {
  // jei date ta amra dibo mane shesh hobe
const countDownDate = new Date(targetDate).getTime();


const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
);

useEffect(()=> {
const timerInterval = setInterval(()=> {
    
 const today = new Date().getTime();
 const remainingTime = countDownDate - today ;
 setCountDown(remainingTime)
}, 1000)

return () => clearInterval(timerInterval);

}, [countDownDate])

// days = 1000ms x 60 = 60sec (1minutes) x 60 = 1 hour x 24 = 24hour = 1 day
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
if (countDown <= 0) {
  return {
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
    expired: true,
    message: "Oops! This special offer has expired."
  };
}
  return {
    day: days,
    hour :hours,
    min :minutes,
    sec :seconds,
    
  }

}



