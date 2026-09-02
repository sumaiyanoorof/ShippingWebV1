import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Ship, Plane, Truck, Warehouse, Globe, Clock, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0fGVufDF8fHx8MTc2NTU5OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Global Shipping Solutions',
      subtitle: 'Connecting continents through reliable ocean freight services',
    },
    {
      image: 'https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBsYW5lJTIwYWlycG9ydHxlbnwxfHx8fDE3NjU1OTk3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fast Air Freight',
      subtitle: 'Express delivery solutions for time-sensitive cargo',
    },
    {
      image: 'https://images.unsplash.com/photo-1624383828664-3a1c84526d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwaGlnaHdheXxlbnwxfHx8fDE3NjU1MjI1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Land Transportation',
      subtitle: 'Efficient ground shipping across regions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective shipping solutions for large cargo volumes across international waters.',
      color: 'blue',
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air cargo services for time-critical shipments worldwide.',
      color: 'sky',
    },
    {
      icon: Truck,
      title: 'Land Transportation',
      description: 'Reliable ground transportation for domestic and cross-border deliveries.',
      color: 'cyan',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Logistics',
      description: 'State-of-the-art storage facilities with comprehensive inventory management.',
      color: 'teal',
    },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Operating in over 150 countries with strategic partnerships worldwide.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% on-time delivery rate with real-time tracking capabilities.',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Industry-leading security measures and comprehensive insurance coverage.',
    },
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Two decades of excellence in international logistics and shipping.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Countries Served' },
    { number: '50K+', label: 'Shipments Annually' },
    { number: '98%', label: 'On-Time Delivery' },
    { number: '24/7', label: 'Customer Support' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

    return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 backdrop-blur-sm">
                      Premium Logistics Solutions
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity:  0.4 }}
                    className="text-lg sm:t1, y: 0 }}
                    transition={{ delay:ext-xl text-gray-300 mb-8"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Get a Quote
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                    <Link to="/service">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                      >
                        Our Services
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

                {/* Carousel Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-400 w-16' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of shipping and logistics services tailored to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

           {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Your Trusted Shipping Partner
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Delivering excellence through innovation, reliability, and customer-focused solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-blue-600/20 border border-blue-400/30 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

           {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a customized quote for your shipping needs. Our experts are ready to help you find the perfect logistics solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Request a Quote
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
  
