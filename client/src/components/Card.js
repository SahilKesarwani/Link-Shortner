import React, { Fragment } from "react";
import Loader from "./Loader";

const Card = ({ desc, loading }) => {
	const renderCard = () => {
		if (loading) {
			return <Loader />;
		} else {
			if (Object.keys(desc).length !== 0) {
				return (
					<div className="card text-center border-white bg-dark text-light">
						<div className="card-header border-white bg-black">Description</div>
						<div className="card-body">
							<h5 className="card-title">Your given link:</h5>
							<p className="card-text">
								<a href={desc.fullLink} className="text-decoration-none">
									{desc.fullLink}
								</a>
							</p>
							<h5 className="card-title">Your requested short link:</h5>
							<p className="card-text">
								<a href={desc.shortLink} className="text-decoration-none">
									{desc.shortLink}
								</a>
							</p>
						</div>
						<div className="card-footer border-white bg-black">Clicks: {desc.clicks}</div>
					</div>
				);
			}
		}
	};

	return <Fragment>{renderCard()}</Fragment>;
};

export default Card;
