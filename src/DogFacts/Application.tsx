import {useState} from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

interface FormProps {
  onSubmit: (n:number) => void
}

const Form = ({ onSubmit }: FormProps) => {

  const [factsNumber, setFactsNumber] = useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit(factsNumber);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value={factsNumber} onChange={
          (event:React.ChangeEvent<HTMLInputElement>) => setFactsNumber(+event.target.value)} 
          min="1" max="10" id="number-of-facts" />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {

  const [facts, setFacts] = useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    })
  }

  return (
    <main>
      <Form onSubmit={handleSubmit}/>
      {facts.map((fact) => (
        <Fact fact={fact.fact} key={fact.id} />
      ))}
    </main>
  );
};

export default Application;