import React, { useState } from 'react';
import './Hello.css';
import UserName from './UserName';

export default function Hello({ age }) {
	const [name, setName] = useState('hyejin');
	const [ages, setAge] = useState(age);
	const msg = ages > 19 ? '성인입니다' : '미성년자 입니다.';

	function changeName() {
		const newName = name === 'hyejin' ? 'junhyeok' : 'hyejin';
		setName(newName);
	}
	function ageUp() {
		console.log(ages);
		setAge(ages + 1);
	}
	return (
		<div>
			<h1>Hi</h1>
			<h2>
				{name} {ages} {msg}
			</h2>
			<UserName name={name} />
			<button
				type="button"
				onClick={() => {
					changeName();
					ageUp();
				}}
			>
				Change
			</button>
		</div>
	);
}
