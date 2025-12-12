
import { Github, Code, Codepen, Linkedin, Briefcase, FileText, Bot, Layers, ShoppingCart, BarChart, PenTool } from 'lucide-react';

export const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization tool using D3.js and React, providing interactive charts and real-time analytics for enterprise clients.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Prisma'],
    imageId: 'project-1',
    githubLink: 'https://github.com/rengabalaji',
    liveLink: '#',
  },
  {
    title: 'E-commerce Nexus',
    description: 'A fully responsive e-commerce platform with a custom CMS, payment gateway integration, and advanced filtering capabilities.',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'Tailwind CSS'],
    imageId: 'project-2',
    githubLink: 'https://github.com/rengabalaji',
    liveLink: '#',
  },
  {
    title: 'CogniApp AI',
    description: 'A mobile app that leverages machine learning for image recognition, featuring a sleek user interface and offline capabilities.',
    tags: ['React Native', 'TensorFlow.js', 'Firebase'],
    imageId: 'project-3',
    githubLink: 'https://github.com/rengabalaji',
    liveLink: '#',
  },
  {
    title: 'Dashboard Pro',
    description: 'A comprehensive dashboard for SaaS products, offering customizable widgets, user role management, and detailed reporting.',
    tags: ['Vue.js', 'Chart.js', 'Express.js', 'MongoDB'],
    imageId: 'project-4',
    githubLink: 'https://github.com/rengabalaji',
    liveLink: '#',
  },
];

export const skills = [
  { name: 'JavaScript / TypeScript', proficiency: 95, icon: Code },
  { name: 'React / Next.js', proficiency: 95, icon: Layers },
  { name: 'UI/UX Design', proficiency: 90, icon: PenTool },
  { name: 'Node.js & Backend', proficiency: 85, icon: Bot },
  { name: 'Database Management', proficiency: 80, icon: BarChart },
  { name: 'E-commerce Solutions', proficiency: 88, icon: ShoppingCart },
];

export const articles = [
  {
    title: 'The Rise of Server Components',
    description: 'A deep dive into React Server Components and their impact on web performance and developer experience.',
    link: '#',
    imageId: 'article-1',
  },
  {
    title: 'Mastering Modern CSS',
    description: 'Techniques for creating smooth, performant, and engaging user interfaces with modern CSS features.',
    link: '#',
    imageId: 'article-2',
  },
  {
    title: 'The Art of API Design',
    description: 'An overview of best practices for designing RESTful and GraphQL APIs that are scalable and easy to use.',
    link: '#',
    imageId: 'article-3',
  },
];

export const codingProfiles = [
  { name: 'GitHub', link: 'https://github.com/rengabalaji', icon: Github },
  { name: 'LeetCode', link: '#', icon: Code },
  { name: 'SkillRack', link: '#', icon: Briefcase },
  { name: 'Codepen', link: '#', icon: Codepen },
];

export const socialLinks = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/renga-balaji-s-73251b328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGf%2B10adKTFSR%2FVe3GxsJYA%3D%3D', icon: Linkedin },
  { name: 'GitHub', link: 'https://github.com/rengabalaji', icon: Github },
];

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Articles', href: 'articles' },
    { name: 'Contact', href: 'contact' },
];

export const heroData = {
    name: "Renga Balaji",
    profession: "Creative Developer & UI/UX Designer",
    intro: "I craft immersive and beautiful web experiences with a passion for modern design and cutting-edge technologies. My goal is to build products that are not only functional but also a delight to use.",
    achievements: [
        "Led development on a platform serving 1M+ users.",
        "Awarded \"FWA of the Day\" for an interactive web experiment.",
        "Speaker at several tech meetups on front-end performance."
    ]
}
