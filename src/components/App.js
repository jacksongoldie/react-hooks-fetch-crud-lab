import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function addItem(newQuestion){
    const updatedQuestions = [...questions, newQuestion]
    setQuestions(updatedQuestions)
  }

  function deleteItem(id){
    const updatedQuestions = questions.filter((question) => question.id !== id)
    setQuestions(updatedQuestions)
  }

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(json => setQuestions(json))
  }, [])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={addItem} /> : <QuestionList onDeleteItem={deleteItem} questions={questions}/>}
    </main>
  );
}

export default App;
