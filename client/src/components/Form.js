import React from "react";

const Form = ({ text, onTextChange, onLinkSubmit }) => {
    return (
        <form className="my-5" onSubmit={onLinkSubmit}>
            <div className="mb-3">
                <label htmlFor="fullLink" className="form-label">
                    Full Link
                </label>
                <input type="text" value={text} className="form-control" id="fullLink" onChange={onTextChange} />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
