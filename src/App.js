import './App.css';
import React,{useState} from 'react';
import Flashcardlist from './Flashcardlist';


function App() {

  const questions_list=[
    {
      question:'Hg is the chemical symbol of which element?',
      answer:'Answer: Mercury',
      options:['Helium','Hydrogen','Argon','Mercury']
    },
    {
      question:'Which email service is owned by Miicrosoft?',
      answer:'Answer: Hotmail',
      options:['Email','Yahoo mail','Hotmail','E-mail']
    },
    {
      question:'Which country produces the most coffee in the world?',
      answer:'Answer: Brazil',
      options:['Brazil','USA','UK','Jamaica']
    },
    {
      question:'What is the capital city of spain?',
      answer:'Answer: Madrid',
      options:['Barcelona','Valencia','Madrid','Ibiza']
    },
    {
      question:'How many taste buds does the average human have?',
      answer:'Answer: 10,000',
      options:['5,000','500','1,500','10,000']
    },
    {
      question:'How much does the Chewbacca costume weigh?',
      answer:'Answer: 8 pounds',
      options:['5 pounds','3 pounds','6 pounds','8 pounds']
    },
    {
      question:'What is ariana grande brother name',
      answer:'Answer: Frankie',
      options:['Frankie','Arnold','Bill','Jon']
    }, 
    {
      question:'What languages has the most words?',
      answer:'Answer: English',
      options:['French','English','Spain','Italian']
    }
  ];
  const [array,setArray]=useState(questions_list);
    
  return (
    <div className='container'>
    <h1>Click flashcard to reveal answer</h1>
      <Flashcardlist flashcards={array}/>
    </div>
  );
}

export default App;
