import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaLinkedin, FaGithub, FaJava, FaJsSquare, FaHtml5, FaCss3, FaReact, FaToolbox, FaBrain, FaTools, FaConnectdevelop, FaSmile, FaPhoenixFramework } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiNuxtdotjs, SiTailwindcss, SiMaterialdesign, SiBootstrap, SiVuetify, SiFirebase, SiAmazonaws, SiNpm, SiNodedotjs, SiPhp, SiPython, SiMongodb, SiMysql, SiGooglecloud, SiVuedotjs, SiAxios, SiWebpack, SiYarn, SiAzuredevops, SiChatbot, SiOpenai, SiRobotframework } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        {/* <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Andre Colding</h2> */}

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
            {/* <h2 className="text-2xl font-normal text-center text-6xl text-white mb-6 mt-6 font-extralight">About Me</h2> */}
            <div className="space-y-6">
              {/* <p className="text-gray-200">
                Hello, I am Andre and I have been working as a software developer for 6+ years while working or managing several websites and AI products.
                My goal is to start an amazing career where I can contribute to the best of my skills and efforts for the growth of the organization and the satisfaction of clients.
                I work efficiently, ensuring my code is clean, W3C valid, semantic, and easy to maintain. Let&apos;s collaborate and create something amazing together!
              </p> */}
              {/* <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3> */}
              <div className="flex items-start flex-col">
                <div className='text-left text-xl'>✅ FOR FRONT-END</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li className="flex items-center gap-2">
                    ✔ Languages:
                    <div className="flex gap-2 items-center space-x-4">
                      <FaJsSquare size={40} />
                      <FaHtml5 size={40} />
                      <FaCss3 size={40} />
                      <SiTypescript size={36} />
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    ✔ Frameworks:
                    <div className="flex gap-2 items-center space-x-4">
                      <FaReact size={40} />
                      <SiRedux size={36} />
                      <SiVuedotjs size={36} />
                      <SiNuxtdotjs size={36} />
                    </div>
                  </li>

                  <li className="flex items-center gap-2"> ✔ CSS Frameworks:
                    <div className="flex gap-2 items-center space-x-4">
                      <SiTailwindcss size={36} />
                      <SiMaterialdesign size={36} />
                      <SiBootstrap size={36} />
                      <SiVuetify size={36} />
                    </div>
                  </li>
                  <li className="flex items-center gap-2">✔ Cloud:
                    <div className="flex gap-2 items-center space-x-4">
                      <SiAmazonaws size={36} />
                      <SiFirebase size={36} />
                    </div>
                  </li>


                  <li className="flex items-center gap-2">✔ Design:
                    <div className="flex gap-2 items-center">
                      {/* Object-Oriented UI/UX Design, responsive web, … */}
                      <SiFirebase size={36} />
                    </div>
                  </li>
                  <li className="flex items-center gap-2">✔ Others:
                    <div className="flex gap-2 items-center space-x-4">
                      <SiAxios size={36} />
                      <SiNpm size={36} />
                      <SiYarn size={36} />
                      <SiWebpack size={36} />
                    </div>
                  </li>
                </ul>
                
                
                <div className='text-left text-xl mt-5 mb-2'>✅ FOR BACK-END</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li className="flex items-center gap-2">✔ Language:
                    <div className="flex gap-2 items-center space-x-4">
                      <SiNodedotjs size={36} />
                      <SiPhp size={36} />
                      <SiPython size={36} />
                    </div>
                  </li>
                  <li className="flex items-center gap-2 space-x-4">✔ Database:
                    <SiMongodb size={36} />
                    <SiMysql size={36} />
                    <SiFirebase size={36} />
                  </li>
                  <li className="flex items-center gap-2 space-x-4">✔ Cloud hosting:
                    <SiAmazonaws size={36} />
                    <SiAzuredevops size={36} />
                    <SiGooglecloud size={36} />
                  </li>
                </ul>

                
                <div className='text-left text-xl mt-5 mb-2' >✅ AI TECH</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li className="flex items-center gap-2 space-x-4">✔ GenAI:
                    <SiOpenai size={36} />
                    <SiChatbot size={36} />
                    <FaBrain size={36} />
                    <FaTools size={36} />
                    {/* ChatGPT, GPT-4, DALL-E, LLAMA3, FineTuning */}
                  </li>
                  <li className="flex items-center gap-2">✔ Frameworks:
                    <FaConnectdevelop size={36} />(LangChain)
                  </li>
                  <li className="flex items-center gap-2 space-x-4">✔ Libraries:
                    <img className="w-10 color-white" src="/huggingface.svg" alt="" />
                    {/* <FaSmile size={36} />(Hugging Face) */}
                    <FaPhoenixFramework size={36} />

                    {/* Transformers, Hugging Face */}
                  </li>
                  <li className="flex items-center gap-2 space-x-4">✔ Tools:
                    {/* Auto-GPT, OpenAI API */}
                    {/* <SiOpenai size={36} /> */}
                    <SiRobotframework size={36} />

                  </li>
                </ul>
                {/* <button className="mt-3 bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                  <Link href='#' download={true}>
                    Resume
                  </Link>
                </button> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
