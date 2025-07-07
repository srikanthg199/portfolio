import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon, 
  CircleStackIcon, 
  WrenchScrewdriverIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';
import { SKILLS } from '@/lib/constants';

export const Skills = () => {
  const skillIcons = {
    "Languages": CodeBracketIcon,
    "Backend": ServerIcon,
    "Cloud & Serverless": CloudIcon,
    "Databases": CircleStackIcon,
    "DevOps & Tools": WrenchScrewdriverIcon,
    "AI & Automation": CpuChipIcon,
  };

  return (
    <section id="skills" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills]) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons];
            return (
              <div key={category} className="card-hover bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-primary">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge bg-white text-gray-700 px-3 py-1 rounded-full text-sm border hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
