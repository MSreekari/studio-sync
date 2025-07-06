import React from 'react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Counter = ({label, end, duration}) => {
  const [ count, setCount ] = useState(0);
  const [ ref, inView] = useInView({ triggerOnce : true });

useEffect(() => {
  if(inView){
    let start = 0;
    const increment = end / (duration * 60);
    const counter = setInterval(() => {
      start += increment;
      if(start >= end){
        clearInterval(counter);
        setCount(end);
      }else{
        setCount(Math.ceil(start));
      }
    }, 1000/60);
  }
}, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-4xl font-bold text-black">
        {count.toLocaleString()}+
      </p>
      <p className="text-gray-950 mt-2">{label}</p>
    </div>
  );
}


export default Counter