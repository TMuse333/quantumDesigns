class Content {
    constructor(img, description, rev, link, linkText, title, descriptionIntro, boldTitle, boldDescription) {
      this.img = img;
      this.description = description;
      this.rev = rev;
      this.link = link;
      this.linkText = linkText;
      this.title = title;
      this.descriptionIntro = descriptionIntro;
      this.boldTitle = boldTitle;
      this.boldDescription = boldDescription;
    }
  }
  
  export const content1 = new Content(
    'src/images/network.jpg',
    'Having a strong online presence today is a non-negotiable ' +
      'if you ' +
      'want to be competitive and grow your brand. Here at Q3 Visuals we use ' +
      'creative designs and scientific methods to give you that competitive ' +
      'advantage you need to succeed.',
    false,
    'booking',
    'Transform your vision today',
    'Websites are essential',
    'You need a great website',
    ['Websites', 'Essential'],
    ['competitive', 'creative', 'scientific', 'advantage'],
  );
  
  export const content2 = new Content(
    'src/images/davinci-quote.jpg',
    'With so much content on the web today, standing out is crucial. We have formulated a unique process that uses the power of psychology, engaging visual tactics and creativity to ensure your website stands out above the rest.',
    false,
    'process',
    'Learn our tenets of work',
    'Committed To Creativity, Inspired By Science.',
    '',
    ['Creativity', 'Science'],
    ['visual', 'tactics', 'science', 'art', 'above'],
  );
  