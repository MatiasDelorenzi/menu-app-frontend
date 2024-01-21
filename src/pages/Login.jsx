import React from 'react'
import FormInput from '../components/FormInput';
import {loginUser} from '../utils/api/login'

function Login() {

	const handleSubmit = async (e) => {
		e.preventDefault()
		const username = e.target[0].value
		const password = e.target[1].value
		const response = await loginUser(username, password)
		console.log("RESPONSE =>", response)
		return; 
	};

  return (
    <>
			<form onSubmit={handleSubmit}>
				<FormInput 
					type="text"
					placeholder={"Username"}
				/>
				<FormInput 
					type="password"
					placeholder={"Password"}
				/>
				<button type="submit">Submit</button>
			</form>
    </>
  )
}

export default Login