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
    title: 'Web Engineering',
    description: 'Scalable, high-performance web architectures using React, Next.js, and modern cloud technologies.',
    icon: Code2,
    categories: ['Development'],
    color: 'from-brand-secondary to-brand-accent'
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Robust native and cross-platform mobile solutions for Android & iOS, optimized for user engagement.',
    icon: Smartphone,
    categories: ['Development'],
    color: 'from-brand-accent to-brand-primary'
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with Shopify, WooCommerce, or custom builds — payments, inventory, and UPI integration included.',
    icon: Globe,
    categories: ['Development'],
    color: 'from-brand-accent to-brand-secondary'
  },
  {
    id: 4,
    title: 'SaaS Product Development',
    description: 'Build subscription-based software products — queue systems, booking platforms, management dashboards — ready for scale.',
    icon: Database,
    categories: ['Development'],
    color: 'from-brand-secondary to-brand-primary'
  },
  {
    id: 5,
    title: 'AI Chatbot Development',
    description: 'Custom GPT/Gemini-powered chatbots for websites & WhatsApp that handle 80% of customer queries autonomously. Multi-language support.',
    icon: Brain,
    categories: ['AI & Automation'],
    color: 'from-brand-secondary to-brand-accent'
  },
  {
    id: 6,
    title: 'WhatsApp Automation',
    description: 'Automated order updates, broadcast campaigns, chatbots, abandoned cart recovery, and multi-agent inbox — all via WhatsApp Business API.',
    icon: Sliders,
    categories: ['AI & Automation'],
    color: 'from-brand-primary to-brand-accent'
  },
  {
    id: 7,
    title: 'Workflow Automation',
    description: 'Connect your tools with n8n, Make, or Zapier — auto-capture leads, sync invoices, post on social media, and eliminate manual work.',
    icon: Zap,
    categories: ['AI & Automation'],
    color: 'from-brand-accent to-brand-primary'
  },
  {
    id: 8,
    title: 'CRM & Sales Automation',
    description: 'Setup & customize Zoho, HubSpot, or custom CRM pipelines with automated lead scoring, follow-ups, and sales reporting.',
    icon: Sliders,
    categories: ['AI & Automation'],
    color: 'from-brand-accent to-brand-secondary'
  },
  {
    id: 10,
    title: 'Meta Ads Management',
    description: 'Full-funnel Facebook & Instagram ad campaigns — Advantage+ setup, creative strategy, A/B testing, and conversion tracking with ROI reports.',
    icon: Megaphone,
    categories: ['Marketing'],
    color: 'from-brand-secondary to-brand-accent'
  },
  {
    id: 11,
    title: 'Google Ads & PPC',
    description: 'High-intent search & display campaigns, YouTube ads, Google My Business optimization, and call tracking for local businesses.',
    icon: Megaphone,
    categories: ['Marketing'],
    color: 'from-brand-primary to-brand-accent'
  },
  {
    id: 12,
    title: 'SEO & Digital Growth',
    description: 'Data-led SEO engineering, content strategy, voice search optimization, and hyper-local presence management that drives organic growth.',
    icon: Globe,
    categories: ['Marketing'],
    color: 'from-brand-accent to-brand-primary'
  },
  {
    id: 13,
    title: 'AI Content Generation',
    description: 'AI-powered social media calendars, blog writing, video scripts, and creative generation — trained on your brand voice for consistent output.',
    icon: Brain,
    categories: ['Marketing'],
    color: 'from-brand-accent to-brand-secondary'
  },
  {
    id: 14,
    title: 'Product Design (UI/UX)',
    description: 'Strategic UI/UX that blends aesthetic excellence with conversion-driven user psychological patterns.',
    icon: Palette,
    categories: ['Design & Branding'],
    color: 'from-brand-secondary to-brand-primary'
  },
  {
    id: 15,
    title: 'Brand Architecture',
    description: 'Professional visual identities and technical branding systems that project authority and trust in your niche.',
    icon: Palette,
    categories: ['Design & Branding'],
    color: 'from-brand-secondary to-brand-accent'
  },
  {
    id: 16,
    title: 'Video Production',
    description: 'Professional-grade editing and visual storytelling for high-impact Reels, YouTube content, and commercial media.',
    icon: Palette,
    categories: ['Design & Branding'],
    color: 'from-brand-primary to-brand-accent'
  },
  {
    id: 17,
    title: 'Analytics Dashboards',
    description: 'Custom business intelligence dashboards — track sales, customer behavior, social media, and inventory with automated daily reports.',
    icon: Database,
    categories: ['Tech Solutions'],
    color: 'from-brand-accent to-brand-primary'
  },
  {
    id: 18,
    title: 'Cloud & IT Setup',
    description: 'Google Workspace, Microsoft 365, cloud hosting, domain management, professional email, and automated backup systems.',
    icon: Cloud,
    categories: ['Tech Solutions'],
    color: 'from-brand-accent to-brand-secondary'
  },
  {
    id: 19,
    title: 'Cybersecurity',
    description: 'Website security audits, SSL management, data backup & disaster recovery, and employee security awareness training.',
    icon: ShieldCheck,
    categories: ['Tech Solutions'],
    color: 'from-brand-secondary to-brand-primary'
  }
];

export const portfolioCategories = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects', 'UI Design'];

export const projectsData = [
  {
    id: 1,
    title: 'CognitiveDesk - AI Dashboard',
    description: 'A premium corporate SaaS interface with real-time model analysis charts, collaborative workflow nodes, and interactive model testing playgrounds.',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://cognitivedesk.example.com',
    githubUrl: 'https://github.com/uaretech/cognitivedesk',
    color: 'from-brand-secondary to-brand-accent',
  },
  {
    id: 2,
    title: 'SustainaKart - E-Commerce',
    description: 'A fast-loading green shopping application featuring sustainable rating metrics, automated eco-packaging choice paths, and a smooth checkout screen.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://sustainakart.example.com',
    githubUrl: 'https://github.com/uaretech/sustainakart',
    color: 'from-brand-accent to-brand-primary',
  },
  {
    id: 3,
    title: 'PulseFit - Health Tracker',
    description: 'Native mobile app measuring heart rate, sleep quality scores, dietary goals, and community workout challenges with fluid haptic integrations.',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://pulsefit.example.com',
    githubUrl: 'https://github.com/uaretech/pulsefit',
    color: 'from-brand-accent to-brand-secondary',
  },
  {
    id: 4,
    title: 'NeuralDraft - Design System',
    description: 'A comprehensive, pastel-infused Figma design library with dynamic components, glowing dark/light variants, and cross-platform UI guides.',
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://figma.com/uaretech-neuraldraft',
    githubUrl: 'https://github.com/uaretech/neuraldraft',
    color: 'from-brand-primary to-brand-accent',
  },
  {
    id: 5,
    title: 'AeroSync - Fleet Management',
    description: 'Real-time telemetry tracking dashboard mapping cargo planes, weather patterns, pilot fatigue curves, and instant route optimization models.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://aerosync.example.com',
    githubUrl: 'https://github.com/uaretech/aerosync',
    color: 'from-brand-secondary to-brand-primary',
  },
  {
    id: 6,
    title: 'FinGPT - Wealth Advisor',
    description: 'An AI-powered investment tracking application delivering automated market newsletters, portfolio rebalancing models, and automated stock alerts.',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=70',
    demoUrl: 'https://fingpt.example.com',
    githubUrl: 'https://github.com/uaretech/fingpt',
    color: 'from-brand-secondary to-brand-accent',
  },
];

export const whyChooseUsData = [
  {
    id: 1,
    title: 'Business-First Approach',
    description: 'We align custom technology solutions directly with your commercial goals, ensuring every build maps directly to user growth and ROI.',
    icon: Sliders,
  },
  {
    id: 2,
    title: 'AI-Powered Solutions',
    description: 'We integrate fine-tuned generative AI workflows, custom LLM pipelines, and automated intelligence to scale operations effortlessly.',
    icon: Brain,
  },
  {
    id: 3,
    title: 'Faster Delivery',
    description: 'Our highly optimized modular component blueprints and agile methodologies allow us to deploy production builds 30% faster.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Scalable Architecture',
    description: 'Every codebase is built on robust horizontal scaling configurations that handle massive traffic rushes without break points.',
    icon: Sliders,
  },
  {
    id: 5,
    title: 'Transparent Communication',
    description: 'No jargon or black boxes. We maintain clear product roadmap visibility, structured Slack communication, and daily logs.',
    icon: Clock,
  },
  {
    id: 6,
    title: 'Long-Term Technical Support',
    description: 'We offer permanent premium support channels, monthly cloud optimization audits, and responsive emergency hotlines.',
    icon: ShieldCheck,
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, InnovateSphere',
    text: 'Working with UareTech was an absolute game-changer. They did not just build a website; they created an entire digital experience that increased our lead conversion rate by 140%. Their attention to micro-animations and performance is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=70',
  },
  {
    id: 2,
    name: 'David Vance',
    role: 'CTO, FinPulse Group',
    text: 'The AI integration developed by UareTech revolutionized our customer service. Their engineers built a highly responsive dashboard that hooks cleanly into our legacy databases. Their Redux-powered front-end is responsive and incredibly intuitive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=70',
  },
  {
    id: 3,
    name: 'Elana Rostova',
    role: 'Product Director, ZenFlow',
    text: 'We were blown away by the speed of execution and quality of design. UareTech delivered our SaaS prototype two weeks early. The glassmorphism visual styling has earned rave reviews from our primary seed investors. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=70',
  },
  {
    id: 4,
    name: 'Marcus Brody',
    role: 'Founder, CloudGrid',
    text: 'UareTech literally makes businesses tech-enabled. They took our complex container workloads and simplified the entire cloud orchestration layer. The design elements are incredibly smooth, and their post-launch support has been outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=70',
  },
];

export const faqData = [
  {
    id: 1,
    question: 'What exactly do you build — and who is it for?',
    answer: 'We build custom web apps, mobile apps, AI tools, and cloud infrastructure for startups, SMEs, and growing businesses. If you have an idea or an existing product that needs work, we can help.',
  },
  {
    id: 2,
    question: 'How long will my project take to build?',
    answer: "A simple web app or MVP typically takes 4–8 weeks. A full product with mobile and backend can take 8–16 weeks. We'll give you a clear timeline before we start — and we stick to it.",
  },
  {
    id: 3,
    question: 'Can you work with what we already have?',
    answer: "Yes. We regularly integrate with existing codebases, APIs, and design systems. You don't need to start from scratch — we can build on what you already have and improve it as we go.",
  },
  {
    id: 4,
    question: 'How do you keep our data and users safe?',
    answer: 'Security is standard in everything we build — JWT authentication, encrypted storage, HTTPS, OWASP guidelines, and regular code audits. For AI projects, we ensure no sensitive data is exposed to third-party models without your explicit approval.',
  },
  {
    id: 5,
    question: 'What happens after my product launches?',
    answer: 'We offer monthly maintenance plans that cover bug fixes, performance monitoring, security patches, and feature updates. You get a dedicated point of contact — not a support ticket queue.',
  },
];
