import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((btnName) => {
    return (
      <button
        type="button"
        key={btnName}
        className="btn"
        onClick={onLeaveFeedback}
      >
        {btnName}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
