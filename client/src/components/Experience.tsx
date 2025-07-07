import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { EXPERIENCE } from '@/lib/constants';

export const Experience = () => {
  return (
    <section id="experience" className="section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">My professional journey in backend engineering</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="card-hover bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <p className="text-accent font-semibold text-lg">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    exp.current 
                      ? 'bg-accent text-primary' 
                      : 'bg-gray-200 text-gray-800'
                  }`}>
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-gray-700">
                {exp.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
