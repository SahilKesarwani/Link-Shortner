import React from "react";

const Form = ({ fullLink, onTextChange, onLinkSubmit }) => {
	return (
		<form className="my-5" onSubmit={onLinkSubmit}>
			<div className="mb-3">
				<label htmlFor="fullLink" className="form-label">
					Full Link
				</label>
				<input type="url" value={fullLink} className="form-control" id="fullLink" onChange={onTextChange} placeholder="https://example.com" />
			</div>
			<button type="submit" className="btn btn-primary text-center">
				Proceed to Short-Link
			</button>
		</form>
	);
};

export default Form;
