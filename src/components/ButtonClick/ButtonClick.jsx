import { Button } from './ButtonClick.styled';

export default function FeedbackOptions({ onFeedback, options }) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <Button key={key} onClick={() => onFeedback(key)} name={key}>
          {key}
        </Button>
      ))}
    </div>
  );
}
