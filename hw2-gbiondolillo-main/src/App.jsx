import React from 'react';
import FlashcardSet from './components/FlashcardSet';
import "./App.css";

const catData = [
  { question: 'What breed is known for its long, fluffy tail?', answer: 'Maine Coon', category: 'Breed' },
  { question: 'Which breed is often associated with blue eyes and color-point fur?', answer: 'Siamese', category: 'Breed' },
  { question: 'What breed has a distinctive curly coat?', answer: 'Cornish Rex', category: 'Breed' },
  { question: 'What breed is known for its short legs and large ears?', answer: 'Munchkin', category: 'Breed' },
  { question: 'Which breed is often called the "gentle giant"?', answer: 'Ragdoll', category: 'Breed' },
  { question: 'What is the name of the hairless cat breed?', answer: 'Sphynx', category: 'Breed' },
  { question: 'Which breed is known for its wild appearance and spotted coat?', answer: 'Bengal', category: 'Breed' },
  { question: 'What breed has a bushy tail and tufted ears?', answer: 'Norwegian Forest Cat', category: 'Breed' },
  { question: 'What breed is often referred to as the "smiling cat"?', answer: 'Cheshire Cat', category: 'Fictional' },
  { question: 'Which cat is famous for being grumpy?', answer: 'Grumpy Cat', category: 'Internet Celebrity' },
  { question: 'What breed is known for its distinctive folded ears?', answer: 'Scottish Fold', category: 'Breed' },
  { question: 'Which breed is named after a country in Southeast Asia?', answer: 'Burmese', category: 'Breed' },
  { question: 'What breed has a sleek, black coat and is considered a symbol of good luck?', answer: 'Bombay', category: 'Breed' },
  { question: 'Which breed is characterized by its curly whiskers and curly fur?', answer: 'LaPerm', category: 'Breed' },
  { question: 'What breed is known for its large size and tufted ears?', answer: 'Siberian', category: 'Breed' },
  { question: 'Which breed is often described as having a "punk rock" appearance with its wild coat?', answer: 'Devon Rex', category: 'Breed' },
  { question: 'What breed is known for its distinct "point" coloration and vocal nature?', answer: 'Himalayan', category: 'Breed' },
  { question: 'Which breed is recognized for its curled-back ears and wild appearance?', answer: 'American Curl', category: 'Breed' },
  { question: 'What breed is famous for its blue-gray coat and copper-colored eyes?', answer: 'Russian Blue', category: 'Breed' },
  { question: 'Which breed is associated with the folklore of having no tail?', answer: 'Manx', category: 'Breed' },
];

const App = () => {
  return (
    <div className="App">
      <FlashcardSet cardSetTitle="How well do you know cats?" cardPairs={catData} />  {/* Updated the prop name */}
    </div>
  );
};

export default App;