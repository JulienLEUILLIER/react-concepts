import './App.css';
import ComponentReducer from './ComponentReducer';
import questions from './questions';
import Question from './Question';
import Counter from './Counter';
import Application from './DogFacts/Application';
import CounterReducer from './CounterReducer';
import ColorAndContext from './ColorAndContext/ColorAndContext';
import { ThemeProvider } from './ColorAndContext/theme-context';

function App() {
  return (
    <>
      <ComponentReducer />
      {questions.map(q => (
        <Question question={q.question} answer={q.answer} key={q.id}/>
      ))}

      <Counter />
      <Application />
      <CounterReducer />
      <ThemeProvider>
        <ColorAndContext />
      </ThemeProvider>
    </>
  );
}

export default App;
