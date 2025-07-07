import { ChevronDownIcon, EnvelopeIcon, CodeBracketIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { PERSONAL_INFO, STATS } from '@/lib/constants';
import { useScrollTo } from '@/hooks/useScrollTo';
import { AnimatedStatNumber } from './AnimatedStatNumber';
import { downloadFileWithFallback } from '@/utils/assetLoader';

export const Hero = () => {
	const { scrollToSection } = useScrollTo();

	const handleDownloadResume = async () => {
		try {
			await downloadFileWithFallback('Srikanth_Golla_Resume.pdf', 'Srikanth_Golla_Resume.pdf');
		} catch (error) {
			alert(error instanceof Error ? error.message : 'Resume download failed. Please contact me directly at srikanth.golla@brainvire.com');
		}
	};

	return (
		<section id='home' className='section hero-bg text-white min-h-screen flex items-center pt-26'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='text-center animate-fade-in'>
					<div className='mb-6'>
						<h1 className='text-4xl md:text-6xl font-bold mb-4'>
							<span className='text-accent'>Backend Engineer</span>
							<br />
							<span className='text-white'>Scalable APIs & Cloud Systems</span>
						</h1>
						<p className='text-xl md:text-2xl text-gray-300 mb-8'>Building high-performance systems for 10K+ users with 99.99% uptime</p>
					</div>

					{/* Key Stats with Animation */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
						{STATS.map((stat, index) => (
							<div key={index} className='text-center'>
								<div className='text-4xl font-bold mb-2'>
									<AnimatedStatNumber value={stat.number} delay={index * 200} />
								</div>
								<div className='text-gray-300'>{stat.label}</div>
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button onClick={() => scrollToSection('contact')} className='btn-primary bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center'>
							<EnvelopeIcon className='w-5 h-5 mr-2' />
							Let's Connect
						</button>
						<button onClick={() => scrollToSection('projects')} className='btn-secondary border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center'>
							<CodeBracketIcon className='w-5 h-5 mr-2' />
							View Projects
						</button>
						<button onClick={handleDownloadResume} className='btn-secondary border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center'>
							<ArrowDownTrayIcon className='w-5 h-5 mr-2' />
							Download Resume
						</button>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent animate-bounce-gentle'>
				<ChevronDownIcon className='w-6 h-6' />
			</div>
		</section>
	);
};
