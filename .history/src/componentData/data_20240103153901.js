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
    'Succeed today',
    'Websites are essential',
    'You need a great website',
    ['Websites', 'Essential'],
    ['competitive', 'creative', 'scientific', 'advantage'],
    false,
    '60% 55%'
  );
  
  export const content2 = new Content(
    'src/images/network.jpg',
   
    'Q3 Visuals is on a mission to produce the best websites they possibly can and improve everyday. We are committed to improving our products by '+
    'figuring out what the best way to do something is then apply it creativly ' +
    'in our products.',
    true,
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
    'Thomas Musial is a man who believes in hard work and discipline everyday to achieve his full potential and live a life worth living. He is dedicated to being competent '+
    'in many forms of human endeavour and skills which include '
    +'visual and literary communication, being physically and mentally strong and dedicating himself to getting better everyday. '
    +'',
    false,
   


  )

  export const about2 = new Content(
   'src/images/tom-in-suit-2.jpg',
   "Thomas has been dedicated to art since a young age and began by drawing video game characters. "+
   "" Years later, he transitioned to drawing anime characters, cultivating a deep appreciation for the artistic"
     craft. This focused work led him to venture into the realm of website creation, where he applied his. As 
     his journey evolved, Thomas developed an interest in literary communications, aspiring to merge both literary
      and visual communication through websites, creating unique and stunning media.",
    true,
    null,
    null,
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
    'Thomas is also very dedicated to fitness and being strong mentally. '+
    'This includes vertical jump training and intense mediation sessions. '+
    'The power of your thoughts is incredibly powerful and can '+
    'affect your whole life, so choose them wisley.',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    true
  )

  export const companyServices = [
    {
        name:'Front end Development',
        description:"We use React.js to create efficient and visually captivating websites. This state-of-the-art technology empowers us to build seamless and dynamic user interfaces, ensuring a smoother and more engaging experience for visitors",
        background:'src/images/react-logo-nobg.png'
    },
    {
        name:'Responsive Web design',
        description:'Different screen sizes require different layouts, we take this into account to '+
        'to ensure your website looks great on smartphones, tablets and computers of all sizes',
        background:'src/images/react-logo.jpeg'
    },
    {
        name:'Custom user interface',
        description:'Our websites are coded from scratch so we can design anything you want to bring your vision to reality',
        background:'src/images/react-logo.jpeg'
    },
    {
      name:'Component-based Architecture',
      description:'We create and use components to make our websites, meaning our websites very reuseable and maintainable, '+
      'this also means we can create websites very quickly to get your vision out as soon as possible.',
      background:'src/images/react-logo.jpeg',

    },
    {
      name:'State Management',
      description:'We leverage react js state management, meaning your data can be used efficiently throughout your whole web application',
      background:'src/images/react-logo.jpeg',

    },
    {
      name:'Client Collaboration',
      description:'We will work closely with you with frequent updates to get your feedback and ensure your application turns out exactly the way you want it',
      background:'src/images/react-logo.jpeg',
      
    }
] 





export const tenetsData = [
  {
    name:'Focus',
    description:'Without the ability to focus, '+
    'nothing can be done. We harness the ability to focus '+
    'on a difficult task for many hours at a time '+
    ' day after day after day to ensure your website is delivered quickly and '+
    'no detail is left untouched',
    image:'src/images/marcus.avif'
  },
  
  {
    name:'Discipline',
    description:'Q3 visuals makes sure they are always ready to '+
    'produce their best quality work by following healthy lifestyle '+
    'protocols. This includes staying in strong physical condition, eating and '+
    ' sleeping properly and planning out every work day to '+
    ' ensure we can put our best effort into creating your wonderful website.',
    image:'src/images/goggins2.jpeg'
  },

  {
    name:'Creativity',
    description:'We believe in taking in lots of '+
    'inspiration from various different sources and putting it '+
    'all together to create a unique and stunning website.'+
    'You can come to us with an idea and we will turn it into '+
    ' a stunning project',
    image:''
    
  },
  {
    name:'Tenacity',
    description:'Until it is done, it is not done, so we work until the job is finished.'+
    ' we are relentless with our approach to work. We understand that the jobs arent getting easier '+
    'so we are prepared to endure tough work sessions to complete the job. '+
    'Intense physical training has prepared us for any difficult tasks ahead '+
    'to ensure your product turns out fantastic.',
    image:''
  },
  {
    name:'Ingenuity',
    description:'For any situation you are ever in, there is always a best move '+
    'to ensure you have the highest probability for success and we are always searching for new '+
    'ways to create a better product. This includes learning about a diverse range of subjects '+
    'looking for techniques to improve. These subjects includes human nature, war, physchology, '+
    'physics, art and much more to ensure your website '+
    'has the highest probability of success possible.',
    image:'src/images/einstein2.jpeg'
  }
]


export const tenetsContent = tenetsData.map((tenet, index) => (
  new Content(
    tenet.image, // 1st attribute
    tenet.description, // 2nd attribute
    index % 2 === 0, // 3rd attribute (true for even index, false for odd index)
    null, // 4th attribute
    null, // 5th attribute
    tenet.name, // 6th attribute
    null // 7th attribute
    // ... continue for the rest of the attributes
  )
));

  