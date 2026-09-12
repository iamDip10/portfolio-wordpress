// ─────────────────────────────────────────────────────────────────────────
// Central content source. Every string here reflects real information
// already present in Dip Saha's portfolio. Nothing here is fabricated —
// no invented clients, metrics, revenue, testimonials or awards.
// ─────────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "WordPress", id: "architecture" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

// Modules orbiting the WordPress Core in the 3D hero system.
export const HERO_MODULES = [
  {
    id: "plugin",
    label: "PLUGIN",
    title: "Custom Plugin Development",
    desc: "Extending WordPress with purpose-built functionality.",
  },
  {
    id: "theme",
    label: "THEME",
    title: "Custom Theme Development",
    desc: "From design system to production-ready WordPress theme.",
  },
  {
    id: "api",
    label: "REST API",
    title: "REST API & Third-Party Integrations",
    desc: "Connecting WordPress to the services a business already runs on.",
  },
  {
    id: "woocommerce",
    label: "WOOCOMMERCE",
    title: "Custom E-commerce Experiences",
    desc: "Checkout flows, product logic and store behaviour, tailored.",
  },
  {
    id: "elementor",
    label: "ELEMENTOR",
    title: "Advanced Elementor Customization",
    desc: "Custom widgets, dynamic content and page-builder extensions.",
  },
  {
    id: "gutenberg",
    label: "GUTENBERG",
    title: "Block & Full Site Editing",
    desc: "Custom blocks and full-site-editing templates built for editors.",
  },
  {
    id: "database",
    label: "DATABASE",
    title: "WordPress Data & Database Engineering",
    desc: "Custom schemas, queries and data structures beyond post meta.",
  },
  {
    id: "php",
    label: "PHP",
    title: "Core PHP Engineering",
    desc: "Hooks, filters and server-side logic written the WordPress way.",
  },
];

export const CAPABILITY_STRIP = [
  "CUSTOM PLUGINS",
  "CUSTOM THEMES",
  "WORDPRESS DEVELOPMENT",
  "WOOCOMMERCE",
  "ELEMENTOR",
  "GUTENBERG",
  "API INTEGRATIONS",
  "PERFORMANCE",
];

export const WHAT_I_BUILD = [
  {
    n: "01",
    title: "Custom Plugins",
    desc: "Purpose-built functionality for requirements that off-the-shelf plugins cannot solve.",
    pipeline: ["Hooks", "Filters", "Admin UI", "Custom Logic", "Database", "API"],
  },
  {
    n: "02",
    title: "Custom Themes",
    desc: "From design system to production-ready WordPress theme.",
    pipeline: ["Design", "Components", "WordPress", "Production"],
  },
  {
    n: "03",
    title: "Complete Websites",
    desc: "End-to-end WordPress websites designed, developed and optimized for production.",
    pipeline: ["Design", "Frontend", "WordPress", "Content", "Integrations", "Deployment"],
  },
  {
    n: "04",
    title: "Deep Customization",
    desc: "Extending existing themes, plugins and WordPress functionality beyond their default capabilities.",
    pipeline: ["Analyze", "Extend", "Customize", "Integrate", "Optimize"],
  },
  {
    n: "05",
    title: "WooCommerce",
    desc: "Custom e-commerce experiences, workflows, integrations and functionality.",
    pipeline: ["Catalog", "Checkout", "Payments", "Fulfilment", "Reporting"],
  },
  {
    n: "06",
    title: "Integrations",
    desc: "Connecting WordPress with external APIs, services, payment systems and business workflows.",
    pipeline: ["Auth", "Endpoints", "Webhooks", "Sync", "Monitoring"],
  },
];

// Layered WordPress engineering architecture, core outward.
export const ARCHITECTURE_LAYERS = [
  { label: "WORDPRESS CORE", detail: "The system every layer above is built on." },
  { label: "PHP", detail: "Server-side logic, hooks, actions and filters." },
  { label: "PLUGINS", detail: "Custom functionality that doesn't exist off the shelf." },
  { label: "THEMES", detail: "Presentation layer, built for editors and production." },
  { label: "REST API", detail: "Structured access in and out of WordPress." },
  { label: "DATABASE", detail: "Custom post types, taxonomies, fields and schemas." },
  { label: "FRONTEND", detail: "JavaScript and React where the interface needs it." },
  { label: "EXTERNAL SERVICES", detail: "Payments, CRMs and third-party platforms, connected." },
];

export const ECOSYSTEM = [
  { category: "CORE", items: ["WordPress", "PHP", "MySQL"] },
  { category: "DEVELOPMENT", items: ["JavaScript", "React", "REST API"] },
  { category: "BUILDING", items: ["Custom Themes", "Custom Plugins", "Gutenberg", "Elementor"] },
  { category: "E-COMMERCE", items: ["WooCommerce", "Payments", "Subscriptions"] },
  { category: "INFRASTRUCTURE", items: ["Git", "Linux", "Deployment", "Performance"] },
];

export const PLUGIN_PIPELINE = [
  { stage: "Requirements", note: "What the site actually needs to do." },
  { stage: "Architecture", note: "Where the logic lives, and how it's structured." },
  { stage: "Hooks & Filters", note: "Wiring into WordPress the right way." },
  { stage: "Custom Logic", note: "The functionality itself, written in PHP." },
  { stage: "Admin Interface", note: "A settings screen a client can actually use." },
  { stage: "Database", note: "Custom tables or post meta, whichever fits." },
  { stage: "API", note: "Exposing or consuming data where needed." },
  { stage: "Testing", note: "Checked against real WordPress environments." },
  { stage: "Production", note: "Shipped, documented, and maintained." },
];

export const CODE_FRAGMENTS = [
  "add_action( 'init', 'register_custom_post_type' );",
  "add_filter( 'the_content', 'extend_content_output' );",
  "register_rest_route( 'app/v1', '/status', [...] );",
  "wp_enqueue_script( 'app-admin', ..., true );",
];

export const CUSTOMIZATION_PAIRS = [
  { before: "Default Dashboard", after: "Custom Dashboard" },
  { before: "Default Workflow", after: "Custom Workflow" },
  { before: "Generic Plugin", after: "Customized Plugin" },
  { before: "Standard Checkout", after: "Custom Checkout" },
  { before: "Basic Content", after: "Structured Content System" },
];

export const WEBSITE_PIPELINE = [
  { stage: "IDEA", detail: "Understanding what the business actually needs a website to do." },
  { stage: "STRUCTURE", detail: "Information architecture, content model, and site map." },
  { stage: "UI/UX", detail: "Design that fits the brand and the way people will use it." },
  { stage: "WORDPRESS", detail: "Turning the design into a real, editable WordPress build." },
  { stage: "CUSTOM DEVELOPMENT", detail: "Plugins and theme logic for anything off-the-shelf can't do." },
  { stage: "INTEGRATIONS", detail: "Connecting payments, CRMs, and third-party APIs." },
  { stage: "PERFORMANCE", detail: "Caching, query optimization, and load-time tuning." },
  { stage: "DEPLOYMENT", detail: "Shipped to production and handed over, documented." },
];

// "Things I can make WordPress do" — capability modules.
export const CAPABILITY_MODULES = [
  { title: "Custom Plugins", desc: "Purpose-built functionality, from scratch." },
  { title: "Custom Admin Panels", desc: "Settings screens built for how a client actually works." },
  { title: "Custom Post Types", desc: "Structured content beyond posts and pages." },
  { title: "Custom Taxonomies", desc: "Organizing content the way the business thinks about it." },
  { title: "Custom Fields", desc: "Structured data attached to any content type." },
  { title: "Custom Workflows", desc: "Approval flows, statuses, and internal processes." },
  { title: "Custom User Roles", desc: "Permissions scoped to what each user should touch." },
  { title: "API Integrations", desc: "WordPress talking to the tools a business already uses." },
  { title: "WooCommerce Customization", desc: "Checkout, catalog and order logic, tailored." },
  { title: "Elementor Customization", desc: "Custom widgets and dynamic content for page builders." },
  { title: "Gutenberg Blocks", desc: "Editor-friendly blocks built for real content teams." },
  { title: "Performance Optimization", desc: "Faster queries, faster pages, fewer bottlenecks." },
  { title: "Database Customization", desc: "Schemas and queries shaped around real data needs." },
  { title: "Third-Party Integrations", desc: "Payments, CRMs, mapping, and messaging platforms." },
];

// Real projects — preserved from the existing portfolio content.
export const PROJECTS = [
  {
    name: "TogglePilot — Admin Module Manager",
    tagline: "Real-Time WordPress Extension Management & Troubleshooting",
    description:
      "A lightweight WordPress tool for quickly managing extensions directly from the admin bar.",
    tech: ["WordPress", "PHP", "JavaScript", "AJAX", "WordPress REST/Admin APIs", "CSS"],
    role: "Built a custom WordPress admin-bar interface for instantly activating and deactivating extensions.",
    features: [
      "Real-time AJAX-based extension switching without visiting the Plugins page.",
      "A Troubleshooting Mode that temporarily disables selected extensions and restores their exact previous state.",
      "Client-side search and grouping for quickly finding active and inactive extensions.",
    ],
    color: "#1e40af",
    github: "https://github.com/iamDip10/quick-extensions-switcher.git",
    demo: "https://wordpress.org/plugins/togglepilot-admin-module-manager/",
    demoLabel: "View on WordPress.org",
    comingSoon: false,
    category: "WordPress Plugin",
  },
  {
    name: "WP Support Monitor",
    tagline: "Real-Time WordPress Support Forum Tracker",
    description:
      "A Chrome Extension built to monitor WordPress.org support forums in real time — tracking new tickets and customer replies awaiting response.",
    tech: ["JavaScript", "Chrome Extensions", "Manifest V3", "Chrome Alarms API", "Chrome Notifications API"],
    role: "Built for real-world WordPress support workflows, where response time matters.",
    features: [
      "Real-time WordPress forum monitoring.",
      "Smart detection of pending support requests, with duplicate-free notifications.",
      "A live support queue with unread tracking and persistent local storage.",
    ],
    color: "#c2410c",
    github: "https://github.com/iamDip10/wordpress-support-tickets",
    demo: "",
    demoLabel: "",
    comingSoon: false,
    category: "WordPress Ecosystem Tool",
  },
  {
    name: "RentMate",
    tagline: "Rental Management Platform",
    description:
      "A full-featured rental management platform enabling landlords and tenants to manage properties, payments, and maintenance requests seamlessly. Integrates OpenStreetMap for location-based property discovery.",
    tech: ["Django", "Tailwind CSS", "MySQL", "OpenStreetMap API"],
    role: "Designed and built the platform end-to-end.",
    features: [
      "Property listing & search with map integration.",
      "Tenant & landlord dashboards.",
      "Automated rent tracking & invoicing, and a maintenance request workflow.",
    ],
    color: "#1e40af",
    github: "https://github.com/iamDip10/Rentmate",
    demo: "",
    demoLabel: "",
    comingSoon: false,
    category: "Full-Stack Platform",
  },
  {
    name: "Idol Builders",
    tagline: "Future-Ready Real Estate Solutions",
    description:
      "A modern, futuristic real-estate platform designed with premium UI/UX, interactive experiences, and responsive, performance-focused architecture for a seamless digital property showcase, built for a client.",
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    role: "Designed and developed the site for a client, from UI to deployment.",
    features: [
      "Responsive, interactive UI with smooth animations and premium UX.",
      "Dynamic property showcase sections with a modern glassmorphism design.",
      "Optimized for performance, mobile responsiveness and professional branding.",
    ],
    color: "#1e40af",
    github: "https://github.com/iamDip10/idol-builders",
    demo: "https://www.idolbuilders.com/",
    demoLabel: "View Live Site",
    comingSoon: false,
    category: "Client Website",
  },
  {
    name: "SupportDesk",
    tagline: "Customer Support Ticketing System",
    description:
      "A scalable, async-first ticketing system built for high-volume customer support operations. Features real-time updates via Celery/Redis, priority queuing, and SLA tracking.",
    tech: ["Django", "PostgreSQL", "Redis", "Celery"],
    role: "In active development.",
    features: [
      "Async task processing with Celery.",
      "Real-time ticket status updates.",
      "Priority queuing & SLA tracking, with agent performance analytics.",
    ],
    color: "#57534e",
    github: "https://github.com/dipsaha",
    demo: "",
    demoLabel: "",
    comingSoon: true,
    category: "In Progress",
  },
];

export const EXPERIENCE = [
  {
    role: "Associate Specialist, Tech Support",
    company: "Ollyo",
    period: "2024 – Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Provided advanced technical support for high-traffic web applications and production systems.",
      "Diagnosed and resolved issues related to product workflows, plugin conflicts, and server-side behavior.",
      "Collaborated closely with software engineers to reproduce bugs, investigate root causes, and improve system reliability.",
      "Gained hands-on exposure to production debugging and software maintenance practices.",
      "Assisted clients with feature configurations, troubleshooting, and deployment-related issues.",
      "Developed strong asynchronous communication and problem-solving skills in a remote collaboration environment.",
    ],
  },
  {
    role: "Content Writer (Intern)",
    company: "Youth School for Social Entrepreneurs (YSSE)",
    period: "March 2023 – July 2023",
    location: "Dhaka, Bangladesh",
    points: [
      "Wrote and optimized blogs, reports, newsletters, and digital content.",
      "Improved SEO performance and content engagement across multiple platforms.",
      "Recognized as 'Intern of the Month' and 'Spotlight of the Month'.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "United International University (Bangladesh)",
    period: "2020 – 2025",
    detail:
      "Awarded full scholarships 4 times, half scholarships 6 times, and 25% scholarships in almost every trimester based on academic performance.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Dhaka College",
    period: "2017 – 2019",
    detail: "Achieved GPA-5 with an average score of 85% in the board examination.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Ideal School and College",
    period: "2017",
    detail: "Achieved GPA-5 with an average score of 91% in the board examination.",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "saha.dipofficial171@gmail.com",
    href: "mailto:saha.dipofficial171@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dip-saha-5b87a9207",
    href: "https://www.linkedin.com/in/dip-saha-5b87a9207/",
  },
  {
    label: "GitHub",
    value: "github.com/iamDip10",
    href: "https://github.com/iamDip10/",
  },
];
