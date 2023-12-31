class Content {
    constructor(img, description, rev, link, linkText,
       title, descriptionIntro, boldTitle,
        boldDescription,video,objectPosition) {
      this.img = img;
      this.description = description;
      this.rev = rev;
      this.link = link;
      this.linkText = linkText;
      this.title = title;
      this.descriptionIntro = descriptionIntro;
      this.boldTitle = boldTitle;
      this.boldDescription = boldDescription;
      this.video = video;
      this.objectPosition = objectPosition

    }
  }
  
  export const content1 = new Content(
    // 'src/images/network.jpg',
    'src/images/q3-visuals-logo-2.svg',
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
    false,
    '60% 45%'
  );
  
  export const content2 = new Content(
    'src/images/network.jpg',
    // 'src/images/davinci-quote.jpg',
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
    false
  );

  export const about1 = new Content(
    'src/images/be-about-it.png',
    'Thomas Musial is a man who believes in hard work and discipline everyday to achieve his full potential and to live a life worth living. He enjoys working on websites, drawing, getting strong in the gym, meditating and doing whatever else it takes to be a sovereign, free thinking and healthy individual.',
    false,
   


  )

  export const about2 = new Content(
   'src/images/tom-in-suit-2.jpg',
    'We believe in collaborating with others and creating strong connections with like minded people like yourself to collaborate and create awesome products to help the world be a better place to live in.',
    true,
    '/booking',
    'Work with us',
    null,
    null,
    null,
    null
    
  )


  export const aboutOutro = {
    title:'We are Q3 Visuals',
    content:' Everyone is inherently predisposed to excel in a specific form of intelligence, where their innate strengths shine, be it in the realm of words, social skills, or other distinct abilities.The people at Q3 Visuals not surprisingly  posses higher than average visual intelligence. \n'+
    '  Our mission is to develop our visual capabilities to our highest level and use this skill to help other people like you elevate your digital presence. We are committed to achieving our max potential as creatives and creating the best products we can.'
   
   

  }


  export const content3 = new Content(
    'src/images/short_dunk.mov',
    'We believe in collaborating with others and creating strong connections with like minded people like yourself to collaborate and create awesome products to help the world be a better place to live in.',
    null,
    null,
    null,
    null,null,null,null,
    true
  )

  export const companyServices = [
    {
        name:'Front end Development',
        description:"We harness the capabilities of React.js to craft websites that are both functional and efficient, while maintaining a visually captivating appeal. React.js, a state-of-the-art technology, empowers us to create seamless and dynamic user interfaces, ensuring a smoother and more engaging experience for website visitors."
    },
    {
        name:'Responsive Web design',
        description:'We put great emphasis on having a responsive design for your application, '+
        'to ensure your website looks great on smartphones, tablets and computers of all sizes'
    },
    {
        name:'Custom user interface',
        description:'Our websites are coded from scratch so we can design anything you want to bring your vision to reality'
    },
    {
      name:'Component-based Architecture',
      description:'We create and use components to make our websites, meaning our websites very reuseable and maintainable, '+
      'this also means we can create websites very quickly to get your vision out as soon as possible.'
    },
    {
      name:'State management'
    }
] 
  