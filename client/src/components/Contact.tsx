import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { PERSONAL_INFO } from '@/lib/constants';

export const Contact = () => {
	const contactInfo = [
		{
			icon: EnvelopeIcon,
			title: 'Email',
			content: PERSONAL_INFO.email,
			href: `mailto:${PERSONAL_INFO.email}`,
		},
		{
			icon: PhoneIcon,
			title: 'Phone',
			content: PERSONAL_INFO.phone,
			href: `tel:${PERSONAL_INFO.phone}`,
		},
		{
			icon: MapPinIcon,
			title: 'Location',
			content: PERSONAL_INFO.location,
			href: null,
		},
	];

	return (
		<section id='contact' className='section py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-primary mb-4'>Get In Touch</h2>
					<div className='w-20 h-1 bg-accent mx-auto mb-6'></div>
					<p className='text-xl text-gray-600'>Let's discuss & Build network</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div className='space-y-8'>
						{contactInfo.map((info, index) => (
							<div key={index} className='card-hover bg-white p-6 rounded-xl shadow-lg'>
								<div className='flex items-center mb-4'>
									<info.icon className='w-6 h-6 text-accent mr-4' />
									<div>
										<h3 className='text-lg font-bold text-primary'>{info.title}</h3>
										{info.href ? (
											<a href={info.href} className='text-gray-600 hover:text-accent transition-colors duration-300'>
												{info.content}
											</a>
										) : (
											<p className='text-gray-600'>{info.content}</p>
										)}
									</div>
								</div>
							</div>
						))}

						<div className='card-hover bg-white p-6 rounded-xl shadow-lg'>
							<div className='flex items-center mb-4'>
								<svg className='w-6 h-6 text-accent mr-4' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
								</svg>
								<div>
									<h3 className='text-lg font-bold text-primary'>LinkedIn</h3>
									<a href={PERSONAL_INFO.linkedin} className='text-gray-600 hover:text-accent transition-colors duration-300'>
										Connect with me
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Send Message Section */}
					<div className='bg-white p-8 rounded-xl shadow-lg'>
						<h3 className='text-2xl font-bold text-primary mb-6'>Send a Message</h3>
						<div className='text-center'>
							<p className='text-gray-600 mb-8'>For more details, Please click the button below to send me an email directly.</p>
							<a href={`mailto:${PERSONAL_INFO.email}?subject=Let's connect &body=Hi Srikanth,%0D%0A%0D%0AI would like to know about you more .%0D%0A%0D%0ABest regards,`} className='btn-primary inline-flex items-center justify-center bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg'>
								<svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
								</svg>
								Send a Message
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
