import React, { useState } from 'react';

function StudentForm(props) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const changeName = (event) => {
	setName(event.target.value);
};

const changeEmail= (event) => {
	setEmail(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	name,
	email,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setName('');
	setEmail('');
};

return (
	<div>
	<label>Name</label>
	<input type="text" value={name} onChange={changeName} />

	<label>Email</label>
	<input type="text" value={email} onChange={changeEmail} />
    
	<button onClick={transferValue}> Click Me</button>

	</div>
);
}

export default StudentForm;
