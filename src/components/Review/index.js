import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../../data';
import './index.css';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const checkNumber = (num) => {
		return num > people.length - 1 ? 0 : num < 0 ? people.length - 1 : num;
	};

	const prevIndex = () => {
		setIndex((prevIndex) => checkNumber(prevIndex - 1));
	};
	const nextIndex = () => {
		setIndex((prevIndex) => checkNumber(prevIndex + 1));
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={prevIndex}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextIndex}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn">surprise me</button>
		</article>
	);
};

export default Review;
