import rapidMind8 from '../assets/previews/rapidmind-8.webp';
import rapidMind10 from '../assets/previews/rapidmind-10.webp';
import rapidMind11 from '../assets/previews/rapidmind-11.webp';
import rapidMind12 from '../assets/previews/rapidmind-12.webp';
import rapidMind13 from '../assets/previews/rapidmind-13.webp';
import nomCherryCatalog from '../assets/previews/nomcherry-catalog-1440.png';
import nomCherryReports from '../assets/previews/nomcherry-reports-1440.png';
import nomCherryLogin from '../assets/previews/nomcherry-login-1440.png';
import betterLifeDashboard from '../assets/previews/better-life-dashboard.webp';
import betterLifeJournal from '../assets/previews/better-life-journal.webp';
import betterLifeMealLog from '../assets/previews/better-life-meal-log.webp';
import betterLifeRecipes from '../assets/previews/better-life-recipes.webp';
import betterLifeInsights from '../assets/previews/better-life-insights.webp';
import betterLifeAssistant from '../assets/previews/better-life-assistant.webp';
import betterLifeProfile from '../assets/previews/better-life-profile.webp';
import camHubDashboard from '../assets/previews/camhub-dashboard.webp';
import camHubLive from '../assets/previews/camhub-live.webp';
import camHubPlayback from '../assets/previews/camhub-playback.webp';
import camHubEvents from '../assets/previews/camhub-events.webp';
import { Project, ProjectFilter } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'better-life',
    name: 'Better Life',
    featured: true,
    category: 'Full-stack mobile app',
    filter: 'mobile',
    context: 'Full-stack project',
    accent: '#1E3A2F',
    summary: 'A health and nutrition app that estimates daily calorie needs — React Native on the front, an Express + TypeScript API and PostgreSQL behind it.',
    overview: [
      'Better Life is a mobile application focused on health, nutrition, and calorie management. The idea is an app ecosystem that helps people understand their energy needs and keep track of nutrition-related information.',
      'The project goes beyond screens: it covers how data moves between the mobile app and the backend, how user information is managed, and how the calculations behind each feature are implemented.',
    ],
    problem: "Knowing how much energy your body needs each day isn't obvious. People need a simple way to estimate calorie needs from their own data and keep nutrition information in one place.",
    goal: 'Build a mobile app, backed by its own API and database, that turns user input into a calorie-needs estimate and manages nutrition-related data.',
    architecture: [
      { label: 'Mobile app', detail: 'React Native · Expo' },
      { label: 'REST API', detail: 'Express · TypeScript' },
      { label: 'Database', detail: 'PostgreSQL · Drizzle ORM' },
    ],
    stack: ['React Native', 'Expo', 'Express', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
    features: [
      {
        title: 'Implementation areas',
        items: [
          'Mobile client built with React Native and Expo',
          'Backend API written in Express with TypeScript',
          'Data stored in PostgreSQL and accessed through Drizzle ORM',
          'Metabolism and calorie-needs estimation using the Mifflin–St Jeor equation',
          'Interface and user-experience development for the mobile app',
          'Integration between the mobile app, the API, and the database',
        ],
      },
    ],
    takeaways: [
      'End-to-end flow: how a mobile client communicates with a backend API and database',
      'Modeling and persisting application data through an ORM',
      'Turning a published formula into product logic',
    ],
    links: [
      { label: 'View repository', url: 'https://github.com/Daff77/better-life', kind: 'repo' },
    ],
    media: [
      { src: betterLifeDashboard, alt: 'Better Life · Daily dashboard', caption: 'Daily dashboard' },
      { src: betterLifeJournal, alt: 'Better Life · Energy, macros and daily journal', caption: 'Energy, macros and daily journal' },
      { src: betterLifeMealLog, alt: 'Better Life · Meal logging', caption: 'Meal logging' },
      { src: betterLifeRecipes, alt: 'Better Life · Recipe catalog', caption: 'Recipe catalog' },
      { src: betterLifeInsights, alt: 'Better Life · Nutrition tools and meal inspiration', caption: 'Nutrition tools and meal inspiration' },
      { src: betterLifeAssistant, alt: 'Better Life AI assistant suggesting meals for a Rp 20,000 daily budget', caption: 'AI assistant for budget-friendly meals' },
      { src: betterLifeProfile, alt: 'Better Life · Profile and nutrition targets', caption: 'Profile and nutrition targets' },
    ],
  },
  {
    id: 'rapidmind',
    name: 'RapidMind',
    featured: true,
    category: 'Web app · Social impact',
    filter: 'web',
    context: 'Competition project · WYIIA/IYSA',
    stage: 'Concept',
    accent: '#1E2A3A',
    summary: 'A web-based concept for emergency psychological triage support — helping disaster volunteers record and organize initial assessments.',
    overview: [
      "RapidMind is a web-based system concept designed to support initial psychological triage in emergencies and disaster-affected areas. It's built around the needs of volunteers who have to record and assess people's conditions in a more structured way.",
      'In a disaster, volunteers may meet many people with very different conditions and needs. RapidMind explores a digital approach to collecting initial information, managing that data, and supporting the triage process.',
    ],
    problem: 'Field volunteers need to capture initial information quickly and consistently, often on mobile devices and in difficult conditions — and ad-hoc notes are hard to organize afterwards.',
    goal: 'Give volunteers a structured, mobile-friendly recording flow, and give coordinators one place to review the data that comes in.',
    architecture: [
      { label: 'Volunteer interface', detail: 'Mobile-first web' },
      { label: 'Admin dashboard', detail: 'Data monitoring' },
      { label: 'AI/ML module', detail: 'Exploratory' },
    ],
    stack: ['Laravel', 'Vue', 'TypeScript', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL + PostGIS', 'Dexie.js', 'Whisper (Transformers.js)'],
    features: [
      {
        title: 'Planned system components',
        note: 'Component scope from the project concept; implementation status is still being documented.',
        items: [
          'Volunteer interface — a responsive, mobile-first recording flow, with voice input as an alternative way to fill in data',
          'Admin dashboard — managing and monitoring incoming information',
          'AI/ML module — exploring how intelligent features could support the system',
          'Multilingual interface — Indonesian and English, with consistent translations',
        ],
      },
    ],
    workAreas: {
      title: 'Interface work explored',
      items: [
        'Evaluating the design and refining interface layouts',
        'Auditing English-language consistency across application pages',
        "Finding UI sections that didn't follow the layout system",
        'Polishing the interface to be more consistent and easier to use',
        'Considering GPS/location data needs for use in the field',
      ],
    },
    takeaways: [
      'Designing for a specific user and context — volunteers in the field',
      'Combining interface design, operational needs, data management, and AI/ML exploration in one system',
    ],
    scopeNote: 'RapidMind is a triage-support concept, not a diagnostic tool, and it is not a substitute for mental health professionals.',
    links: [],
    media: [
      {
        src: rapidMind8,
        alt: 'RapidMind verbal and adaptive non-verbal screening modes',
        caption: 'Verbal and adaptive non-verbal modes',
      },
      { src: rapidMind10, alt: 'RapidMind prototype assessment flow', caption: 'Prototype assessment flow' },
      { src: rapidMind11, alt: 'RapidMind assessment review and triage recommendation', caption: 'Assessment review and triage recommendation' },
      { src: rapidMind12, alt: 'RapidMind T0 emergency verification flow', caption: 'T0 emergency verification' },
      { src: rapidMind13, alt: 'RapidMind healthcare dashboard for triage management', caption: 'Healthcare triage dashboard' },
    ],
  },
  {
    id: 'camhub',
    name: 'CamHUB',
    featured: true,
    category: 'Backend & systems integration',
    filter: 'systems',
    context: 'Exploration project',
    stage: 'Exploration',
    accent: '#26282B',
    summary: 'A camera-service manager exploring one-click startup, a Python process manager, and port-based service monitoring.',
    overview: [
      'CamHUB is an exploration into managing camera and video services. The focus is simplifying how several camera services are started through a single control flow, and providing a way to check the status of the services that are running.',
      'It explores how a management app, backend processes, camera services, and network ports relate to each other — with the technical goal of removing the need to start every component by hand.',
    ],
    problem: "Running several camera and streaming services means starting each component manually and guessing whether it's actually up.",
    goal: 'Control multiple camera services from one place and see their status at a glance.',
    architecture: [
      { label: 'One-click control' },
      { label: 'Process manager', detail: 'server.py · Python' },
      { label: 'Internal REST API', detail: '/api/services/*' },
      { label: 'Camera services', detail: 'Ports 8080–8082' },
    ],
    stack: ['Python', 'REST API', 'Windows process management', 'V380Decoder-Fork', '.NET (dotnet run)'],
    features: [
      {
        title: 'Capabilities explored',
        items: [
          'One-Click Run All — starting several camera services at once',
          'Process-manager backend in server.py that manages child processes on Windows',
          'Internal REST API grouped under /api/services/* for checking and managing services',
          'Port-based service monitoring (8080, 8081, and 8082 in the tested configuration)',
          'Process lifecycle — starting and stopping services',
          'Configuration files that define the services',
          'Integration with a camera decoder and streaming services, including port 8554',
        ],
      },
    ],
    takeaways: [
      'Managing application processes and their lifecycle',
      'Communication between services and integration of external components',
      'Automating operational steps that used to be manual',
    ],
    scopeNote: 'An exploration project — not every feature is production-ready.',
    links: [],
    media: [
      { src: camHubDashboard, alt: 'CamHUB · Camera health and stream performance', caption: 'Camera health and stream performance' },
      { src: camHubLive, alt: 'CamHUB · Live view and multi-lens camera controls', caption: 'Live view and multi-lens camera controls' },
      { src: camHubPlayback, alt: 'CamHUB · Recording playback and local archive', caption: 'Recording playback and local archive' },
      { src: camHubEvents, alt: 'CamHUB · Motion and AI detection events', caption: 'Motion and AI detection events' },
    ],
  },
  {
    id: 'pos-cafe',
    name: 'NomCherry Café POS',
    featured: true,
    category: 'Web application',
    filter: 'web',
    context: 'Point of sale and inventory',
    accent: '#3A2F24',
    summary: 'A web-based point of sale for café checkout, multi-branch inventory, and sales reporting.',
    overview: [
      'NomCherry Café POS brings checkout, product management, stock tracking, and sales reports into one browser-based application.',
      'A point-of-sale system has to keep products, transactions, and stock consistent with each other — which made this project a practical way to understand how a desktop interface, business logic, and data storage fit together.',
    ],
    problem: 'Café operations need sales, product data, and stock levels recorded consistently and easy to access.',
    goal: 'Combine transaction recording and inventory management in one desktop application with a relational database behind it.',
    architecture: [
      { label: 'Browser interface', detail: 'HTML, CSS, JavaScript' },
      { label: 'Application server', detail: 'Node.js and Express' },
      { label: 'Database', detail: 'SQLite' },
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'SQLite'],
    features: [
      {
        title: 'System functions',
        items: [
          'Product data management',
          'Sales transaction recording',
          'Multi-branch stock and inventory management',
          'Sales reports and analytics',
          'Role-based access for café staff',
        ],
      },
    ],
    takeaways: [
      'Keeping stock consistent when orders are placed or canceled',
      'Relational database design and integration',
      'Building software around operational needs',
    ],
    links: [
      { label: 'View repository', url: 'https://github.com/Daff77/ProjekCafePBO', kind: 'repo' },
    ],
    media: [
      {
        src: nomCherryCatalog,
        alt: 'NomCherry Café product catalog in the web app',
        caption: 'Product catalog',
      },
      {
        src: nomCherryReports,
        alt: 'NomCherry Café sales reports in the web app',
        caption: 'Sales reporting',
      },
      { src: nomCherryLogin, alt: 'NomCherry Café web sign-in page', caption: 'Staff sign-in' },
    ],
  },
  {
    id: 'cifar10-cnn-svm',
    name: 'CNN + SVM on CIFAR-10',
    featured: false,
    category: 'Machine learning · Computer vision',
    filter: 'ml',
    context: 'Learning experiment',
    stage: 'Learning project',
    accent: '#232B30',
    summary: 'Image classification on CIFAR-10, exploring a CNN and an SVM and comparing the two approaches.',
    overview: [
      'An exploration of image classification on the CIFAR-10 dataset using CNN and SVM approaches — a hands-on way to understand computer-vision basics, image feature representation, model training, and classification evaluation.',
    ],
    architecture: [
      { label: 'CIFAR-10', detail: 'Image dataset' },
      { label: 'CNN' },
      { label: 'SVM', detail: 'Comparison' },
    ],
    stack: ['Python', 'CNN', 'SVM'],
    features: [
      {
        title: 'What I explored',
        items: [
          'Understanding the CIFAR-10 dataset',
          'Image data preprocessing',
          'Convolutional Neural Networks',
          'Support Vector Machines',
          'Comparing classification approaches',
          'Evaluating model performance',
        ],
      },
    ],
    scopeNote: 'A learning experiment — accuracy figures will be added only once results are documented.',
    links: [],
    media: [],
  },
  {
    id: 'iris-decision-tree',
    name: 'Decision Tree on Iris',
    featured: false,
    category: 'Machine learning · Classification',
    filter: 'ml',
    context: 'Learning experiment',
    stage: 'Learning project',
    accent: '#2A2E26',
    summary: 'A classic classification workflow — preprocessing, train/test split, a Decision Tree, and hyperparameter search with GridSearchCV.',
    overview: [
      'A classification experiment using the Iris dataset and a Decision Tree classifier, covering the core machine-learning workflow from preprocessing and data splitting to training and evaluation.',
    ],
    architecture: [
      { label: 'Iris dataset' },
      { label: 'Preprocessing', detail: 'StandardScaler' },
      { label: 'Decision Tree', detail: 'GridSearchCV' },
    ],
    stack: ['Python', 'Scikit-learn'],
    features: [
      {
        title: 'What I explored',
        items: [
          'Working with the Iris dataset',
          'Data preprocessing with StandardScaler',
          'Splitting training and testing data',
          'Decision Tree Classifier',
          'Evaluating accuracy',
          'Hyperparameter search with GridSearchCV',
          'Linear Discriminant Analysis (LDA) as part of the learning process',
        ],
      },
    ],
    links: [],
    media: [],
  },
];

export const PROJECT_FILTERS: { id: 'all' | ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'systems', label: 'Systems & media' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'ml', label: 'Machine learning' },
];

export const getProject = (id?: string) => PROJECTS.find((p) => p.id === id);
export const FEATURED = PROJECTS.filter((p) => p.featured);
export const EXPERIMENTS = PROJECTS.filter((p) => !p.featured);
