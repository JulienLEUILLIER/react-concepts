import {useState} from 'react'

interface QuestionProps {
    question: string,
    answer: string
}

const Question = ({ question, answer }: QuestionProps) => {

    const [hidden, setHidden] = useState(true);



    
    return (
        <div>
            <p>{question}</p>
            <p style={{visibility: hidden ? 'hidden' : 'visible'}}>{answer}</p>
            <button onClick={() => setHidden(!hidden)}>Toggle Answer</button>
        </div>
    )
}

export default Question