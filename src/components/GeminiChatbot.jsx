import { useState } from 'react'
import axios from 'axios';
// import './Gemini.css'

function App() {
  const [question,setQuestion] = useState("");
  const [answer,setAnswer] = useState("");
  async function generateAnswer(){
    setAnswer("loading...")
    const response = await axios({
      method: 'POST',
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBb3yG3C0pNGB4QGwL0HB3wCWXKp6OHH9s',
      data: {"contents":[{"parts":[{"text":question}]}]}
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
    <h1 className='bg-blue-300 w-full'>CHAT AI</h1>
    <textarea 
    
    placeholder='Write your question here......'
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    cols={100}
    rows={10}
    className='w-full px-2 my-10'>
    
    </textarea>
    <button onClick={generateAnswer} className='bg-sky-500 hover:bg-sky-700'>Generate Answer</button>
    <pre id='ai-response'>{answer}</pre>
    </>
  )
}

export default App