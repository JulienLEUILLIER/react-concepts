import './App.css';
import ComponentReducer from './ComponentReducer';
import questions from './questions';
import Question from './Question';
import Counter from './Counter';
import Application from './DogFacts/Application';

function App() {
  return (
    <>
      <ComponentReducer />
      {questions.map(q => (
        <Question question={q.question} answer={q.answer} key={q.id}/>
      ))}

      <Counter />
      <Application />
    </>
  );
}

export default App;
