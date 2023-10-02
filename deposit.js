function Deposit(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] = React.useState('0');  // Initialize balance to zero
    const ctx = React.useContext(UserContext);
    const isSubmitDisabled = !deposit; // Button validation: Disable the deposit button until the deposit field has an input.

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label + ' cannot be empty');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        // Prevent depositing a negative number
        if (parseFloat(field) <= 0) {
          setStatus('Error: ' + label + ' must be a positive number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        // Prevent input of a non-integer
        if (isNaN(field)) {
          setStatus('Error: ' + label + ' must be a number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        return true;
    };

    function handleCreate(){
        // console.log(deposit, balance);
        if (!validate(deposit, 'deposit')) return;

        // update balance by adding the deposit amount
        const updatedBalance = parseFloat(balance) + parseFloat(deposit);
        setBalance(updatedBalance);

        // add a new transaction & log the deposit/update the balance
        ctx.push('DEPOSIT: $' + deposit);
        ctx.push('BALANCE: $' + updatedBalance);
        setShow(false);
      };

    function clearForm(){
        setDeposit('');
        setShow(true);
    };

    return (
        <div className="deposit">
        <Card
            bgcolor= "success"
            txtcolor="white"
            header= "DEPOSIT"
            status= {status}
            body= {show ? 
                (
                <>
                {/* Display the current balance */}
                Current Balance: ${balance} <br/> <br/> <br/>

                {/* Deposit input field */}
                Deposit<br/>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="form-control"
                    id="deposit"
                    placeholder="Enter deposit amount"
                    value={deposit}
                    onChange={e => {
                        setDeposit(e.currentTarget.value);
                    }}/>
                <br/>

                {/* Submit button */}
                <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={isSubmitDisabled}>Deposit</button>
                </>
            ) : (
                <> 
                {/*Display the current accountBalance */}
                Current Balance: ${balance} <br /> <br />
                <h5>Success!</h5>  <br />
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
            )} 
        />
        </div>
    );
}