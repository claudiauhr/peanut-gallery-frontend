function Register() {
    return (
        <form>
            <label htmlFor="name">Full name</label>
            <input type="name" placeholder="full name" />
            <label htmlFor="email">email</label>
            <input type="email" placeholder="email@email.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button>Register</button>
        </form>
    )
}

export default Register;