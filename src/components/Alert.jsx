const Alert = (alertMsg, alertClass) => {
  return (
    <>
      <div className={`alert ${alertClass}`} role="alert" id="new-alert">
        {alertMsg}
      </div>
    </>
  );
};

export default Alert;