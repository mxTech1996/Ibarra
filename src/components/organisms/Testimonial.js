// En tu archivo: /components/Testimonials.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Ícono de comillas para decorar
import { LuQuote } from 'react-icons/lu';

// --- Datos para la sección ---
const testimonialsData = dataSite.references;

const Testimonials = () => {
  // Variantes para la animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
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
    <section id='attorneys' className='py-20 md:py-28 bg-stone-100'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-amber-600 mb-2'>Social Proof</p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
            Words From Our Clients
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white rounded-lg shadow-md p-8 flex flex-col'
            >
              <LuQuote className='text-amber-300 text-5xl mb-4' />
              <p className='text-gray-600 italic leading-relaxed flex-grow'>
                &quot;{testimonial.description}&quot;
              </p>
              <div className='mt-6 flex items-center gap-4'>
                {/* <Image
                  src={testimonial.image}
                  alt={`Headshot of ${testimonial.name}`}
                  width={60}
                  height={60}
                  className='rounded-full object-cover'
                /> */}
                <div>
                  <p className='font-bold text-slate-800'>{testimonial.name}</p>
                  {/* <p className='text-gray-500 text-sm'>{testimonial.title}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
