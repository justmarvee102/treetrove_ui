import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';
import { images } from '../constants';

function ImageSliders({
  children: slide = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1)),
    [slide.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      title: 'Typography',
      description: [
        'Clean and modern fonts to ensure readability and aesthetic appeal',
      ],
    },
    {
      title: 'Project Duration',
      description: ['November 2023-May 2024'],
    },

    {
      title: 'Role and Responsibility',
      description: ['UI Designer'],
    },

    {
      title: 'Target Impact',
      description: [
        "Enhanced community engagement through the app's interactive features.",
      ],
    },
  ];

  const items2 = [
    {
      title: 'Concept Development',
      description: [
        '1. I developed initial wireframes and sketches to map out user journeys.',
        '2. I created mood boards to capture the desired look and feel.',
      ],
    },
    {
      title: 'Challenges and Solutions',
      description: [
        '1. Challenge: Designing an intuitive navigation system for users of all ages.',
        '2. Solution: Implemented a straightforward, icon-based navigation with tooltips and clear labels.',
      ],
    },
    {
      title: 'Client Information',
      description: [
        'Technovation Girls - An organization that encourages young women to create tech solutions for real-world problems.',
      ],
    },
  ];

  const items3 = [
    {
      title: 'Lessons Learned During the Competition.',
      description: [
        '1. The Power of Collaboration.🤝',
        '2. Effective Communication contributes to success.💬',
        '3. Time Management ⏳',
      ],
    },
    {
      title: 'Lessons Learned During the Competition.',
      title2: 'Adaptability and Flexibility',
      description: [
        'Throughout the competition, I encountered various challenges that required me to be adaptable and flexible. I learned to pivot my strategies and embrace new approaches, ultimately enhancing my problem-solving abilities.',
      ],
    },

    {
      title: 'Lessons Learned During the Competition.',
      title2: 'Technical Skills and Innovation 💡',
      description: [
        "The competition provided a platform to hone my technical skills and explore innovative different design solutions and stuff I didn't know before. I gained hands-on experience with UI design tools, enhancing my proficiency and confidence in creating user-friendly interfaces.",
      ],
    },
  ];

  const items4 = [
    {
      title: 'Target Audience',
      description: [
        'Individuals and communities interested in environmental sustainability and fruit tree planting.',
      ],
    },
    {
      title: 'Design Iterations',
      description: [
        'I iteratively refined the design based on feedback from my mentors and peers, ensuring the interface was intuitive and engaging.',
      ],
    },

    {
      title: 'Results',
      description: [
        "Positive feedback from competition judges and users on the app's ease of use and visual appeal.",
      ],
    },
    {
      title: 'Summary',
      description: [
        'Participating in Technovation Girls 2023/2024 and working on TreeTrove was a transformative experience. It not only allowed me to contribute to a meaningful cause but also fostered personal and professional growth. The lessons learned and the memories created during this journey will stay with me as I continue to pursue my passion for design and innovation. 🌟',
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 sm:p-10 lg:p-10 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full box overflow-hidden shadow-lg bg-white dark:bg-gray-800 sm:mt-14 lg:mt-14 mt-20">
          <div className="relative lg:w-2/6 overflow-hidden sm:w-2/5 w-2/4 ">
            <motion.div
              className=" flex transition-transform ease-out duration-500 h-full mt-10"
              style={{ transform: `translateX(-${curr * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {slide.map((child, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    {child}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full shadow bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-600"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full shadow bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-600"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center space-x-1">
              {slide.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all w-2 h-2 rounded-full ${
                    curr === i
                      ? 'bg-black p-1 dark:bg-white'
                      : 'bg-black dark:bg-white bg-opacity-30 dark:bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-3/6 p-6 sm:w-2/2 ">
            <div className="bold-text mb-3 dark:text-gray-200">
              UI Design for TreeTrove: Fruit Tree Planting App
            </div>
            <p className="s-text mb-4">
              I had the exciting opportunity to participate in the Technovation
              Girls 2023/2024 competition, where I worked alongside an
              incredible team to create the UI design for TreeTrove, a
              user-friendly app dedicated to promoting fruit tree planting. 🌳✨
              <br />
              <br />
              TreeTrove aims to empower communities to plant and care for fruit
              trees, contributing to environmental sustainability and local food
              security. The app provides users with resources, tutorials, and
              community engagement tools to facilitate the planting process. Our
              team’s collaborative effort brought this vision to life, combining
              creativity, innovation, and a shared passion for making a positive
              impact on the environment.
            </p>
            <div className="flex flex-col mb-3">
              <span className="font-semibold dark:text-gray-200">
                Organization Name:
              </span>
              <span className="s-text">Technovation Girls</span>
            </div>
            <div className="font-semibold mb-1 dark:text-gray-200">
              Tools Used:
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={images.canva} alt="Canva" className="w-7 h-7 mt-1" />
                <span className="s-text">Canva</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.photoshop}
                  alt="Photoshop"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Photoshop</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.figma}
                  alt="Figma"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Figma</span>
              </div>
            </div>
            <div className="flex-col flex mb-4">
              <div className="font-semibold dark:text-gray-200">
                Color Palette:
              </div>
              <h2 className="s-text mb-2">
                Natural and vibrant tones to reflect the environment and
                fruitfulness:
              </h2>
              <div className="flex-row flex ">
                <img
                  src={images.welcome_screen1}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-black mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.log_out1}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors2">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-black mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.onboarding_screen1}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors3">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-black mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="font-semibold mb-2 dark:text-gray-200">
                Project Link:
              </div>
              <a
                href="https://www.figma.com/proto/g0znqOFFcT9AUpnkfhjHp4/Untitled?node-id=22-112&t=Uez8rsgEYRJ1H97J-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=573%3A810"
                className="text-blue-500 underline dark:text-blue-300"
              >
                *Click here to view full iteration of TreeTrove UI*
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-center dark:text-gray-200">
        Other Important Info:
      </h1>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item.title}
            </div>
            {item.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items2.map((item2, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item2.title}
            </div>
            {item2.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items3.map((item3, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item3.title}
            </div>
            {item3.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items4.map((item4, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item4.title}
            </div>
            {item4.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ImageSliders;
