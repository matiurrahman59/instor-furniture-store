import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  addtocart: 'addtocart',
  login: 'login',
  // logout: 'logout',
  // checkout: checkout,
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
