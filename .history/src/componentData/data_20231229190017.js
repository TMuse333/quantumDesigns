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
    'Q3 Visuals is on a mission to produce the best websites they possibly can and improve everyday. We are committed to improving our products by '+
    'figuring out what the best way to do something is then apply it creativly ' +
    'in our products.',
    false,
    'process',
    'Learn our tenets of work',
    'Committed To Creativity, Inspired By Science.',
    'Built to work, work to build',
    ['Creativity', 'Science'],
    ['visual', 'tactics', 'science', 'art', 'above'],
  );

  export const about1 = new Content(
    'src/images/be-about-it.png',
    'Thomas Musial is a man who believes in hard work and discipline everyday to achieve his full potential and to live a life worth living. He enjoys working on websites, drawing, getting strong in the gym, meditating and doing whatever else it takes to be a sovereign, free thinking and healthy individual.',
    false,


  )

  export const about2 = new Content(
   'src/images/tom-in-suit-2.jpg',
    'We believe in collaborating with others and creating strong connections with like minded people like yourself to collaborate and create awesome products to help the world be a better place to live in.',
    true
  )


  export const outro
  