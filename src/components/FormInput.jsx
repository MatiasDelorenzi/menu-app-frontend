import React, {useState} from 'react'

function FormInput({type, placeholder}) {
	const [value, setValue]= useState('')

  return (
    <>
			<input
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
			/>
    </>
  )
}

export default FormInput