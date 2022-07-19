import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question,onDelete}) {
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul  >{/* display QuestionItem components here after fetching */}
      {question.map((quiz)=> {
      return <QuestionItem key={quiz.id}  question={quiz} onDelete={onDelete}/>})
      }
      
      </ul>
    </section>
  );
}

export default QuestionList;
