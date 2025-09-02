// En tu archivo: /components/Products.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { CartContext } from 'ui-old-version';

// --- Datos para la sección ---
const ProductsData = dataSite.products;

const Products = ({ isHome = true }) => {
  const navigation = useRouter();
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  // Variantes para la animación escalonada
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='products' className='py-20 md:py-28 bg-stone-100'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-amber-600 mb-2'>
            Our Expertise in Action
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
            Our Products
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {ProductsData.slice(0, 8).map((study, index) => {
            const handleAddToCart = () => {
              if (isHome) {
                navigation.push(`/contact`);
                return;
              }

              handleAddOrRemoveProduct(study.id);
            };
            const validateInCart = validateProductInCart(study.id);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-shadow duration-300'
              >
                <div className='w-full h-56 relative'>
                  <Image
                    src={study.image}
                    alt={study.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='p-6 flex flex-col flex-grow'>
                  <h3 className='text-xl font-bold text-slate-800 mb-3'>
                    {study.name}
                  </h3>
                  <p className='text-gray-600 mb-4 flex-grow'>
                    {study.description}
                  </p>
                  <p
                    href='#'
                    className='flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition-colors'
                  >
                    {study.price} USD
                  </p>
                  {/* Add to cart button */}
                  <button
                    className={`mt-4 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors ${
                      validateInCart ? 'bg-red-600' : 'bg-amber-600'
                    }`}
                    onClick={handleAddToCart}
                  >
                    {isHome
                      ? 'Get a quote'
                      : validateInCart
                      ? 'Remove from Cart'
                      : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* additional products */}
        {!isHome && (
          <>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className='text-center mb-16 mt-10'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
                Our Additionals
              </h2>
            </motion.div>

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              {ProductsData.slice(8, 13).map((study, index) => {
                const handleAddToCart = () => {
                  if (isHome) {
                    navigation.push(`/contact`);
                    return;
                  }

                  handleAddOrRemoveProduct(study.id);
                };
                const validateInCart = validateProductInCart(study.id);

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-shadow duration-300'
                  >
                    <div className='w-full h-56 relative'>
                      <Image
                        src={study.image}
                        alt={study.name}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className='p-6 flex flex-col flex-grow'>
                      <h3 className='text-xl font-bold text-slate-800 mb-3'>
                        {study.name}
                      </h3>
                      <p className='text-gray-600 mb-4 flex-grow'>
                        {study.description}
                      </p>
                      <p
                        href='#'
                        className='flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition-colors'
                      >
                        {study.price} USD
                      </p>
                      {/* Add to cart button */}
                      <button
                        className={`${
                          validateInCart ? 'bg-red-600' : 'bg-amber-600'
                        } text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors mt-5`}
                        onClick={handleAddToCart}
                      >
                        {isHome
                          ? 'Get a quote'
                          : validateInCart
                          ? 'Remove from Cart'
                          : 'Add to Cart'}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
