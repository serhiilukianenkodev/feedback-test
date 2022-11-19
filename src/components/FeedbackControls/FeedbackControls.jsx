export const FeedbackControls = ({ options, handler }) => {
  return (
    <ul>
      {options.map((option, idx) => {
        return (
          <li key={idx}>
            <button onClick={handler} name={option}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
