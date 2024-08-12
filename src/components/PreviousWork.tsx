import { title } from "process";

const projects = [
    {
      title: 'Hypotenuse AI',
      description: 'Hypotenuse.ai is an AI-powered platform designed to generate high-quality content for e-commerce brands and marketers. It offers tools for creating SEO-optimized blog articles, product descriptions, social media posts, ad copy, and more.',
      imageUrl: '/projects/ai.png',
      caseStudyUrl: 'http://hypotenuse.ai'
    },
    {
      title: 'American Express',
      description: 'Offers small business loans and financial services, providing flexible lines of credit and simplified cash flow management tools for small businesses.',
      imageUrl: '/projects/americanexpress.png',
      caseStudyUrl: 'https://www.americanexpress.com',
    },
    {
      title: 'Future Learn',
      description: ' An online learning platform offering courses, programs, and degrees from leading universities and institutions worldwide. It focuses on a wide range of subjects.',
      imageUrl: '/projects/futurelearn.png',
      caseStudyUrl: 'https://www.futurelearn.com/',
    },
    {
      title: 'Bioweb',
      description: "Comprehensive time tracking and attendance solution SaaS product. The primary objective was to provide employers with accurate and reliable tracking of their employees' work hours, locations, and overall working activities. ",
      imageUrl: '/projects/Screenshot_2.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Replika',
      description: "An AI chatbot that uses LLMs to engage in conversations and provide companionship, focusing on mental well-being",
      imageUrl: '/projects/replika2.png',
      caseStudyUrl: 'https://replika.ai',
    },
    {
      title: 'Forethought',
      description: "An AI chatbot that uses LLMs to engage in conversations and provide companionship, focusing on mental well-being",
      imageUrl: '/projects/forethought.png',
      caseStudyUrl: 'https://forethought.ai/',
    },
    {
      title: 'Pathfinder',
      description: "The Pathfinder project was initiated by Canadian Energy Corporation to enhance their geosteering capabilities.",
      imageUrl: '/projects/pathfinder.png',
      caseStudyUrl: '#',
    },
    {
      title: 'iMotion',
      description: "An advanced solution to transform their CCTV streams into intelligent monitoring systems. The system needed to accurately detect and track objects in real-time, providing comprehensive reporting and monitoring capabilities.",
      imageUrl: '/projects/iMotion.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Slideteam',
      description: "I was in charge of integrating GANs into the platform to enhance the user experience and provide users with more creative and engaging presentation options.",
      imageUrl: '/projects/slideteam.png',
      caseStudyUrl: 'https://www.slideteam.net/',
    },
    {
      title: 'Erin - Job Search App',
      description: "",
      imageUrl: '/projects/Erin - Job Search App.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Meritas-Investments',
      description: "",
      imageUrl: '/projects/Meritas-Investments.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Bar Link',
      description: "",
      imageUrl: '/projects/Bar Link.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Turn Up',
      description: "",
      imageUrl: '/projects/Turn Up.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Valor Admin -Dashboard',
      description: "",
      imageUrl: '/projects/Valor Admin -Dashboard.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Trip Weather',
      description: "",
      imageUrl: '/projects/Trip Weather.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Mailflow Monitor',
      description: "",
      imageUrl: '/projects/Mailflow Monitor.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Nodocdepot -Finances',
      description: "",
      imageUrl: '/projects/Nodocdepot -Finances.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Nomo-Cryptocurrencies',
      description: "",
      imageUrl: '/projects/Nomo-Cryptocurrencies.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Sonic Academy',
      description: "",
      imageUrl: '/projects/Sonic Academy.png',
      caseStudyUrl: '#',
    },
    {
      title: 'First Phase Media - Investments',
      description: "",
      imageUrl: '/projects/First Phase Media - Investments.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Fundamental Secrets -Cryptocurrencies',
      description: "",
      imageUrl: '/projects/Fundamental Secrets -Cryptocurrencies.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Ahad - Pitch Deck',
      description: "",
      imageUrl: '/projects/Ahad - Pitch Deck.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Ameri Charter',
      description: "",
      imageUrl: '/projects/Ameri Charter.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Collaborate Org',
      description: "",
      imageUrl: '/projects/Collaborate Org.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Collaborate Org',
      description: "",
      imageUrl: '/projects/Collaborate Org.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Yourmindz-Social Networking',
      description: "",
      imageUrl: '/projects/Yourmindz-Social Networking.png',
      caseStudyUrl: '#',
    },
    {
      title: 'SMB Funding-Landing Page',
      description: "",
      imageUrl: '/projects/SMB Funding-Landing Page.png',
      caseStudyUrl: '#',
    },
    {
      title: 'Epic Traffic Bot',
      description: "",
      imageUrl: '/projects/Epic Traffic Bot.png',
      caseStudyUrl: '#',
    },
  ];

  const PreviousWork: React.FC = () => {
    return (
      <div id='previouswork' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold tracking-tight text-center mb-20"><span className='animated-gradient'>Past Projects</span></h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#f0e6fd]">
                <div className="flex-shrink-0">
                  <img className="h-64 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-600">{project.title}</p>
                          <p className="mt-3 text-base text-gray-600">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-600">{project.title}</p>
                          <p className="mt-3 text-base text-gray-600">{project.description}</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PreviousWork;
  