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
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
				<div className='text-center animate-fade-in'>
					<div className='mb-6 sm:mb-8'>
						<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6'>
							<span className='text-accent block mb-3 sm:mb-0 sm:inline'>Backend Engineer</span>
							<span className='hidden sm:inline text-white'> </span>
							<br className='block sm:hidden' />
							<span className='text-white block sm:inline'>Scalable APIs & Cloud Systems</span>
						</h1>
						<p className='text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 px-2'>Building high-performance systems for 10K+ users with 99.99% uptime</p>
					</div>

					{/* Key Stats with Animation */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12'>
						{STATS.map((stat, index) => (
							<div key={index} className='text-center'>
								<div className='text-3xl sm:text-4xl font-bold mb-2'>
									<AnimatedStatNumber value={stat.number} delay={index * 200} />
								</div>
								<div className='text-gray-300 text-sm sm:text-base'>{stat.label}</div>
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center px-4'>
						<button onClick={() => scrollToSection('contact')} className='btn-primary bg-accent text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center text-sm sm:text-base'>
							<EnvelopeIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
							Let's Connect
						</button>
						<button onClick={() => scrollToSection('projects')} className='btn-secondary border-2 border-accent text-accent px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center text-sm sm:text-base'>
							<CodeBracketIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
							View Projects
						</button>
						<button onClick={handleDownloadResume} className='btn-secondary border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center text-sm sm:text-base'>
							<ArrowDownTrayIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
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
