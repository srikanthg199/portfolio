import { UserCircleIcon } from '@heroicons/react/24/outline';

export const About = () => {
	const quickFacts = [
		{ number: '2+', label: 'Years Experience' },
		{ number: '10K+', label: 'Users Served' },
		{ number: '50%', label: 'Latency Reduction' },
		{ number: '0%', label: 'Security Breaches' },
	];

	return (
		<section id='about' className='section py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-primary mb-4'>About Me</h2>
					<div className='w-20 h-1 bg-accent mx-auto mb-6'></div>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>Backend Engineer with 2+ years of experience building scalable systems using Node.js, AWS, and Firebase</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div className='animate-slide-in'>
						{/* Professional Profile Picture */}
						<div className='w-full max-w-sm mx-auto'>
							<div className='w-72 h-72 mx-auto'>
								<img
									src='/assets/profile-picture.jpg'
									alt='Srikanth Golla - Backend Engineer'
									className='w-full h-full rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-gray-100'
									onError={(e) => {
										// Fallback to placeholder if image fails to load
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const fallback = target.nextElementSibling as HTMLElement;
										if (fallback) fallback.style.display = 'flex';
									}}
								/>
								{/* Fallback placeholder */}
								<div className='hidden flex-col items-center justify-center w-full h-full bg-gray-50 rounded-full border-4 border-white ring-4 ring-gray-100'>
									<UserCircleIcon className='w-24 h-24 text-gray-300 mb-2' />
									<p className='text-gray-500 text-sm text-center px-4'>Add your profile picture</p>
									<p className='text-gray-400 text-xs mt-1 text-center px-4'>Place image at /assets/profile-picture.jpg</p>
								</div>
							</div>
						</div>
					</div>

					<div className='animate-slide-in'>
						<h3 className='text-2xl font-bold text-primary mb-6'>Hi, I'm Srikanth Golla</h3>
						<div className='space-y-4 text-gray-700'>
							<p>I'm a passionate Backend Engineer specializing in high-performance API design and serverless architectures. With over 2 years of hands-on experience, I've successfully built and scaled systems serving 10,000+ users.</p>
							<p>My expertise lies in creating robust, scalable solutions using modern technologies like Node.js, PostgreSQL, GraphQL, and cloud platforms. I'm particularly skilled in performance optimization, achieving up to 50% latency reduction and maintaining 99.99% database uptime.</p>
							<p>I'm constantly exploring emerging technologies, especially in AI and automation, having integrated OpenAI models and built intelligent pipelines that save 40+ hours weekly through workflow automation.</p>
						</div>

						{/* Quick Facts */}
						<div className='mt-8 grid grid-cols-2 gap-4'>
							{quickFacts.map((fact, index) => (
								<div key={index} className='text-center p-4 bg-gray-50 rounded-lg'>
									<div className='text-2xl font-bold text-accent'>{fact.number}</div>
									<div className='text-sm text-gray-600'>{fact.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
