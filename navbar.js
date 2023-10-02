function NavBar(){
    return (
        <div className="containerNavBar" style={{marginLeft: "5px", padding: "5px"}}>  {/* NavBar is positioned 5px from left margin & 5px of padding all around */}
            <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" title="Home" href="#">BadBank</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/createaccount/" title="Create Account Here">Create Account</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#/login/" title="Login Here">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/" title="Deposit $ Here">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/" title="Withdraw $ Here">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/" title="See Historical Account Data Here">All Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    );
}