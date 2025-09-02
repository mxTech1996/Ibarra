// En tu archivo: /components/Footer.js
'use client';

import { motion } from 'framer-motion';
// Íconos de redes sociales

import Image from 'next/image';
import { dataSite, email, phoneNumber } from '@/data';

// --- Datos para los enlaces del footer ---
const footerLinks = {
  navigation: [
    { name: 'About Us', href: '#' },
    { name: 'Attorneys', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  practiceAreas: [
    { name: 'Corporate Law', href: '#' },
    { name: 'Commercial Litigation', href: '#' },
    { name: 'Real Estate Law', href: '#' },
    { name: 'Intellectual Property', href: '#' },
  ],
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className='bg-slate-800 text-white'>
      <motion.div
        className='container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Columna 1: About Firm */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 lg:col-span-1'
          >
            <h3 className='text-2xl font-bold mb-4'>Detroit</h3>
            <p className='text-gray-300 mb-4 max-w-xs'>
              Forging Justice, Securing Futures. Your trusted legal advisors.
            </p>
            {/* <div className='flex gap-4'>
              <a href='#' className='hover:text-amber-500 transition-colors'>
                <LuTwitter size={20} />
              </a>
              <a href='#' className='hover:text-amber-500 transition-colors'>
                <LuLinkedin size={20} />
              </a>
              <a href='#' className='hover:text-amber-500 transition-colors'>
                <LuFacebook size={20} />
              </a>
            </div> */}
          </motion.div>

          {/* Columna 2: Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Navigation</h4>
            <ul className='space-y-2'>
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-amber-500 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Practice Areas */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Practice Areas</h4>
            <ul className='space-y-2'>
              {footerLinks.practiceAreas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-amber-500 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contact */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Get In Touch</h4>
            <address className='not-italic text-gray-300 space-y-2'>
              <p>{dataSite.address}</p>
              <p>
                <a
                  href={`tel:${phoneNumber}`}
                  className='hover:text-amber-500 transition-colors'
                >
                  {phoneNumber}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className='hover:text-amber-500 transition-colors'
                >
                  {email}
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* --- Sub-Footer con Copyright y Logo de Visa --- */}
        <div className='mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4'>
          <div className='text-center md:text-left'>
            <p>&copy; 2025 Detroit. All Rights Reserved.</p>
            <p className='mt-2'>
              <a href='#' className='hover:text-amber-500 transition-colors'>
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href='#' className='hover:text-amber-500 transition-colors'>
                Terms of Service
              </a>
            </p>
          </div>
          {/* --- AÑADIDO: Sección para el logo de Visa --- */}
          <div className='flex items-center gap-2'>
            <p className='font-semibold'>Accepted Payments:</p>

            <Image
              src='/images/visaMaster.png'
              alt='Visa'
              width={80}
              height={50}
              className='object-contain'
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
