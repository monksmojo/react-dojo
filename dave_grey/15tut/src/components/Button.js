function Button({ buttonText, requestType, setRequestType }) {
  const requestHandler = () => {
    setRequestType(buttonText);
  };

  return (
    <button
      className={buttonText === requestType ? "selected" : null}
      type="button"
      onClick={requestHandler}
    >
      {buttonText}
    </button>
  );
}
export default Button;
