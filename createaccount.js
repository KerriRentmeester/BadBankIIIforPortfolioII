function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const isSubmitDisabled = !name && !email && !password;

    // prevent submitting an empty field
    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label + ' cannot be empty');
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }

    // Basic email format validation
    function validateEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setStatus('Error: Invalid email format');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    // Password validation: PW must be 8 or more  characters
    function validatePw(password){
        if (password.length < 8) {
            setStatus('Password length must be at least 8 characters');
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validateEmail(email)) return;
        if(!validate(password, 'password')) return;
        if(!validatePw(password)) return;
        // Log the acct info
        ctx.push('ACCOUNT NAME: ' + name);
        ctx.push('ACCOUNT EMAIL: ' + email);
        ctx.push('ACCOUNT PASSWORD: ' + password);
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <div className="createAccount">
        <Card
            bgcolor= "primary"
            header= "Create Account"
            status= {status}
            body= {show ? (
                <>
                Name<br/>
                <input 
                    type="input" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={e => {
                        setName(e.currentTarget.value);
                    }}
                /><br/>

                Email address<br/>
                <input 
                    type="input" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={e => {
                        setEmail(e.currentTarget.value);
                    }}
                /><br/>

                Password<br/>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={e => {
                        setPassword(e.currentTarget.value);
                    }}
                /><br/>
                
                <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={isSubmitDisabled}>Create Account</button>
                </>
            ) : (
                <> {/* 2nd form here */}
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
        </div>
    )
}