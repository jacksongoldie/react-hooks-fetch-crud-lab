import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem }) {

const questionsToDisplay = questions.map((question) => 
    <QuestionItem onDeleteItem={onDeleteItem} question={question}/>
)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
