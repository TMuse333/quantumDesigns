import React from "react";
import '../styles/content.css'
import { Link } from "react-router-dom";

const Content = ({ img, title, description, rev, link, linkText, descriptionIntro }) => {
  const makeBold = (text, boldWords) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      boldWords.includes(word.toLowerCase()) ? <strong key={index}>{word} </strong> : `${word} `
    ));
  };

  return (
    <div className="content-container">
      <h1 className="title-text">
        {title}
      </h1>
      <div className={`image-text-box ${rev ? 'reverse' : ''}`}>
        {rev ? (
          <div className="description-box">
            {title && <h2 className="title-text">{title}</h2>}
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
        <div className="image-box">
          <img src={img} loading="lazy" className='content-image' />
        </div>
        {rev ? null : (
          <div className="description-box">
            <h2 className="title-text">
              {descriptionIntro}
            </h2>
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
