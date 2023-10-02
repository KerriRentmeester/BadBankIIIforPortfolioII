function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [balance, setBalance]   = React.useState(100);  // initialize balance to 100
    const [withdraw, setWithdraw]   = React.useState('');
    const ctx = React.useContext(UserContext);
    const isSubmitDisabled = !withdraw; // Button validation: Disable the withdraw button until the withdraw field has an input

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        // Prevent withdrawing a negative number
        if (parseFloat(field) <= 0) {
          setStatus('Error: ' + label + ' must be a positive number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        // Prevent input of a non-integer
        if (isNaN(parseFloat(field))) {
          setStatus('Error: ' + label + ' must be a number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        // Prevent overdraft
        if (parseFloat(field) > balance) {
          setStatus('Error: ' + label + ' must not be greater than account balance');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        return true;
    }

    function handleCreate(){
      // console.log(withdraw, balance);
      if (!validate(withdraw, 'withdraw')) return;

      // update balance by subtracting the withdraw amount
      const updatedBalance = parseFloat(balance) - parseFloat(withdraw);
      setBalance(updatedBalance);

      // add a new transaction & log the withdraw/update the balance
      ctx.push('WITHDRAWAL: $' + withdraw);
      ctx.push('BALANCE: $' + updatedBalance);
      setShow(false);
    };

    function clearForm(){
      setWithdraw('');
      setShow(true);
    };

    return (
      <Card
        bgcolor="danger"
        txtcolor="white"
        header="WITHDRAW"
        status={status}
        body={show ? 
          (
          <>
          {/* Display the current balance */}
          Current Balance: ${balance} <br/> <br/> <br/>

          {/* Withdraw input field */}
          Withdraw<br/>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="form-control"
            id="withdraw"
            placeholder="Enter withdrawal amount"
            value={withdraw}
            onChange={e => setWithdraw(e.currentTarget.value)}
          /><br/>

          {/* Submit button */}
          <button 
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
              disabled={isSubmitDisabled}>
              Withdraw
            </button>
          </>
        ):(
          <>
          {/*Display the current accountBalance */}
          Current Balance: ${balance} <br /> <br />
          <h5>Success!</h5> <br />
          
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
          </>
        )}
      />
    )
  }