import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const[time, setTime]=useState(new Date());

  useEffect(()=>{
    const timer=setInterval(()=>{
      setTime(new Date());
    },1000)

    return ()=>clearInterval(timer)
  },[])

  const formatHour=(hour)=>{
    return hour === 0 ? 12 : hour>12? hour-12:hour;
  }

  const addZero = (num) =>{
    return num<10? `0${num}`:num
  }

  const formatDate= (date)=>{
    const option = {weekday:"long", year:"numeric", month: "long", day:"numeric"}
    return date.toLocaleDateString(undefined, option);
  }
  
  return (
    <>
      <div className="digitalclock">
        <h1>Digital Clock</h1>
        <div className="time">
          {addZero(formatHour(time.getHours()))} : {addZero(time.getMinutes())} : {addZero(time.getSeconds())}
          {time.getHours() >=12 ? " PM": " AM"}
        </div>
        <div className="date">
          {formatDate(time)}
        </div>
      </div>
    </>
  );
}

export default App;
