// in the future, I will need to adjust the initialBalance from being set to zero to being set to the last accountBalance recorded for that user.
// in the future, I may need to adjust the 2nd form at the bottom of this file to account for "logging in" and moving to the "logged in home page."

function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const isSubmitDisabled = !email && !password; // Button validation: Disable the deposit button until the deposit field has an input.

    function validate(field, label){
      // prevent submitting an empty field
      if (!field) {
        setStatus('Error: ' + label + ' cannot be empty');
        setTimeout(() => setStatus(''), 3000);  // removes error msg after 3 sec
        return false;
      }
      // Basic email format validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setStatus('Error: Invalid email format');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
      // Password validation: PW must be more than 8 characters
      if (label === 'password' && field.length <= 8) {
        setStatus('Error: ' + label + ' must be more than 8 characters');
        setTimeout(() => setStatus(''), 3000);  // removes error msg after 3 sec
        return false;
      }
      return true;
  };
  
    function handleCreate(){
        console.log(email, password);
        if(!validateEmail(email)) return;
        if (!validate(password, 'password')) return;
        if(!validatePw(password)) return;
    
        // Log the acct info
        ctx.push('ACCOUNT EMAIL: ' + email);
        ctx.push('ACCOUNT PASSWORD: ' + password);
        setShow(false);
    };
  
    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    };
  
    return (
        <div className="login">
        <Card
            bgcolor="primary"
            header="LOGIN"
            status={status}
            body={show ? 
                (
                <> 
                Email address<br/>
                <input 
                    type="input" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={e => {
                        setEmail(e.currentTarget.value);
                    }}/>
                <br/>

                Password<br/>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={e => {
                        setPassword(e.currentTarget.value);
                    }}/>
                <br/>

                <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={isSubmitDisabled}>Login</button>
                </>
            ) : (
                <>
                <h5>Success</h5><br />
                <button type="submit" className="btn btn-light" onClick={clearForm}>You are logged in!</button>
                </>
            )}
        />
        </div>
    );
}