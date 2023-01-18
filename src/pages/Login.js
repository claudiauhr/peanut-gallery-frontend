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
            <label for = "username">USERNAME</label>
            <input type="username" id="email"/>
            <label for ='password'>PASSWORD</label>
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