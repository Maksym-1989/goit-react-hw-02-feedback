import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.ontainer}>
      {" "}
      {options.map((btnName) => {
        return (
          <button
            type="button"
            key={btnName}
            className={css.btn}
            onClick={onLeaveFeedback}
          >
            {btnName}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
