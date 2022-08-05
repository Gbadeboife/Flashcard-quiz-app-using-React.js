import React from 'react';
import Flashcard from './Flashcard';
import './Flashcardlist.css'


function Flashcardlist ({flashcards}){  
  return(
    <div className='flashcards'>
      {flashcards.map(
        (flashcard) => {
          return <Flashcard card={flashcard}/>;}
      )
      }
      </div>
  )
}

export default Flashcardlist;