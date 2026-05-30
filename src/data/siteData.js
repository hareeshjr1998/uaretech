// UareTech Premium Portfolio Centralized Data
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Brain, 
  Cloud, 
  Megaphone, 
  Zap, 
  ShieldCheck, 
  Sliders, 
  Clock, 
  Award,
  Globe,
  Database,
  Cpu
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Highly interactive, blazing fast, responsive modern web applications crafted with Next.js, React, and robust server technologies. Designed for seamless scale.',
    icon: Code2,
    color: 'from-brand-secondary to-brand-accent',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Immersive cross-platform native iOS & Android applications built using React Native & Flutter, focusing on performance, smooth animations, and high fidelity UI.',
    icon: Smartphone,
    color: 'from-brand-accent to-brand-primary',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Futuristic design interfaces, wireframes, style systems, and user journey paths mapped in Figma. Rooted in deep ergonomics and gorgeous, lively transitions.',
    icon: Palette,
    color: 'from-brand-accent to-brand-secondary',
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Empowering your operations with custom machine learning pipelines, LLM fine-tuning, automated intelligent chat assistants, and smart data analytics.',
    icon: Brain,
    color: 'from-brand-secondary to-brand-primary',
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Enterprise grade AWS/GCP architecture deployment, containerized Docker infrastructures, secure Kubernetes clusters, and zero-downtime CI/CD build scripts.',
    icon: Cloud,
    color: 'from-brand-secondary to-brand-accent',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Advanced search engine optimization, content strategy execution, programmatic PPC campaigns, and algorithmic social amplification to 10x your client base.',
    icon: Megaphone,
    color: 'from-brand-primary to-brand-accent',
  },
];

export const statsData = [
  { id: 1, value: 120, suffix: '+', label: 'Projects Completed' },
  { id: 2, value: 98, suffix: '%', label: 'Happy Clients' },
  { id: 3, value: 24, suffix: '', label: 'Expert Team Members' },
  { id: 4, value: 8, suffix: '+', label: 'Years Experience' },
];

export const portfolioCategories = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects', 'UI Design'];

export const projectsData = [
  {
    id: 1,
    title: 'CognitiveDesk - AI Dashboard',
    description: 'A premium corporate SaaS interface with real-time model analysis charts, collaborative workflow nodes, and interactive model testing playgrounds.',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://cognitivedesk.example.com',
    githubUrl: 'https://github.com/uaretech/cognitivedesk',
    color: 'from-brand-secondary to-brand-accent',
  },
  {
    id: 2,
    title: 'SustainaKart - E-Commerce',
    description: 'A fast-loading green shopping application featuring sustainable rating metrics, automated eco-packaging choice paths, and a smooth checkout screen.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://sustainakart.example.com',
    githubUrl: 'https://github.com/uaretech/sustainakart',
    color: 'from-brand-accent to-brand-primary',
  },
  {
    id: 3,
    title: 'PulseFit - Health Tracker',
    description: 'Native mobile app measuring heart rate, sleep quality scores, dietary goals, and community workout challenges with fluid haptic integrations.',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://pulsefit.example.com',
    githubUrl: 'https://github.com/uaretech/pulsefit',
    color: 'from-brand-accent to-brand-secondary',
  },
  {
    id: 4,
    title: 'NeuralDraft - Design System',
    description: 'A comprehensive, pastel-infused Figma design library with dynamic components, glowing dark/light variants, and cross-platform UI guides.',
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://figma.com/uaretech-neuraldraft',
    githubUrl: 'https://github.com/uaretech/neuraldraft',
    color: 'from-brand-primary to-brand-accent',
  },
  {
    id: 5,
    title: 'AeroSync - Fleet Management',
    description: 'Real-time telemetry tracking dashboard mapping cargo planes, weather patterns, pilot fatigue curves, and instant route optimization models.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://aerosync.example.com',
    githubUrl: 'https://github.com/uaretech/aerosync',
    color: 'from-brand-secondary to-brand-primary',
  },
  {
    id: 6,
    title: 'FinGPT - Wealth Advisor',
    description: 'An AI-powered investment tracking application delivering automated market newsletters, portfolio rebalancing models, and automated stock alerts.',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://fingpt.example.com',
    githubUrl: 'https://github.com/uaretech/fingpt',
    color: 'from-brand-secondary to-brand-accent',
  },
];

export const skillsData = [
  { name: 'React / Next.js', percentage: 95, icon: Globe },
  { name: 'Redux Toolkit & State Systems', percentage: 90, icon: Sliders },
  { name: 'Tailwind CSS & Glassmorphism', percentage: 98, icon: Palette },
  { name: 'Node.js & Backend Architecture', percentage: 85, icon: Code2 },
  { name: 'MongoDB / PostgreSQL Databases', percentage: 88, icon: Database },
  { name: 'AI Models & LLM Integration', percentage: 80, icon: Brain },
  { name: 'Cloud Infrastructure (AWS/GCP/Docker)', percentage: 82, icon: Cloud },
];

export const whyChooseUsData = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'We follow robust, agile workflows and modular design patterns to deploy your production-ready platform weeks ahead of standard market times.',
    icon: Zap,
  },
  {
    id: 2,
    title: 'Expert Developers',
    description: 'Our team comprises elite software engineers, cloud architects, and custom AI developers who specialize in writing clean, scalable codebase frameworks.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Modern Technologies',
    description: 'We ignore archaic systems. We build exclusively using cutting-edge architectures like Next.js, Redux Toolkit, Framer Motion, and Tailwind CSS.',
    icon: Cpu,
  },
  {
    id: 4,
    title: 'Scalable Architecture',
    description: 'Every project is engineered with high horizontal scale in mind, ensuring your system handles massive user traffic spikes with absolute ease.',
    icon: Sliders,
  },
  {
    id: 5,
    title: 'Secure Solutions',
    description: 'Data safety is our top priority. We integrate enterprise-grade security protocols, encryption algorithms, and custom pen-testing into every build.',
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: '24/7 Premium Support',
    description: 'We provide permanent engineering support channels, regular site maintenance audits, and instant technical support to assure 99.9% uptime.',
    icon: Clock,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, InnovateSphere',
    text: 'Working with UareTech was an absolute game-changer. They did not just build a website; they created an entire digital experience that increased our lead conversion rate by 140%. Their attention to micro-animations and performance is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'David Vance',
    role: 'CTO, FinPulse Group',
    text: 'The AI integration developed by UareTech revolutionized our customer service. Their engineers built a highly responsive dashboard that hooks cleanly into our legacy databases. Their Redux-powered front-end is responsive and incredibly intuitive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Elana Rostova',
    role: 'Product Director, ZenFlow',
    text: 'We were blown away by the speed of execution and quality of design. UareTech delivered our SaaS prototype two weeks early. The glassmorphism visual styling has earned rave reviews from our primary seed investors. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    name: 'Marcus Brody',
    role: 'Founder, CloudGrid',
    text: 'UareTech literally makes businesses tech-enabled. They took our complex container workloads and simplified the entire cloud orchestration layer. The design elements are incredibly smooth, and their post-launch support has been outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

export const teamData = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Founder & AI Architect',
    bio: 'Ex-Google Research Engineer. Alex leads our strategic AI systems design and helps companies leverage large language models for product transformation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    name: 'Liam Chen',
    role: 'Lead Full-Stack Architect',
    bio: 'A core React framework developer with 9+ years of industry experience. Liam designs highly optimized, scalable cloud configurations.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Head of UI/UX Design',
    bio: 'Passionate about typography, micro-interactions, and premium layouts. Sofia maps out gorgeous user experiences that delight users and drive conversion.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    role: 'DevOps & Infrastructure Lead',
    bio: 'Kubernetes specialist and GCP master. Vikram ensures our enterprise infrastructures are fully automated, securely guarded, and always available.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

export const faqData = [
  {
    id: 1,
    question: 'What does "We make businesses become tech-enabled" actually mean?',
    answer: 'It means we take your current operating paradigms—whether manual, spreadsheet-based, or running on legacy systems—and introduce custom AI automations, scalable SaaS systems, web apps, and modern cloud integrations. We transform your operations to run on cutting-edge systems that drastically reduce overhead and unlock new growth.',
  },
  {
    id: 2,
    question: 'How long does a typical custom web or mobile application development project take?',
    answer: 'Depending on complexity, a prototype is ready in 2 to 4 weeks, with a production launch taking between 6 and 10 weeks. Our modular architectural setup using standard UI packages allows us to launch reliable platforms 30% faster than typical agencies.',
  },
  {
    id: 3,
    question: 'Can you work with our existing backend API and design systems?',
    answer: 'Absolutely. Our engineers are experts at building front-end applications that integrate seamlessly with pre-existing GraphQL, REST APIs, or legacy databases. We can also import or map design tokens from your existing libraries in Figma.',
  },
  {
    id: 4,
    question: 'How do you handle security and data protection in your AI integrations?',
    answer: 'We enforce enterprise security standards, such as role-based access, End-to-End Encryption (E2EE), secure token rotations, and zero-data-retention APIs. When building custom AI models, your business intellectual property and customer queries are never used to train public models.',
  },
  {
    id: 5,
    question: 'Do you offer post-launch support and platform maintenance services?',
    answer: 'Yes! We offer a premium, ongoing maintenance program that includes 24/7 system health monitoring, routine package upgrades, search engine optimization refreshes, and rapid engineering response pipelines for scaling spikes.',
  },
];
