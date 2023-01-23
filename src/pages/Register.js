import Header from '../components/Header';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Register(props) {
	const navigate = useNavigate();
	const acctForm = {
		email: '',
		username: '',
		password: '',
	};
	const [
		form,
		setForm,
	] = useState(acctForm);

	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newAcct = async (account) => {
			const URL = 'https://peanutgallery.herokuapp.com/c/register';
			await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/JSON',
				},
				body: JSON.stringify(account),
			});
		};
		newAcct(form);
		navigate('/game');
	};

	return (
		<>
			<Header />
			<div className='registration'>
				<h2>Registration</h2>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Player Info</legend>
						<label htmlFor='email'>E-MAIL</label>
						<input type='email' name='email' onChange={handleChange} placeholder='EMAIL' />
						<label htmlFor='username'>USERNAME</label>
						<input type='text' name='username' onChange={handleChange} placeholder='USERNAME' />
						<label htmlFor='password'>PASSWORD</label>
						<input type='password' name='password' onChange={handleChange} placeholder='PASSWORD' />
					</fieldset>
					<input type='submit' value='REGISTER' />
				</form>
			</div>
		</>
	);
}

export default Register;
