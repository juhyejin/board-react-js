import React, { useState } from 'react';
import './Hello.css';

export default function Hello() {
	const [name, setName] = useState('hyejin');
	const [count, setCount] = useState(0);

	function changeName() {
		const newName = name === 'hyejin' ? 'junhyeok' : 'hyejin';
		setName(newName);
	}

	function countUp() {
		setCount(count + 1);
	}
	function countDown() {
		setCount(count - 1);
	}
	return (
		<div>
			<h1>Hi</h1>
			<h2>{name}</h2>
			<button type="button" onClick={changeName}>
				Change
			</button>
			<h2>{count}</h2>
			<button type="button" onClick={countUp}>
				+1
			</button>
			<button type="button" onClick={countDown}>
				-1
			</button>
		</div>
	);
}
