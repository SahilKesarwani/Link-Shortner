import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
	const [text, setText] = useState("");
	const [fullLink, setFullLink] = useState("");
	const [links, setLinks] = useState({});

	// useEffect(() => {
	// 	(async () => {
	// 		const 
	// 	})()
	// }, [fullLink])

	const onTextChange = (e) => {
		setText(e.target.value);
	};

	const onLinkSubmit = (e) => {
		e.preventDefault();
		setFullLink(text);
		console.log(fullLink);
		setFullLink("");
	}

	return (
		<div>
			<Navbar />
			<div className="container">
				<Form text={text} onTextChange={onTextChange} onLinkSubmit={onLinkSubmit} />
				<Table />
			</div>
		</div>
	);
};

export default App;
