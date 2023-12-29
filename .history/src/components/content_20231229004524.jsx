import React from "react";
import '../styles/content.css'
import { Link } from "react-router-dom";

const Content = ({ img, title, description, rev, link, linkText, descriptionIntro }) => {
  // Function to make specific words bold based on a list of boldWords
  const makeBold = (text, boldWords) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      boldWords.includes(word.toLowerCase()) ? <strong key={index}>{word} </strong> : `${word} `
    ));
  };

  return (
    <div className="content-container">
      {/* Render the main title */}
      <h1 className="title-text">
        {title}
      </h1>
      <div className={`image-text-box ${rev ? 'reverse' : ''}`}>
        {/* Check if rev is true, meaning the paragraph is
        on the left and image on the right */}
        {rev ? (
          // If rev is true, render this block
          <div className="description-box">
            {/* Render the secondary title if it exists */}
            {title && <h2 className="title-text">{title}</h2>}
            {/* Render the description with specified words bold and link/button if provided */}
            <p className='description-text'>
              {makeBold(description, ['competitive', 'creative', 'scientific', 'advantage'])}
              {link != null &&
                <Link to={link}>
                  <button className="button">{linkText}</button>
                </Link>
              }
            </p>
          </div>
        ) : null}
        {/* Render the image */}
        <div className="image-box">
          <img src={img} loading="lazy" className='content-image' />
        </div>
        {/* Check if rev is false */}
        {rev ? null : (
          // If rev is false, render this block
          <div className="description-box">
            {/* Render the secondary title */}
            <h2 className="title-text">
              {descriptionIntro}
            </h2>
            {/* Render the description with specified words bold and link/button if provided */}
            <p className='description-text'>
              {makeBold(description, ['web', 'design', 'science', 'art'])}
              <br />
              {link != null &&
                <Link to={link}>
                  <button className="button">{linkText}</button>
                </Link>
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
