// En tu archivo: /components/WhyChooseUs.js
'use client';

import { motion } from 'framer-motion';
// Íconos de react-icons para cada beneficio
import { LuBrainCircuit, LuUsers, LuMedal } from 'react-icons/lu';

// --- Datos para la sección ---
const coreBenefits = [
  {
    icon: <LuBrainCircuit size={40} />,
    title: 'Tailored Legal Strategies',
    description:
      'We don’t believe in one-size-fits-all solutions. We craft bespoke legal strategies designed to meet your specific goals and challenges.',
  },
  {
    icon: <LuUsers size={40} />,
    title: 'Direct Partner Access',
    description:
      'You will work directly with our senior partners, benefiting from their full attention and decades of experience from start to finish.',
  },
  {
    icon: <LuMedal size={40} />,
    title: 'A Proven Record of Success',
    description:
      'Our history of favorable verdicts and settlements speaks for itself. We are relentless in our pursuit of the best possible outcome for you.',
  },
];

const WhyChooseUs = () => {
  // Variantes para la animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  return (
    // La paleta de colores del diseño original (verde oscuro/azulado)
    <section className='py-20 md:py-28 bg-slate-800 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl font-bold mb-16'
        >
          Decades of Dedication to Your Success
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='flex flex-col items-center'
            >
              {/* Ícono con el color de acento */}
              <div className='text-amber-500 mb-4'>{benefit.icon}</div>
              <h3 className='text-2xl font-bold mb-3'>{benefit.title}</h3>
              <p className='text-gray-300 max-w-sm'>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
