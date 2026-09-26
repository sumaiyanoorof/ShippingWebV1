import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Warehouse, Package, Globe2, BarChart3, Clock, Shield, ArrowRight } from 'lucide-react';
import shipImage1 from '../assets/shipImage5.jpg';
import shipImage2 from '../assets/shipImage2.jpg';
import shipImage3 from '../assets/shipImage10.jpg';
import shipImage4 from '../assets/shipImage3.jpg';


export default function ServicePage() {
  const services = [
    {
      id: 'ocean',
      icon: Ship,
      title: 'Ocean Freight',
      tagline: 'Cost-effective global shipping solutions',
      description: 'Our ocean freight services provide reliable and economical solutions for large cargo volumes. With partnerships across major shipping lines and ports worldwide, we ensure your goods reach their destination safely and on schedule.',
      features: [
        'Full Container Load (FCL) & Less than Container Load (LCL)',
        'Door-to-door delivery services',
        'Customs clearance and documentation',
        'Cargo insurance and tracking',
        'Specialized handling for oversized cargo',
      ],
      image: shipImage2,
      color: 'blue',
    },
    {
      id: 'air',
      icon: Plane,
      title: 'Air Freight',
      tagline: 'Express delivery for time-critical shipments',
      description: 'When time is of the essence, our air freight services deliver speed and reliability. We offer comprehensive air cargo solutions with access to major airlines and airports globally, ensuring your urgent shipments arrive on time.',
      features: [
        'Express and priority air services',
        'Consolidated and charter flights',
        'Temperature-controlled shipping',
        'Dangerous goods handling',
        'Real-time tracking and updates',
      ],
      image: 'https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBsYW5lJTIwYWlycG9ydHxlbnwxfHx8fDE3NjU1OTk3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'sky',
    },
    {
      id: 'land',
      icon: Truck,
      title: 'Land Transportation',
      tagline: 'Efficient ground shipping across regions',
      description: 'Our land transportation network covers extensive routes across continents, providing flexible and cost-effective solutions for domestic and cross-border shipments. We ensure timely delivery with advanced fleet management.',
      features: [
        'Full Truckload (FTL) & Less than Truckload (LTL)',
        'Intermodal transportation solutions',
        'Cross-border customs expertise',
        'Refrigerated and specialized transport',
        'GPS tracking and route optimization',
      ],
      image: shipImage3,
      color: 'cyan',
    },
    {
      id: 'warehousing',
      icon: Warehouse,
      title: 'Warehousing & Logistics',
      tagline: 'Secure storage and inventory management',
      description: 'Our state-of-the-art warehousing facilities offer comprehensive storage solutions with advanced inventory management systems. From short-term storage to complex distribution operations, we handle it all with precision.',
      features: [
        'Climate-controlled storage facilities',
        'Advanced inventory management systems',
        'Pick, pack, and distribution services',
        'Quality control and inspection',
        'Value-added logistics services',
      ],
      image: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NTI4MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'teal',
    },
    {
      id: 'supply-chain',
      icon: BarChart3,
      title: 'Supply Chain Solutions',
      tagline: 'End-to-end logistics optimization',
      description: 'Streamline your entire supply chain with our integrated solutions. We provide strategic planning, execution, and continuous optimization to enhance efficiency and reduce costs across your logistics operations.',
      features: [
        'Supply chain consulting and design',
        'Vendor and supplier management',
        'Demand forecasting and planning',
        'Risk management and compliance',
        'Performance analytics and reporting',
      ],
      image: shipImage4,
      color: 'indigo',
    },
  ];

  const additionalServices = [
    { icon: Package, title: 'Custom Packaging', description: 'Specialized packaging for fragile and high-value items' },
    { icon: Globe2, title: 'International Trade', description: 'Expert guidance on import/export regulations' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service and tracking' },
    { icon: Shield, title: 'Cargo Insurance', description: 'Comprehensive coverage for your shipments' },
  ];

    return (
    <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative min-h-170 h-[min(860px,100svh)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src={shipImage1}
                  alt="Cargo ship at sea"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,29,48,0.94)_0%,rgba(16,42,67,0.72)_54%,rgba(18,184,156,0.18)_100%)]" />
              </div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 backdrop-blur-sm">
                       Our Services
                    </span>
                  </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-10 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                   Comprehensive Logistics Solutions
                  </motion.h1>
                  <motion.p
                    className="text-base sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    From ocean to air, land to warehousing – we provide end-to-end shipping solutions tailored to your business needs.
                  </motion.p>
      
                </motion.div>
              </div>
      
              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 mb-6"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                  <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                </div>
              </motion.div>
            </section>
      
      

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`${isEven ? '' : 'lg:col-start-2'}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl text-slate-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-lg text-blue-600 mb-4">{service.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

            {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Additional Services
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Value-Added Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your shipping experience with our complementary services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our logistics experts are ready to design a tailored shipping strategy for your unique requirements.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
