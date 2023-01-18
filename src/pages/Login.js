import Header from "../components/Header";

function Login() {
    return (
        <>
        <Header />
        <div className="login">
        <h2>Login</h2>
        <form action="/login" method="GET">
        <fieldset>
            <legend>Email & Password</legend>
            <label htmlFor = "email">E-MAIL</label>
            <input type="email" id="email"/>
            <label htmlFor ='password'>PASSWORD</label>
            <input type="password" id="password"/>
        </fieldset>
            <input type="submit" value="Login"/>
        </form>
        </div>
        </>
    );
};

export default Login;

// next step useState hook to capture values users/email