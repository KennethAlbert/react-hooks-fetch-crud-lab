import React, { useState,useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [quiz,setQuiz] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => {
        setQuiz(items)});

  }, []);

  function handleAddQuestion(newItem) {
    setQuiz([...quiz, newItem]);
  }

  function handleDeleteItem(id) {
    const updatedQuiz = quiz.filter((item) => item.id !== id);
    setQuiz(updatedQuiz);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList question={quiz} onDelete={handleDeleteItem}/>}
    </main>
  );
}

export default App;
