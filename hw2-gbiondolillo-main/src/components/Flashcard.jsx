import React from 'react';

const Flashcard = ({ question, answer, showAnswer, onCardClick }) => {
  return (
    <div className="flashcard" onClick={onCardClick}>
      <div className={`card ${showAnswer ? 'show-answer' : ''}`}>
        <div className="card-content">
          <div className="card-question">{question}</div>
          {showAnswer && <div className="card-answer">{answer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
