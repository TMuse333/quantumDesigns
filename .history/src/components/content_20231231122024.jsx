import React from "react";
import '../styles/content.css'
import { Link } from "react-router-dom";

const Content = ({ img, title, description, rev,
   link, linkText, descriptionIntro, boldTitle,
    boldDescription,video,objectPosition
 }) => {
  // Function to make specific words bold based on a list of boldWords
  const makeBold = (text, boldWords, maxOccurrences = 1) => {
    if (!boldWords) {
      return text; // Return the original text if boldWords is not provided
    }

    const words = text.split(' ');
    const wordOccurrences = {};
  
    return words.map((word, index) => {
      const lowerWord = word.toLowerCase();
  
      // Initialize word count if not present
      wordOccurrences[lowerWord] = (wordOccurrences[lowerWord] || 0) + 1;
  
      if (boldWords.includes(lowerWord) && wordOccurrences[lowerWord] <= maxOccurrences) {
        return <span className="bold-700" key={index}>{word} </span>;
      } else {
        return `${word} `;
      }
    });
  };

  const makeBold2 = (text, boldWords) => {
    if (!boldWords) {
      return text; // Return the original text if boldWords is not provided
    }

    const words = text.split(' ');
  
    return words.map((word, index) => (
      boldWords.includes(word.toLowerCase()) ?
        <span className="bold-700" key={index}>{word} </span> :
        `${word} `
    ));
  };

  return (
    <div className="content-container">
      {/* Render the main title */}
      <h1 className="title-text">
        {makeBold(title, boldTitle)}
      </h1>
      <div className={`image-text-box ${rev ? 'reverse' : ''}`}>
        {/* Check if rev is true, meaning the paragraph is
        on the left and image on the right */}
        {rev ? (
          // If rev is true, render this block
          <div className="description-box">
            {/* Render the secondary title if it exists */}
            {title && <h2 className="title-text">{descriptionIntro}</h2>}
            {/* Render the description with specified words bold and link/button if provided */}
            <p className='description-text'>
              {makeBold2(description, boldDescription)}
              <br/>
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
  {video ? (
    <video controls className='content-video'>
      <source src={img} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={img} loading="lazy" className='content-image'
    style={{
      objectPosition:objectPosition
    }} />
  )}
</div>
        {/* Check if rev is false,
        meaning image is on the right then paragraph
        is on the left of the screen */}
        {rev ? null : (
          // If rev is false, render this block
          <div className="description-box">
            {/* Render the secondary title */}
            <h2 className="title-text">
              {makeBold2(descriptionIntro, boldTitle)}
            </h2>
            {/* Render the description with specified words bold and link/button if provided */}
            <p className='description-text'>
              {makeBold2(description, boldDescription)}
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
