import React from 'react';
import { motion } from 'framer-motion';
import { internshipsData, achievementsData, codingProfilesData, certificationsData } from '../content.js';
import AnimatedDivider from './AnimatedDivider.jsx';

const Achievements = () => {
  return (
    <>
      <AnimatedDivider color="#1a1c23" />
      <section id="achievements" className="section-dark">
        <div className="container-custom">
          
          {/* Internships */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="heading-section border-b border-cream/20 pb-8">INTERNSHIP EXPERIENCES</h2>
            </motion.div>
            <div className="flex flex-col space-y-8">
              {internshipsData.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="list-row items-start flex-col md:flex-row px-4 -mx-4 rounded-xl">
                  <div className="w-full md:w-2/3">
                    <h3 className="list-row-title text-2xl md:text-3xl">{exp.role}</h3>
                    <p className="text-xl mt-2 font-display opacity-80">{exp.company}</p>
                    <p className="text-cream/60 mt-4 font-body leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-start md:justify-end mt-4 md:mt-0">
                    <span className="text-sm font-mono uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full h-fit">{exp.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="heading-section border-b border-cream/20 pb-8">ACHIEVEMENTS</h2>
            </motion.div>
            <div className="flex flex-col space-y-6">
              {achievementsData.map((ach, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cream/10 pb-4 px-4 -mx-4">
                  <h3 className="text-lg md:text-xl font-display font-medium">{ach.title}</h3>
                  <span className="text-sm font-mono text-cream/60 mt-2 md:mt-0">{ach.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="heading-section border-b border-cream/20 pb-8">CODING PROFILES</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingProfilesData.map((profile, index) => (
                <motion.a href={profile.link} target="_blank" rel="noreferrer" key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="block bg-white/5 p-6 rounded-xl hover:bg-white/10 transition cursor-pointer">
                  <h3 className="text-xl font-display font-medium mb-3">{profile.platform}</h3>
                  <p className="text-sm text-cream/70 font-mono leading-relaxed">{profile.details}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="heading-section border-b border-cream/20 pb-8">CERTIFICATIONS</h2>
            </motion.div>
            <div className="flex flex-col space-y-6">
              {certificationsData.map((cert, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cream/10 pb-4 px-4 -mx-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-medium">{cert.title}</h3>
                    <p className="text-cream/60 font-mono mt-1 text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-mono text-cream/60 mt-2 md:mt-0">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Achievements;
