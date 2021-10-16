import React from "react";

function QuestionItem({ question, onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => onDeleteItem(id))
  }

  function handleChange(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
