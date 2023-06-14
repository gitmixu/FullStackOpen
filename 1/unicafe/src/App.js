import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  console.log('stats', good, neutral, bad);
  let all = good + neutral + bad;
  if (all < 1) {return (<div><p>No feedback given</p></div>)}
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good + 0 - bad) / all}</p>
      <p>positive {good / all * 100} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}> good</button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
      <button onClick={() => setBad(bad + 1)}> bad</button>
      {console.log('good',good,'neutral',neutral,'bad',bad)}
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App