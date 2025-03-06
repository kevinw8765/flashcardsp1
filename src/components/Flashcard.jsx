import React, {useState} from 'react' 


const Flashcard = ({ flashcards, chapter }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filteredFlashcards = flashcards.filter(card => card.chapter === chapter);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  const handleNextCard = () => {
    const nextIndex = (currentIndex + 1) % filteredFlashcards.length;
    setCurrentIndex(nextIndex);
    setFlipped(false);
  };

  return (
    <div className="container">
        <h1>Java Trivia Flashcards</h1>
        <p>Test your Java knowledge with these flashcards!</p>

        {filteredFlashcards.length > 0 ? (
            <div className="flashcard" onClick={handleFlip} >
            {flipped ? filteredFlashcards[currentIndex].answer : filteredFlashcards[currentIndex].question}
            </div>
            ) 
            : (
            <p>No flashcards available for this chapter.</p>)
        }

        <button className="next-button" onClick={handleNextCard}>Next Card</button>

        <p className="card-count">Total cards in chapter: {filteredFlashcards.length}</p>
    </div>
  )
}

export default Flashcard