import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  Dashboard , 
   AlbumMusic , 
   Responsivedesign , 
   Hotel , 
   carstore , 
   dash , 
   simplePor , 
   MecaniqueStore , 
   Commerce , 
   NextLevel , 
   SimpleHouse , 
   bertyMarket , 
   Upright , 
   beautiPortb , 
   diagona , 
   mailbakery , 
   Shoplicious , 
   Regul ,
   campaignmonitor , 
   Hexplanet , 
   Pocimone , 
   TowerBuild , 
   birdJump , 
   SuperMario , 
   F2 , 
   Diablo , 
   Circul , 
   Snake , 
   simpleMusic , 
   birds , 
   Astraymaster , 
   straight , 
   githubs , 
   php , 
   Mamp , 
   Mysql , 
   sql , 
   Wordpress , 
   illustrateur ,
   Photoshop , 
   PremierPro, 
   github, 
} from "../assets";
import technopark from "../assets/Enactus.png"
import Enactus from "../assets/Rotiract.png"
import Mytek from "../assets/Mytek.jpg"
import freeLancer from "../assets/freeLance.png"
import Rotiract from "../assets/rot.png"

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Wordpress",
    icon: Wordpress,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 {
    name: "Php",
    icon: php,
  },
  // {
  //   name: "github",
  //   icon: githubs,
  // },
  // {
  //   name: "Php",
  //   icon: php,
  // },
  // {
  //   name: "Mamp",
  //   icon: Mamp,
  // },
  // {
  //   name: "MysqL",
  //   icon: Mysql,
  // },
  // {
  //   name: "Sql",
  //   icon: sql,
  // },
  
  // {
  //   name: "illustrateur",
  //   icon: illustrateur,
  // },
  // {
  //   name: "Photoshop",
  //   icon: Photoshop,
  // },
  // {
  //   name: "PremierPro",
  //   icon: PremierPro,
  // },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Mytek",
    icon: Mytek,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Enactus",
    icon: Enactus,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Rotiract",
    icon: Rotiract,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "free Lancer",
    icon: freeLancer,
    date: "Jan 2023 - Present",
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "technopark societer",
    icon: technopark,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mohamed Ali",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Ahmed",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Eya Jarreya",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dashboard",
    description:
      "profitionel friendly dashborad using react and Tailwind .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Dashboard,
    source_code_link: "https://zakariyazouazou.github.io/Stat/",
  },
  {
    name: "Album Music",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: AlbumMusic,
    source_code_link: "https://zakariyazouazou.github.io/albumw/",
  },
  {
    name: "Hotel",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Hotel,
    source_code_link: "https://github.com/",
  },



  {
    name: "Responsive design",
    description:
      "profitionel friendly dashborad using react and Tailwind .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Responsivedesign,
    source_code_link: "https://zakariyazouazou.github.io/PageWeb/",
  },
  {
    name: "Car store",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: carstore,
    source_code_link: "https://zakariyazouazou.github.io/car/",
  },
  {
    name: "Simple Dashborad",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dash,
    source_code_link: "https://zakariyazouazou.github.io/product_admin/",
  },



  {
    name: "Simple Portfoleo",
    description:
      "profitionel friendly Portflio using simple html css and js Code  .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "red-text-gradient",
      },
    ],
    image: simplePor,
    source_code_link: "https://zakariyazouazou.github.io/reflux/",
  },
  {
    name: "Mecanique Store",
    description:
      "Web site site for dropShoping And by cars solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MecaniqueStore,
    source_code_link: "https://zakariyazouazou.github.io/Meacanique/",
  },
  {
    name: "Commerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Commerce,
    source_code_link: "https://zakariyazouazou.github.io/clothing/",
  },

  {
    name: "Next Level",
    description:
      "profitionel friendly dashborad using react and Tailwind .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: NextLevel,
    source_code_link: "https://zakariyazouazou.github.io/next_level/",
  },
  {
    name: "Simple House",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: SimpleHouse,
    source_code_link: "https://zakariyazouazou.github.io/simple_house",
  },
  {
    name: "berty Market",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bertyMarket,
    source_code_link: "https://zakariyazouazou.github.io/berty_market/",
  },


  {
    name: "Upright",
    description:
      "profitionel friendly dashborad using react and Tailwind .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Upright,
    source_code_link: "https://zakariyazouazou.github.io/upright/",
  },
  {
    name: "beauti Portb",
    description:
      "Welcome your one-stop destination for all your shopping needs! Whether you're looking for the latest fashion trends,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: beautiPortb,
    source_code_link: "https://zakariyazouazou.github.io/first_portfolio/",
  },
  {
    name: "diagona",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: diagona,
    source_code_link: "https://zakariyazouazou.github.io/diagoona/",
  },


  {
    name: "mail bakery",
    description:
      "Welcome to your one-stop destination for all your shopping needs! Whether you're looking for the latest fashion trends .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mailbakery,
    source_code_link: "https://zakariyazouazou.github.io/mailchimp/mailbakery-omicron-mailchimp.html",
  },
  {
    name: "Shoplicious",
    description:
      "Welcome to [Commerce Website Name] - your one-stop destination for all your shopping needs! Whether you're looking for the latest fashion trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: Shoplicious,
    source_code_link: "https://zakariyazouazou.github.io/mailchimpe/shopilicious-mailchimp.html",
  },
  {
    name: "Regul",
    description:
      "Welcome to - your one-stop destination for all your shopping needs! Whether you're looking for the latest fashion trends,.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Regul,
    source_code_link: "https://zakariyazouazou.github.io/regular/mailbakery-zeta-regular.html",
  },
];  

const Gamez = [
      
  {
    name: "campaignmonitor",
    description:
      "Welcome to - your one-stop destination for all your shopping needs! Whether you're looking for the latest fashion trends,.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: campaignmonitor,
    source_code_link: "https://zakariyazouazou.github.io/bakery/goold-ol-bakery_campaignmonitor.html",
  },
  {
    name: "Hex planet",
    description:
      "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: Hexplanet,
    source_code_link: "https://zakariyazouazou.github.io/Hex/",
  },
  {
    name: "Pocimone",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Pocimone,
    source_code_link: "https://zakariyazouazou.github.io/Pocman/",
  },


  {
    name: "Build Tower",
    description:
      "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TowerBuild,
    source_code_link: "https://zakariyazouazou.github.io/Tower/",
  },
  {
    name: "Bird jump",
    description:
       "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: birdJump,
    source_code_link: "https://zakariyazouazou.github.io/Birde/",
  },
  {
    name: "Super Mario",
    description:
       "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: SuperMario,
    source_code_link: "https://zakariyazouazou.github.io/superMArio/src/",
  },


  {
    name: "F2",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: F2,
    source_code_link: "https://zakariyazouazou.github.io/F2/",
  },
  {
    name: "Diablo",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
    ],
    image: Diablo,
    source_code_link: "https://zakariyazouazou.github.io/Diabloo/",
  },
  {
    name: "Circul",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Circul,
    source_code_link: "https://zakariyazouazou.github.io/Circul/src/index.html",
  },
  {
    name: "Snake",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Snake,
    source_code_link: "https://zakariyazouazou.github.io/Snake-/Snake.html",
  },
  {
    name: "Basic App Music",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: simpleMusic,
    source_code_link: "https://zakariyazouazou.github.io/MusicSongs/music.html",
  },
  {
    name: "Bird",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: birds,
    source_code_link: "https://zakariyazouazou.github.io/Bird/bird.html",
  },
  {
    name: "straight",
    description:
        "Welcome to the world of Games ! Get ready to embark on an epic adventure that will take you to new heights of excitement and wonder.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: straight,
    source_code_link: "https://zakariyazouazou.github.io/race/v1.straight.html",
  },

]




export { services, technologies, experiences, testimonials, projects , Gamez };
