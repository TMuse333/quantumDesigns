class Content {
    constructor(img, description, rev, link, linkText,
       title, descriptionIntro, boldTitle,
        boldDescription,video,objectPosition
        ,id) {
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
      this.objectPosition = objectPosition;
      this.id = id;

    }
  }
  
  export const content1 = new Content(
    // 'src/images/network.jpg',
    'src/images/q3-visuals-logo-2-no-bg.png',
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
    '60% 55%',
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
   " Years later, he transitioned to drawing anime characters, cultivating a deep focus into improving his artistic"
    +" craft. This focused work led him to into the realm of website creation, to help others grow their digital presence online. As "
     +"his journey evolved, Thomas developed an interest in literary communications, to merge both literary "+
     " and visual communication through websites to create unique and stunning media.",
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
    'Thomas enjoys reading books on various subjects like phycology, human nature '+
    'samurai philosophy, quantum physics and much more. '+
    'He is also very dedicated to health and fitness as a strong body helps a lot to have a strong mind. '+
    'One of his favourite things to do in mediate (going to the quantum realm) '+
    'which is where the Q comes from in q3. Thomas is a big believer in mindfulness and mediates '+
    'everyday to develop his spirit and mind to be the best that it can be.',
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
        name:'Front-end Development',
        description:'Efficient and visually captivating websites using React.js for seamless and dynamic user interfaces.',
        background:'src/images/react-logo-nobg.png'
    },
    {
        name:'Responsive Web Design',
        description:'Tailored layouts for smartphones, tablets, and computers, ensuring your website looks great on all devices.',
        background:'src/images/react-logo.jpeg'
    },
    {
        name:'Custom User Interface',
        description:'We can make your website completley from scratch to deliver percicely transform your visoin to reality',
        background:'src/images/react-logo.jpeg'
    },
    {
      name:'Component-based Architecture',
      description:'Our websites are made of different pieces all put together, if you see something you like on this website, you can have it!',
      background:'src/images/react-logo.jpeg',

    },
    {
      name:'State Management',
      description:'Efficient use of React.js state management for seamless data handling across your entire web application.',
      background:'src/images/react-logo.jpeg',

    },
    {
      name:'Client Collaboration',
      description:'Close collaboration with frequent updates, ensuring your application aligns precisely with your vision.',
      background:'src/images/react-logo.jpeg',
      
    }
];






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

  