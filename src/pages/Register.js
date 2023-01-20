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
                <label htmlFor ="username">USERNAME</label>
                <input type="text" name="username" placeholder="USERNAME"/>
                <label htmlFor ="password">PASSWORD</label>
                <input type="password" name="password" placeholder="PASSWORD"/>
                <label htmlFor = "email">E-MAIL</label>
                <input type="email" name="email" placeholder="EMAIL"/>
                </fieldset>
                <input type="submit" value="REGISTER"/>
          </form>
        </div>
        </>
    );
};

export default Register;