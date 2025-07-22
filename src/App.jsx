import {useState} from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">
				<h1 class="text-3xl font-bold underline">Hello world!</h1>
			</div>
		</>
	);
}

export default App;
