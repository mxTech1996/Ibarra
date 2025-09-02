import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../atoms/button';

const HeroSection = () => {
  // Variantes para la animación de entrada escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative h-screen w-full flex items-center justify-center text-white'>
      {/* Imagen de Fondo */}
      <div className='absolute inset-0 z-[-1]'>
        <Image
          src='/images/hero.png' // Reemplaza con la ruta a tu imagen generada
          alt='Modern law office background'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
        {/* Capa de superposición oscura para legibilidad */}
        <div className='absolute inset-0 bg-slate-900 bg-opacity-60' />
      </div>

      {/* Contenido Central Animado */}
      <motion.div
        className='text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.p
          variants={itemVariants}
          className='font-semibold text-amber-500 mb-2'
        >
          A Legacy of Legal Excellence
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className='text-5xl md:text-7xl font-bold leading-tight'
        >
          Forging Justice, Securing Futures
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='max-w-2xl mx-auto mt-4 mb-8 text-lg text-gray-200'
        >
          Providing expert counsel and unwavering advocacy across a spectrum of
          legal disciplines. At Blackwood & Sterling, your success is our
          mandate.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className='flex gap-4 justify-center'
        >
          <Button variant='primary'>Free Consultation</Button>
          <Button variant='outline'>Explore Our Practice Areas</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
