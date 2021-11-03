import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    style: firstNameStyle,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    style: lastNameStyle,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    style: emailStyle,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((val) => val.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Fehler</p>}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Fehler</p>}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Fehler</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
