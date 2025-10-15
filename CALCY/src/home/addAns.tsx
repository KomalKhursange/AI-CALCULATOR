import React, { useState } from 'react';

interface DraggableProps {
  latex: string;
  index: number;
}

const AddAns: React.FC<DraggableProps>  = ({ latex, index }) => {

  const boxSize = 50; // Width & height of boxes
    const containerSize = 800; // Container size
    const [quote, setQuote] = useState("");
    const [quotes, setQuotes] = useState([""]);
  const [answers, setAnswers] = useState<{ id: number; x: number; y: number; data: string }[]>([]);


  const newAnswer = 
  {
    id: answers.length + 1,
    x: Math.floor(Math.random() * (containerSize - boxSize)),
    y: Math.floor(Math.random() * (containerSize - boxSize)),
    data: latex
  }
  setAnswers([...answers, newAnswer]);



  

 

  return (
  <>

  </>
  );
};

export default AddAns;