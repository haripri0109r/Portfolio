import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: 'B.E. CSE',
      institution: 'Sri Eshwar College of Engineering',
      cgpa: '7.59 (upto 2nd Sem)',
      year: '2024-2028'
    },
    {
      degree: 'HSC',
      institution: 'Ambal Matric Hr Sec School',
      cgpa: '83.2%',
      year: '2023-2024'
    },
    {
      degree: 'SSLC',
      institution: 'Ambal Matric Hr Sec School',
      cgpa: '81.6%',
      year: '2021-2022'
    }
  ];



  return (
    <section className="py-20 px-5 bg-darkBg" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-12 relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded">
          About Me
        </h2>

        <div className="mb-16">
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-slate-400 mb-5">
              I'm a passionate Full Stack Developer and competitive programmer currently pursuing 
              my B.E. in Computer Science Engineering at Sri Eshwar College of Engineering. With a 
              strong foundation in data structures, algorithms, and modern web technologies, I love 
              building innovative solutions to real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              I have experience in developing full-stack applications using React, Node.js, MongoDB, 
              and various other technologies. My journey in coding has led me to solve 500+ problems 
              across platforms like LeetCode, Codeforces, and CodeChef, achieving notable rankings 
              and contest wins.
            </p>
          </motion.div>

        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 flex items-center justify-center gap-4 text-slate-50">
            <FaGraduationCap className="text-primary" /> Education
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-cardBg p-8 rounded-2xl border-l-4 border-primary transition-all duration-300 border border-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2.5">
                  <h4 className="text-xl text-slate-50 font-bold">{edu.degree}</h4>
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {edu.year}
                  </span>
                </div>
                <p className="text-slate-400 text-base mb-2.5">{edu.institution}</p>
                <p className="text-accent font-semibold text-lg">{edu.cgpa}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
