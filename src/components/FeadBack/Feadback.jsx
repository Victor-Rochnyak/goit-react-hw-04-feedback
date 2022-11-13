import { useState} from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/ButtonClick/ButtonClick';
// Стилі
import { Div, H2, DivButton } from './FeadBack.styles';

export default function FeadBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const goodPercent = () => {
    return parseInt((good / totalFeedback()) * 100);
  };
  const options = { good: 'good', neutral: 'neutral', bad: 'bad' };
  return (
    <Div>
      <H2>Please leave feedback </H2>
      
        <DivButton>
          <FeedbackOptions options={options} onFeedback={onClickBtn} />
        </DivButton>
      
      <H2>Statistics</H2>
      {totalFeedback() ? (
        <div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            goodPercent={goodPercent()}
          />
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Div>
  );
}
