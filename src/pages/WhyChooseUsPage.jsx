import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Clock, Shield, Award, TrendingUp, Users, 
  Zap, CheckCircle, Target, Headphones, Lock, Truck 
} from 'lucide-react';

export default function WhyChooseUsPage() {
  const mainFeatures = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Operating in over 150 countries with strategic partnerships across major ports, airports, and logistics hubs worldwide.',
      stats: '150+ Countries',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Industry-leading 98% on-time delivery rate backed by advanced tracking systems and optimized routing.',
      stats: '98% Success Rate',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Comprehensive insurance coverage and state-of-the-art security measures to protect your valuable cargo.',
      stats: '100% Insured',
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Over 20 years of excellence in international logistics with thousands of satisfied clients globally.',
      stats: '20+ Years',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Streamlined customs clearance and documentation for quick turnaround times.',
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Customized logistics strategies designed to meet your specific business needs.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service team available in multiple languages.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Competitive pricing with transparent billing and no hidden charges.',
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Advanced cybersecurity measures to protect your sensitive information.',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles and equipment with GPS tracking capabilities.',
    },
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Global Electronics Inc.',
      role: 'Supply Chain Director',
      quote: 'SwiftShip has transformed our international logistics operations. Their reliability and efficiency have helped us reduce shipping costs by 30% while improving delivery times.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
    },
    {
      name: 'Lisa Chen',
      company: 'Fashion Forward Ltd.',
      role: 'Operations Manager',
      quote: 'The team at SwiftShip goes above and beyond. Their customer service is exceptional, and they always find solutions to complex shipping challenges.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      company: 'Tech Innovations Co.',
      role: 'CEO',
      quote: 'We\'ve been working with SwiftShip for 5 years. Their global network and tracking technology give us complete visibility and peace of mind.',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400',
      rating: 5,
    },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'IATA Accredited',
    'C-TPAT Certified',
    'AEO Authorized',
    'Green Logistics Certified',
    'SOC 2 Compliant',
  ];

  const stats = [
    { number: '50,000+', label: 'Annual Shipments', icon: Truck },
    { number: '5,000+', label: 'Happy Clients', icon: Users },
    { number: '150+', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Customer Satisfaction', icon: Award },
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
                Why Choose Us
              </span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl text-white mb-6">
              Your Trusted Shipping Partner
            </h1>
            <p className="text-lg text-gray-300">
              Experience the difference of working with a logistics provider that prioritizes reliability, innovation, and customer success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Core Advantages
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading capabilities that ensure your cargo is in the best hands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-2xl text-blue-600">{feature.stats}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Additional Benefits
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              More Reasons to Choose SwiftShip
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

            {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Client Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses that trust us with their logistics needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Our Track Record Speaks for Itself
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Certifications
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Industry-Recognized Standards
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 p-4 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">{cert}</p>
              </motion.div>
            ))}
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust SwiftShip for their global logistics needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
