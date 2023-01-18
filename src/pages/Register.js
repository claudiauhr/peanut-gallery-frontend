import Header from "../components/Header";

function Register() {
    return (
        <>
        <Header />
        <div className="registration">
          <h2>Registration</h2>
          <form action="/register" method="POST">
                <fieldset>
                <legend>Player Info</legend>
                <label for ='username'>USERNAME</label>
                <input type="text" id="username"/>
                <label for ='password'>PASSWORD</label>
                <input type="password" id="password"/>
                <label for = "email">E-MAIL</label>
                <input type="email" id="email"/>
                </fieldset>
                <input type="submit" value="Register Now"/>
          </form>
        </div>
        </>
    );
};

export default Register;