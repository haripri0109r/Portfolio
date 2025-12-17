import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate} from 'react-icons/fa';
import TiltCard from './TiltCard.jsx';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'LeetCode Top Performer',
      description: 'Been Consistent in Leet-code platform for more than 140 Days and attended 33 contests',
      date: 'APR 2025',
      color: '#FFA116'
    },
    {
      icon: <FaMedal />,
      title: 'CODELEE 1st Place',
      description: 'Secured 1st place in CODELEE (Leetcode) coding contest in Semester 2',
      date: 'SEPT 2025',
      color: '#10b981'
    },
    {
      icon: <FaTrophy />,
      title: 'Web Development Hackathon',
      description: 'Participated in Web Development Hackathon-Tunedale (Online)',
      date: 'JULY 2025',
      color: '#6366f1'
    },
    {
      icon: <FaTrophy />,
      title: 'KEC Hackathon',
      description: 'Participated in KEC, Erode (Online)',
      date: 'AUG 2025',
      color: '#ec4899'
    }
  ];

  const certifications = [
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      platform: 'Udemy',
      date: 'MAY 2025'
    },
    {
      title: 'Python Complete Masterclass',
      platform: 'Udemy',
      date: 'MAR 2025'
    },
    {
      title: 'Machine Learning Foundations',
      platform: 'Udemy',
      date: 'MAR 2025'
    },
    {
      title: 'C++ Training Completion',
      platform: 'IIT Bombay',
      date: 'DEC 2025'
    },
    {
      title: 'C Training',
      platform: 'IIT Bombay',
      date: 'DEC 2025'
    }
  ];

  return (
    <section className="py-20 px-5 bg-darkBg" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">Achievements & Certifications</h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <TiltCard
                key={index}
                strength={6}
                className="card card-gradient-border p-8 flex gap-6 items-start transition-all duration-300 relative overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-primary before:to-secondary before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 will-change-transform"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl min-w-15 flex items-center justify-center" style={{ color: achievement.color }}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2.5 flex-wrap gap-2.5">
                    <h3 className="text-2xl text-slate-50 font-bold">{achievement.title}</h3>
                    <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-base">{achievement.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-10 flex items-center justify-center gap-4 text-slate-50">
              <FaCertificate className="text-primary" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="card p-6 rounded-xl flex gap-5 items-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl text-primary min-w-12.5 bg-primary/10 w-15 h-15 rounded-xl flex items-center justify-center">
                    <FaCertificate />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-slate-50 mb-2.5 font-semibold leading-snug">{cert.title}</h4>
                    <div className="flex justify-between items-center flex-wrap gap-2.5">
                      <span className="text-accent font-semibold text-sm">{cert.platform}</span>
                      <span className="text-slate-400 text-sm">{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
