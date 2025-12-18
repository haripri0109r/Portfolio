import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard.jsx';
import Marquee from './Marquee.jsx';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaDatabase, FaBrain
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiDjango, SiFlask, SiMysql, 
  SiCplusplus, SiVisualstudiocode 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiCplusplus />, level: 90 },
        { name: 'C++', icon: <SiCplusplus />, level: 90 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 88 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
        { name: 'Express', icon: <SiExpress />, level: 80 },
        { name: 'MERN Stack', icon: <FaReact />, level: 82 }
      ]
    },
    {
      title: 'Databases & Backend',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'Django', icon: <SiDjango />, level: 75 },
        { name: 'Flask', icon: <SiFlask />, level: 78 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', icon: <FaBrain />, level: 80 },
        { name: 'Deep Learning', icon: <FaBrain />, level: 75 },
        { name: 'TensorFlow', icon: <FaPython />, level: 78 },
        { name: 'Data Analysis', icon: <FaDatabase />, level: 82 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'VS Code', icon: <SiVisualstudiocode />, level: 90 },
        { name: 'Software Engineering', icon: <FaDatabase />, level: 82 },
        { name: 'Canva', icon: <FaDatabase />, level: 75 },
        { name: 'Microsoft Word', icon: <FaDatabase />, level: 85 },
        { name: 'Colab', icon: <FaPython />, level: 80 },
        { name: 'GitLab', icon: <FaGitAlt />, level: 80 }
      ]
    }
  ];

  const codingProfiles = [
    {
      platform: 'Skill Rack',
      problems: '1100+',
      rank: '308 Bronzes | 10+ Certificates',
      color: '#FFA116',
      url: 'https://www.skillrack.com/faces/resume.xhtml?id=514928&key=0d345d3d9db64288c59d67b5a48ac479abc78610'
    },
    {
      platform: 'LeetCode',
      problems: '240+',
      rank: 'Max Rating: 1617 | Rank: 164,653',
      color: '#FFA116',
      url: 'https://leetcode.com/u/Haripriyan_2307/'
    },
    {
      platform: 'CodeChef',
      problems: '40+',
      rank: 'Haripriyan A',
      color: '#5B4638',
      url: 'https://www.codechef.com/users/leap_list_99'
    },
    {
      platform: 'Coding Ninjas',
      problems: '35+',
      rank: 'Haripriyan A',
      color: '#00EA64',
      url: 'https://www.naukri.com/code360/profile/3b1c3321-8310-40b5-a4af-085ff5340ada'
    }
  ];

  return (
    <section className="py-20 px-5 bg-darkBg" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="mb-8">
          <Marquee items={[
            'React', 'Tailwind', 'Framer Motion', 'Node.js', 'Express', 'MongoDB',
            'Python', 'Django', 'C++', 'Java', 'Git', 'MySQL'
          ]} />
        </div>

        <div className="grid gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="card p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl text-slate-50 mb-8 font-bold relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-8 before:bg-gradient-to-b before:from-primary before:to-secondary before:rounded">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <TiltCard
                    key={index}
                    strength={8}
                    className="bg-primary/5 p-5 rounded-xl flex items-center gap-5 transition-all duration-300 border border-primary/10 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 will-change-transform"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-4xl text-primary min-w-10">{skill.icon}</div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-slate-50 mb-2.5">{skill.name}</p>
                      <div className="w-full h-2 bg-primary/10 rounded-xl overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-xl relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-slate-50">
            Coding Profiles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-cardBg p-8 rounded-2xl text-center border-t-4 transition-all duration-300 border border-primary/10 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ borderTopColor: profile.color }}
              >
                <h4 className="text-2xl font-bold text-slate-50 mb-4">{profile.platform}</h4>
                <p className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2.5">
                  {profile.problems}
                </p>
                <p className="text-slate-400 text-base">{profile.rank}</p>
                {profile.url && (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block btn-outline btn-shine px-5 py-2 no-underline"
                  >
                    View Profile
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
