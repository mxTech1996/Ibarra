// En tu archivo: /components/PracticeAreas.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos de react-icons para cada área
import { LuScale, LuBuilding2, LuBriefcase, LuLandmark } from 'react-icons/lu';

// --- Datos para la sección ---
const practiceAreas = [
  {
    icon: <LuBriefcase />,
    title: 'Corporate Law',
    description:
      'Expert guidance on business formation, governance, and corporate compliance.',
  },
  {
    icon: <LuScale />,
    title: 'Commercial Litigation',
    description:
      'Resolving complex business disputes through strategic negotiation and litigation.',
  },
  {
    icon: <LuBuilding2 />,
    title: 'Real Estate Law',
    description:
      'Comprehensive legal services for commercial and residential property transactions.',
  },
  {
    icon: <LuLandmark />,
    title: 'Intellectual Property',
    description:
      'Protecting your valuable trademarks, copyrights, and patents.',
  },
];

// --- Componente de Botón Reutilizable ---
const Button = ({ children, className }) => {
  return (
    <button
      className={`px-8 py-3 rounded-md font-semibold transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const PracticeAreas = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='practice' className='py-20 md:py-28 bg-stone-100'>
      <motion.div
        className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* --- Columna de Texto (Izquierda) --- */}
        <div className='flex flex-col'>
          <motion.p
            variants={itemVariants}
            className='font-semibold text-amber-600 mb-2'
          >
            Practice Areas
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-slate-900 mb-8'
          >
            Legal Fields We Master
          </motion.h2>

          <motion.div variants={itemVariants} className='space-y-6'>
            {practiceAreas.map((area, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='mt-1 text-amber-600 bg-amber-100 p-2 rounded-md'>
                  {area.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-slate-800'>
                    {area.title}
                  </h3>
                  <p className='text-gray-500 mt-1'>{area.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className='mt-10'>
            {/* <Button className='bg-amber-600 text-white hover:bg-amber-700'>
              View All Practice Areas
            </Button> */}
          </motion.div>
        </div>

        {/* --- Columna de la Imagen (Derecha) --- */}
        <motion.div variants={imageVariants} className='w-full h-auto'>
          <Image
            src='/images/practice.png' // Reemplaza con la ruta a tu imagen generada
            alt='Statue of Lady Justice'
            width={600}
            height={700}
            className='rounded-lg object-cover shadow-xl'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PracticeAreas;
