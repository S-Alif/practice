const Alert = (alertMsg, alertClass) => {
  return (
    <>
      <div className={`alert ${alertClass}`} role="alert">
        {alertMsg}
      </div>
    </>
  );
};

export default Alert;