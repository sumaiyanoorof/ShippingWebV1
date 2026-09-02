import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Globe2, Shield, Clock } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in every interaction, building lasting trust with our clients.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior service quality and continuously exceeding customer expectations.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority. We tailor solutions to meet your unique logistics requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to optimize supply chain efficiency and visibility.',
    },
  ];

  const milestones = [
    { year: '2004', title: 'Company Founded', description: 'Started with a vision to revolutionize global logistics' },
    { year: '2010', title: 'Global Expansion', description: 'Expanded operations to 50 countries worldwide' },
    { year: '2015', title: '100K Shipments', description: 'Achieved milestone of 100,000 successful deliveries' },
    { year: '2020', title: 'Technology Integration', description: 'Launched advanced tracking and automation systems' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a top-tier global logistics provider' },
  ];

  const team = [
    {
      name: 'Robert Chen',
      position: 'Chief Executive Officer',
      description: '20+ years experience in international logistics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Sarah Williams',
      position: 'Chief Operations Officer',
      description: 'Expert in supply chain optimization',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of Global Freight',
      description: 'Specializes in ocean and air freight solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
    {
      name: 'Emily Thompson',
      position: 'Customer Relations Director',
      description: 'Dedicated to exceptional client experiences',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 backdrop-blur-sm">
                About SwiftShip LLC
              </span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl text-white mb-6">
              Leading the Future of Global Logistics
            </h1>
            <p className="text-lg text-gray-300">
              With over two decades of excellence, we connect businesses worldwide through innovative shipping solutions and unwavering commitment to service quality.
            </p>
          </motion.div>
        </div>
      </section>

            {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide seamless, reliable, and innovative logistics solutions that empower businesses to reach global markets efficiently. We strive to be the preferred shipping partner through exceptional service, cutting-edge technology, and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-12 rounded-2xl"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the world's most trusted and innovative logistics company, setting industry standards for reliability, sustainability, and customer satisfaction. We envision a future where global trade is accessible, efficient, and environmentally responsible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Built on Strong Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Two Decades of Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to global operations, our journey reflects dedication and innovation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block w-full lg:w-auto">
                      <div className="text-3xl text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence in global logistics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Globe2, number: '150+', label: 'Countries' },
              { icon: Users, number: '5,000+', label: 'Clients' },
              { icon: Clock, number: '24/7', label: 'Support' },
              { icon: Award, number: '20+', label: 'Years' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

