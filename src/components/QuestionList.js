import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"; // Import the QuestionItem component

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  // Use useEffect to fetch questions when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:4000/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []); 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* Map over the fetched questions and render QuestionItem components */}
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
