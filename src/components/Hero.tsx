import React from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Hero: React.FC = () => {
  return (
    <div id='hero' className="relative h-screen flex items-center justify-center hdr">
      <ellipse cx="300" cy="50" rx="20" ry="20" fill="hsla(90, 80%, 70%, 0.6)" filter="url(#blur-filter)">
        <animateMotion dur="42s" repeatCount="indefinite">
          <mpath href="#path1" />
        </animateMotion>
      </ellipse>

      <ellipse cx="650" cy="250" rx="18" ry="18" fill="hsla(210, 80%, 70%, 0.6)" filter="url(#blur-filter)">
        <animateMotion dur="48s" repeatCount="indefinite">
          <mpath href="#path2" />
        </animateMotion>
      </ellipse>

      <ellipse cx="550" cy="450" rx="22" ry="22" fill="hsla(360, 80%, 70%, 0.6)" filter="url(#blur-filter)">
        <animateMotion dur="52s" repeatCount="indefinite">
          <mpath href="#path3" />
        </animateMotion>
      </ellipse>

      <ellipse cx="100" cy="400" rx="16" ry="16" fill="hsla(45, 80%, 70%, 0.6)" filter="url(#blur-filter)">
        <animateMotion dur="46s" repeatCount="indefinite">
          <mpath href="#path4" />
        </animateMotion>
      </ellipse>

      <ellipse cx="750" cy="550" rx="19" ry="19" fill="hsla(75, 80%, 70%, 0.6)" filter="url(#blur-filter)">
        <animateMotion dur="58s" repeatCount="indefinite">
          <mpath href="#path5" />
        </animateMotion>
      </ellipse>






      <div className="text-center justify-center items-center text-white px-6 md:px-12">
        {/* <img src="/me.png" className='flex w-44 rounded-full ' alt="" /> */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className='animated-gradient'>I am Andre Colding </span></h1>
        <p className="text-xl text-neutral-300 mb-8">
          Full-stack developer specializing in Node.js, React.js, Next.js, <br />AWS, and AI integration, delivering scalable and intelligent solutions.</p>
        <div className="flex justify-center space-x-4">
          <ButtonLink className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100" buttonText='Previous Work' elementId='previouswork' />
          {/* <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-600">
            <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
              Resume
            </Link>
          </button> */}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border ml-6"></span>
      </div>
    </div>
  );
};

export default Hero;
