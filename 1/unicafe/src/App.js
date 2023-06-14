import { useState } from 'react';
import './app.css';

const StatisticLine = (props) => {
  console.log('StatisticLine', props);
  return(
    <tr>
      <td id='text'>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  console.log('stats:', good, neutral, bad);
  let all = good + neutral + bad;
  if (all < 1) {return (<div><p>No feedback given</p></div>)}
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={((good + 0 - bad) / all).toFixed(1)} />
          <StatisticLine text="positive" value ={((good / all * 100).toFixed(1)) + " %"}/>
        </tbody>
      </table>
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
      {console.log('App:','good',good,'neutral',neutral,'bad',bad)}
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App