import React, { useState } from 'react'
import Flashcard from './components/Flashcard'
const flashcards = [
  // Chapter 9: Objects and Classes
  { question: "What is an object in Java?", answer: "An entity that represents a real-world object with a state and behavior.", chapter: 9 },
  { question: "What is a class in Java?", answer: "A template or blueprint that defines what an object's state and behavior will be.", chapter: 9 },
  { question: "What are the two components that define the state of an object?", answer: "Data fields with their current values.", chapter: 9 },
  { question: "What defines the behavior of an object?", answer: "Methods that operate on the object's data fields.", chapter: 9 },
  { question: "What is the relationship between a class and an object?", answer: "A class is a template for objects, and an object is an instance of a class.", chapter: 9 },
  { question: "What is the syntax for creating an object from a class in Java?", answer: "ClassName objectName = new ClassName();", chapter: 9 },
  { question: "What is a constructor in Java?", answer: "A special method that is invoked when an object is created to initialize data fields.", chapter: 9 },
  { question: "What happens if a class doesn't define a constructor?", answer: "Java creates a default constructor with no parameters.", chapter: 9 },
  { question: "What is the purpose of the 'this' keyword?", answer: "To refer to the current object inside instance methods or constructors.", chapter: 9 },
  { question: "What is the purpose of the 'static' keyword when applied to variables?", answer: "To declare class variables that are shared by all objects of the class.", chapter: 9 },
  { question: "What is the purpose of the 'static' keyword when applied to methods?", answer: "To declare class methods that can be called without creating an instance of the class.", chapter: 9 },
  { question: "What is the purpose of the 'private' modifier?", answer: "To restrict access to class members so they can't be accessed from outside the class.", chapter: 9 },
  { question: "What is the purpose of the 'public' modifier?", answer: "To allow class members to be accessed from anywhere the class is visible.", chapter: 9 },
  { question: "What is a UML class diagram?", answer: "A graphical notation used to construct and visualize object-oriented systems.", chapter: 9 },
  { question: "What is data field encapsulation?", answer: "The practice of hiding internal data fields and providing public accessor/mutator methods.", chapter: 9 },
  { question: "What is a Java package?", answer: "A grouping of related classes and interfaces to provide access control and manage naming conflicts.", chapter: 9 },
  { question: "What is the 'import' statement used for?", answer: "To tell the compiler where to look for classes that are used in the program.", chapter: 9 },
  { question: "What is a Java API?", answer: "A library of prewritten classes included with Java that can be used in programs.", chapter: 9 },
  { question: "What is the purpose of the 'final' keyword when applied to a class?", answer: "To prevent the class from being extended (subclassed).", chapter: 9 },
  { question: "What is a scope of a variable in Java?", answer: "The part of the program where the variable can be referenced.", chapter: 9 },
  
  // Chapter 10: Object-Oriented Thinking
  { question: "What is the 'this' reference?", answer: "A reference to the current object that invokes an instance method or constructor.", chapter: 10 },
  { question: "What is the 'null' reference?", answer: "A special value that doesn't refer to any object.", chapter: 10 },
  { question: "What is the Class class in Java?", answer: "A class that models class and interface elements in a running Java application.", chapter: 10 },
  { question: "What is a wrapper class in Java?", answer: "A class that encapsulates primitive data types into objects.", chapter: 10 },
  { question: "What primitive type is wrapped by the Boolean class?", answer: "boolean", chapter: 10 },
  { question: "What is autoboxing in Java?", answer: "The automatic conversion of primitive types to their corresponding wrapper class objects.", chapter: 10 },
  { question: "What is unboxing in Java?", answer: "The automatic conversion of wrapper class objects to their corresponding primitive types.", chapter: 10 },
  { question: "What is the BigInteger class used for?", answer: "To represent integers of arbitrary length, allowing calculations that exceed the range of primitive numeric types.", chapter: 10 },
  { question: "What is the BigDecimal class used for?", answer: "To represent fixed-point numbers with arbitrary precision, ideal for precise monetary calculations.", chapter: 10 },
  { question: "What is the String class?", answer: "An immutable sequence of characters used widely in Java programs.", chapter: 10 },
  { question: "What does immutable mean for the String class?", answer: "Once a String object is created, its contents cannot be changed.", chapter: 10 },
  { question: "What is the StringBuilder class?", answer: "A mutable alternative to String that provides methods to modify its content.", chapter: 10 },
  { question: "When would you use StringBuilder instead of String?", answer: "When you need to make frequent modifications to a string in a loop.", chapter: 10 },
  { question: "What is the purpose of the equals() method in Java?", answer: "To compare the contents of objects for equality rather than their references.", chapter: 10 },
  { question: "What is the purpose of the toString() method?", answer: "To return a string representation of an object.", chapter: 10 },
  { question: "What is the purpose of the ArrayList class?", answer: "To store and manipulate a dynamic list of objects.", chapter: 10 },
  { question: "How is the capacity of an ArrayList different from its size?", answer: "Capacity is the number of elements the ArrayList can hold, while size is the number of elements actually stored.", chapter: 10 },
  { question: "What is the purpose of the protected modifier?", answer: "To allow access to class members from subclasses and classes in the same package.", chapter: 10 },
  { question: "What is the concept of immutable objects?", answer: "Objects whose state cannot be changed after they are created.", chapter: 10 },
  { question: "What is the relationship between inheritance, superclasses, and subclasses?", answer: "Inheritance enables a subclass to inherit features from a superclass, promoting code reuse and specialization.", chapter: 10 },
];

function App() {
  const [selectedChapter, setSelectedChapter] = useState(9);

  const handleChapterChange = (event) => {
    setSelectedChapter(parseInt(event.target.value));
  };

  return (
    <div className="container">

      <select onChange={handleChapterChange} value={selectedChapter}>
        <option value={9}>Chapter 9: Objects and Classes</option>
        <option value={10}>Chapter 10: Object-Oriented Thinking</option>
      </select>

      <Flashcard flashcards={flashcards} chapter={selectedChapter} />
    </div>
  )
}

export default App
