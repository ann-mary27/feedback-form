import { PropTypes } from "prop-types";
export default function Button({ version, children, type, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false
};
Button.protoTypes = {
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
};
