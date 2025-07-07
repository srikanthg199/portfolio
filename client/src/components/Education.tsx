import { EDUCATION } from '@/lib/constants';

export const Education = () => {
  return (
    <section id="education" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">My academic journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent"></div>

            {EDUCATION.map((edu) => (
              <div key={edu.id} className="timeline-item card-hover relative pl-12 pb-8 mb-8 bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                    <p className="text-accent font-semibold">{edu.field}</p>
                    <p className="text-gray-600">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      edu.isActive 
                        ? 'bg-accent text-primary' 
                        : 'bg-gray-200 text-gray-800'
                    }`}>
                      {edu.duration}
                    </span>
                    <p className="text-lg font-bold text-primary mt-2">{edu.grade}</p>
                  </div>
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
