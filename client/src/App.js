import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
	const [fullLink, setFullLink] = useState("");
	const [desc, setDesc] = useState({});
	const [loading, setLoading] = useState(false);

	const onTextChange = e => {
		setFullLink(e.target.value);
	};

	const onLinkSubmit = e => {
		e.preventDefault();
		if (fullLink) {
			(async () => {
				setLoading(true);
				const { data } = await axios.post("/api/link/short", { fullLink });
				setDesc(data);
				setFullLink("");
				setLoading(false);
			})();
		}
	};

	return (
		<div className="bg-dark text-white min-vh-100">
			<Navbar />
			<div className="container">
				<Form fullLink={fullLink} onTextChange={onTextChange} onLinkSubmit={onLinkSubmit} />
				<Card desc={desc} loading={loading} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
