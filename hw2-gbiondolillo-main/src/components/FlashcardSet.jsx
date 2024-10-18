import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardSet = ({ cardSetTitle, cardPairs }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    // If currently showing the answer, flip back to show the question
    if (showAnswer) {
      setShowAnswer(false);
    } else {
      // Otherwise, move to the next card
      const randomIndex = Math.floor(Math.random() * cardPairs.length);
      setCurrentCardIndex(randomIndex);
    }
  };

  const currentCard = cardPairs[currentCardIndex];

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard-set">
      <h1>{cardSetTitle}</h1>
      <p>Total Cards: {cardPairs.length}</p>

      {currentCard && (
        <Flashcard
          question={currentCard.question}
          answer={currentCard.answer}
          showAnswer={showAnswer}
          onCardClick={handleCardClick}
        />
      )}

      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default FlashcardSet;
