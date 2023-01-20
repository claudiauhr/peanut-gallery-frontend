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
            <label htmlFor = "username">USERNAME</label>
            <input type="username" name="email" placeholder="USERNAME"/>
            <label htmlFor ='password'>PASSWORD</label>
            <input type="password" name="password" placeholder="PASSWORD"/>
        </fieldset>
            <input type="submit" value="Login"/>
        </form>
        </div>
        </>
    );
};

export default Login;

// next step useState hook to capture values users/email