import Button from "./Button";

function Form({ requestType, setRequestType }) {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <Button
        buttonText={"users"}
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText={"posts"}
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText={"comments"}
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </form>
  );
}

export default Form;
