// src/components/WelcomeScreen.jsx


const WelcomeScreen = ({ onCreateAccount, onLogin }) => {
  return (
    <div className="screen-container">
      <h1 className="screen-title">Welcome to PopX</h1>
      <p className="screen-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>
      <button className="btn btn-primary" onClick={onCreateAccount}>
        Create Account
      </button>
      <p className="link-text">
        Already Registered? <a onClick={onLogin}>Login</a>
      </p>
    </div>
  );
};

export default WelcomeScreen;