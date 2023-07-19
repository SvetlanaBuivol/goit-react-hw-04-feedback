import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';


export default function App() {
  const options = ['Good', 'Neutral', 'Bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => { 
    if (option === 'Good') {
      setGood(prevState => prevState + 1);
      return;
    }
    if (option === 'Neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }
    if (option === 'Bad') {
      setBad(prevState => prevState + 1);
      return;
    }
  }

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =  Math.round((good * 100) / countTotalFeedback || 0);
  

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// onLeaveFeedback = option => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const total = this.countTotalFeedback();
//   return (this.state.good * 100) / total || 0;
// };

// render() {
//   const options = Object.keys(this.state);
//   const { good, neutral, bad } = this.state;
//   const positivePercentage = Math.round(
//     this.countPositiveFeedbackPercentage()
//   );
//   const total = this.countTotalFeedback();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         {total > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               totalFeedback={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </>
//     );
//   }
// }
