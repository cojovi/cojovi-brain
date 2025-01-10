import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo7,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Community",
    url: "#community",
  },
  {
    id: "1",
    title: "Projects & Blog",
    url: "#projects-blog",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Join Discord",
    url: "#join-discord",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Rabbit.Stories",
    url: "https://rabbit-cam.vercel.app",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo1,
  companyLogo7,
];

export const brainmastertServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainmasterServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "March 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic Web Presence Package",
    description: "Basic components, perfect to get started.",
    price: "TBD",
    features: [
      "Custom website development (up to 5 pages)",
      "Basic maintenance and security updates",
      "Hosting services and Basic SEO setup",
    ],
  },
  {
    id: "1",
    title: "Advanced Business Growth",
    description: "For the Business looking to grow. All SEO Services and your own hands on, and on call Agent",
    price: "TBD",
    features: [
      "Advanced SEO and Custom Tailored ai for integrations and bots ",
      "Custom website development (up to 10 pages), Priority support to solve issues quickly",
      "Option for e-commerce functionality, Social Media Integrations.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom Tailored Plans for Business",
    price: "TBD",
    features: [
      "All options are defined in the consultation",
      "Can handle any size business",
      "Option for employee dashboard",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "With your custom AI chatbot, Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Adaptive Features",
    text: "Seamlessly integrate adaptable features for different business models, offering flexibility and scalability in line with your growth.",
    backgroundUrl: "./assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  {
    id: "3",
    title: "Workflow Automations",
    text: "Connect sources to automate workflows so you can spend more time where your needed, in the field. We can custom make codes and scripts to automate and handle repetitive actions so you dont have to.",
    backgroundUrl: "./assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "4",
    title: "Custom Web Solutions",
    text: "Access exclusive, tailor-made digital solutions, ensuring your website remains unique, functional, and always ahead of the curve.",
    backgroundUrl: "./assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage6,
  },
  {
    id: "5",
    title: "Conversion Optimization.",
    text: "Utilize our specialized components for upselling and upgrades, designed to streamline the user journey and boost conversion rates.",
    backgroundUrl: "./assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/93ZeMUAf",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/The_Cojovi",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/cojovi",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/cojovi",
  },
];
