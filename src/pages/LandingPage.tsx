import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import { Mic, BarChart2, Users, PlayCircle, Upload, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Practice Sales with AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Get instant feedback on your sales conversations and improve your skills with our AI-powered training platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <button
              onClick={() => openModal('register')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Start Practice Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works: Perfect Your Sales in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PlayCircle className="h-12 w-12 text-indigo-600" />,
                title: "Practice or Upload",
                description: "Engage with AI customer simulators or upload your CRM sales calls for analysis and feedback."
              },
              {
                icon: <BarChart2 className="h-12 w-12 text-indigo-600" />,
                title: "Get Instant Analysis",
                description: "Receive detailed performance metrics and actionable insights to improve your sales approach."
              },
              {
                icon: <Users className="h-12 w-12 text-indigo-600" />,
                title: "Scale Across Your Team",
                description: "Implement consistent training across your entire sales team with CRM integration."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-12 w-12 text-indigo-600" />,
                title: "Risk-Free Sales Practice",
                points: ["Unlimited scenario practice", "Instant feedback", "Perfect your pitch"]
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-indigo-600" />,
                title: "AI-Powered Analytics",
                points: ["Key metrics analysis", "Personalized recommendations", "Benchmark against top performers"]
              },
              {
                icon: <Upload className="h-12 w-12 text-indigo-600" />,
                title: "Accelerated Team Growth",
                points: ["Reduced onboarding time", "Consistent messaging", "Scalable team training"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => openModal('register')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Try a Free Simulation
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;