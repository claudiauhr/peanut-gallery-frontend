import Header from "../components/Header";

function Login() {
    return (
        <>
        <Header />
        <div class="login">
        <h1>Login</h1>
        <form action="/login" method="GET">
            <fieldset class="login-info">
            <legend>Email & Password</legend>
            <label for = "email">E-MAIL</label>
            <input type="email" id="email"/>
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