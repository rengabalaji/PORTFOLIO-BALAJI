
import { Github, Code, Codepen, Linkedin, Briefcase, FileText, Bot, Layers, ShoppingCart, BarChart, PenTool, Home, FolderKanban, Wrench, Newspaper, Mail, Languages } from 'lucide-react';

export const projects = [
  {
    title: 'Madrasandhai',
    description: 'A web-based platform connecting Indian street food vendors with trusted raw material suppliers, enabling affordable sourcing and smooth vendor–supplier collaboration.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Stripe'],
    imageId: 'project-madrasandhai',
    githubLink: 'https://github.com/rengabalaji/Madras-Sandhai',
    liveLink: 'https://madras-sandhai-five.vercel.app/',
  },
];

export const skills = [
  { name: 'HTML & CSS', proficiency: 60, icon: Code },
  { name: 'JavaScript / TypeScript', proficiency: 50, icon: Code },
  { name: 'React / Next.js', proficiency: 50, icon: Layers },
  { name: 'UI/UX Design', proficiency: 45, icon: PenTool },
  { name: 'Node.js & Backend', proficiency: 45, icon: Bot },
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
  { name: 'LeetCode', link: 'https://leetcode.com/u/NczbUCt1vt/', icon: Code },
  { name: 'Duolingo', link: 'https://www.duolingo.com/profile/b_a_l_a_j_i_2_5', icon: Languages },
];

export const socialLinks = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/renga-balaji-s-73251b328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGf%2B10adKTFSR%2FVe3GxsJYA%3D%3D', icon: Linkedin },
  { name: 'GitHub', link: 'https://github.com/rengabalaji', icon: Github },
];

export const navLinks = [
    { name: 'Home', href: 'home', icon: Home },
    { name: 'Projects', href: 'projects', icon: FolderKanban },
    { name: 'Skills', href: 'skills', icon: Wrench },
    { name: 'Learnings', href: 'learnings', icon: Newspaper },
    { name: 'Contact', href: 'contact', icon: Mail },
];

export const heroData = {
    name: "Renga Balaji",
    profession: "An Aspiring Tech Student",
    intro: "I craft immersive and beautiful web experiences with a passion for modern design and cutting-edge technologies. My goal is to build products that are not only functional but also a delight to use.",
    achievements: [
        "Led development on a platform serving 1M+ users.",
        "Awarded \"FWA of the Day\" for an interactive web experiment.",
        "Speaker at several tech meetups on front-end performance."
    ]
}
