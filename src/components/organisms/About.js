// En tu archivo: /components/AboutSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Datos para la sección ---
const firmValues = [
  {
    title: 'Unwavering Integrity',
    description:
      'Upholding the highest ethical standards is the cornerstone of our practice.',
  },
  {
    title: 'Decades of Experience',
    description:
      'Leveraging years of combined experience to navigate complex legal landscapes.',
  },
  {
    title: 'Client-Centric Commitment',
    description:
      'Your objectives are our priority. We are dedicated to achieving your desired outcomes.',
  },
];

const affiliations = [];

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='about' className='py-20 md:py-28 bg-stone-100'>
      <motion.div
        className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* --- Columna de la Imagen (Izquierda) --- */}
        <motion.div variants={imageVariants}>
          <div className='w-full h-auto rounded-lg overflow-hidden shadow-xl'>
            <Image
              src='/images/about.png' // Reemplaza con la ruta a tu imagen generada
              alt='Senior partner at Blackwood & Sterling'
              width={600}
              height={700}
              className='object-cover'
            />
          </div>
          <div className='mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center'>
            {affiliations.map((logo, index) => (
              <div key={index} className='flex justify-center'>
                <Image
                  src={logo}
                  alt={`Affiliation logo ${index + 1}`}
                  width={80}
                  height={40}
                  className='opacity-50 grayscale'
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- Columna de Texto (Derecha) --- */}
        <motion.div variants={itemVariants} className='pt-4'>
          <p className='font-semibold text-amber-600 mb-2'>Who We Are</p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
            About Blackwood & Sterling
          </h2>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            Founded on the principles of integrity and expertise, Blackwood &
            Sterling LLP has established itself as a premier law firm dedicated
            to providing exceptional legal services. Our firm was built with a
            singular mission: to offer clients a clear path through their most
            complex legal challenges.
          </p>
          <p className='text-gray-600 mb-8 leading-relaxed'>
            We combine traditional legal wisdom with modern, innovative
            strategies to ensure the best possible outcomes. Our attorneys are
            not just legal practitioners; they are trusted advisors committed to
            your long-term success.
          </p>

          <div className='space-y-6 border-l-2 border-amber-600 pl-6'>
            {firmValues.map((value, index) => (
              <div key={index}>
                <h3 className='text-xl font-bold text-slate-800'>
                  {value.title}
                </h3>
                <p className='text-gray-500 mt-1'>{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
