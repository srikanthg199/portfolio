export const HEADER_HEIGHT = 106; // Top navbar (40px) + Main navbar (64px) + 2px border

export const PERSONAL_INFO = {
	name: 'Srikanth Golla',
	title: 'Backend Engineer',
	subtitle: 'Scalable APIs & Cloud Systems',
	email: 'srikanthgolla319@gmail.com',
	phone: '+91 9505977263',
	location: 'Hyderabad, Telangana, India',
	linkedin: 'https://linkedin.com/in/gollasrikanth',
	github: 'https://github.com/srikanthg199',
};

export const STATS = [
	{ number: '50K+', label: 'Monthly Users' },
	{ number: '99.99%', label: 'Uptime' },
	{ number: '40+', label: 'Hours Saved Weekly' },
];

export const SKILLS = {
	Languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
	Backend: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'RESTful APIs', 'WebSockets'],
	'Cloud & Serverless': ['AWS Lambda', 'Firebase', 'Google Cloud Platform', 'AWS S3'],
	Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Redis'],
	'DevOps & Tools': ['Docker', 'Git', 'CI/CD', 'Postman', 'Jest', 'Swagger'],
	'AI & Automation': ['OpenAI APIs', 'LLMs', 'RAG', 'Puppeteer'],
};

export const PROJECTS = [
	{
		id: 1,
		title: 'Brevio - Book Summaries',
		description: 'AI-powered book summary platform with GraphQL APIs, OpenAI integration, and intelligent search capabilities.',
		image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
		tech: ['Node.js', 'GraphQL', 'OpenAI', 'PostgreSQL', 'Redis'],
		stats: ['10K+ Users', '98%+ data accuracy', '<500ms load times', '60% reduction in data fetch time'],
		liveUrl: '#',
		codeUrl: '#',
		badge: '10K+ Users',
		badgeColor: 'bg-yellow-500',
	},
	{
		id: 2,
		title: 'Sing In Chinese',
		description: 'Interactive language learning platform with gamified lessons, secure media handling, and role-based access control.',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
		tech: ['Node.js', 'PostgreSQL', 'AWS S3', 'React.js', 'Unity'],
		stats: ['50% reduction in response times', 'Secure AWS S3 pre-signed URLs', 'Multi-level role-based access'],
		liveUrl: '#',
		codeUrl: '#',
		badge: 'High Retention',
		badgeColor: 'bg-green-500',
	},
	{
		id: 3,
		title: 'Little Eats',
		description: 'Personalized nutrition platform with Firebase Cloud Functions, real-time recommendations, and secure authentication.',
		image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
		tech: ['Firebase', 'Cloud Functions', 'Firestore', 'JavaScript', 'GCP'],
		stats: ['15+ Cloud Functions for recommendations', 'Strategic Firestore indexing', 'Conflict-free concurrent access'],
		liveUrl: '#',
		codeUrl: '#',
		badge: 'Real-time',
		badgeColor: 'bg-blue-500',
	},
];

export const EDUCATION = [
	{
		id: 1,
		degree: 'Bachelor of Technology (B.Tech)',
		field: 'Electronics and Communication Engineering',
		institution: 'Vidya Jyothi Institute of Technology',
		location: 'Hyderabad',
		duration: '2018 - 2022',
		grade: 'CGPA: 8.05',
		description: 'Specialized in Electronics and Communication Engineering with a strong foundation in digital systems, programming, and communication technologies. Developed skills in embedded systems and signal processing.',
		isActive: true,
	},
	{
		id: 2,
		degree: 'Intermediate (12th Grade)',
		field: 'Mathematics, Physics, Chemistry (MPC)',
		institution: 'Sri Gayatri Junior College',
		location: 'Hyderabad',
		duration: '2016 - 2018',
		grade: '92.6%',
		description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills essential for engineering.',
		isActive: false,
	},
	{
		id: 3,
		degree: 'Secondary School Certificate (SSC)',
		field: '10th Grade',
		institution: 'Zilla Parishad High School',
		location: 'Pedda Elkicharla',
		duration: '2015 - 2016',
		grade: 'CGPA: 8.7',
		description: 'Completed secondary education with excellent academic performance. Developed foundational knowledge in mathematics, science, and communication skills.',
		isActive: false,
	},
];

export const EXPERIENCE = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'Brainvire Infotech',
		location: 'Ahmedabad, India',
		duration: 'June 2023 - Present',
		current: true,
		responsibilities: ['Led the backend development of 3+ scalable platforms using Node.js, PostgreSQL, GraphQL, and Firebase, supporting over 10K+ daily users with optimized API design and query efficiency.', 'Designed and deployed cloud-native architectures on Google Cloud Platform and AWS, utilizing Lambda, S3, Firestore, and Redis to achieve <500ms response times and 99.9% uptime.', 'Engineered secure authentication and access control using Firebase Auth, OAuth 2.0, and App Check, eliminating unauthorized access incidents and maintaining data integrity at scale.', 'Integrated OpenAI models and built AI-enabled pipelines for auto-generating book summaries, embeddings, and dynamic assets, reflecting strong commitment to exploring LLMs and Generative AI.'],
	},
	{
		id: 2,
		title: 'Associate Software Engineer',
		company: 'Brainvire Infotech',
		location: 'Ahmedabad, India',
		duration: 'Jan 2023 - April 2023',
		current: false,
		responsibilities: ['Contributed to the development of 3+ enterprise-grade applications by collaborating with frontend, design, and QA teams, streamlining API workflows and reducing feature delivery time by 25%.', 'Built and optimized RESTful APIs using Node.js and Express.js, reducing server response latency by 40% for 10K+ monthly active users.', 'Enhanced data performance by redesigning schemas and implementing indexes in PostgreSQL and MongoDB, decreasing complex query times by up to 35%.', 'Secured APIs with JWT and OAuth 2.0, enforcing robust access control and preventing all unauthorized access incidents over a continuous 12-month period.'],
	},
];

export const NAVIGATION_ITEMS = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'education', label: 'Education' },
	{ id: 'contact', label: 'Contact' },
];
