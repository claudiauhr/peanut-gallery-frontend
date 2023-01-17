function Login() {
    return (
        <form>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="email@email.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button>Log In</button>
        </form>
    )
}

export default Login;

// next step useState hook to capture values users/email