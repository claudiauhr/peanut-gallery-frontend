import Header from '../components/Header';
// import LoginDisplay from "../components/LoginDisplay";
// import JoinGame from '../components/JoinGame';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const loginForm = {
		username: '',
		password: '',
	};

	const [
		form,
		setForm,
	] = useState(loginForm);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const checkAcct = (async (credentials, callback) => {
			const URL = 'https://peanutgallery.herokuapp.com/r/login';
			const result = await fetch(URL, {
				method: 'POST',
				headers: { 'Content-Type': 'Application/JSON' },
				body: JSON.stringify(credentials),

			});

			callback(await result.json());
		});

		checkAcct(form, (result) => {

			if (result.error) return;

			navigate('/trivia/create');
		});
	};

	return (
		<>
			<Header />
			<div className='login'>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Email & Password</legend>
						<label htmlFor='username'>USERNAME</label>
						<input
							type='username'
							name='username'
							onChange={handleChange}
							placeholder='USERNAME'
						/>
						<label htmlFor='password'>PASSWORD</label>
						<input
							type='password'
							name='password'
							onChange={handleChange}
							placeholder='PASSWORD'
						/>
					</fieldset>
					<input type='submit' value='Login' />
				</form>
			</div>
			{/* return ( isLoggedIn ? <LoginDisplay /> : <JoinGame />) */}
		</>
	);
}

export default Login;

// next step useState hook to capture values users/email
