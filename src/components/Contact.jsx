import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Email service not configured. Please set EmailJS keys in .env');
      return;
    }

    setSending(true);
    setStatus('');
    try {
      const templateParams = {
        // Common variables used by EmailJS default templates
        from_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        // Variables matching your custom template placeholders
        name: formData.name,
        email: formData.email,
        time: new Date().toLocaleString(),
      };
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 6000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'haripri0109r@gmail.com',
      link: 'mailto:haripri0109r@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9787586293',
      link: 'tel:+919787586293'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Haripriyan A',
      link: 'https://www.linkedin.com/in/haripriyana677?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Haripriyan',
      link: 'https://github.com/haripri0109r'
    }
  ];

  return (
    <section className="py-20 px-5 bg-darkBg" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-slate-50 mb-8 font-bold">Let's Connect</h3>
            <div className="flex flex-col gap-5">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="card p-6 rounded-xl flex items-center gap-5 no-underline transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:translate-x-2.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-2xl">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-1">{info.title}</p>
                    <p className="text-slate-50 text-lg font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-primary/5 border-2 border-primary/10 rounded-lg text-slate-50 text-base font-inter transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/10"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-primary/5 border-2 border-primary/10 rounded-lg text-slate-50 text-base font-inter transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/10"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-primary/5 border-2 border-primary/10 rounded-lg text-slate-50 text-base font-inter transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/10"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-primary/5 border-2 border-primary/10 rounded-lg text-slate-50 text-base font-inter transition-all duration-300 resize-y min-h-[150px] focus:outline-none focus:border-primary focus:bg-primary/10"
                ></textarea>
              </div>

              <button type="submit" disabled={sending} className={`btn-primary btn-shine group flex items-center gap-2.5 self-start ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}>
                <span>{sending ? 'Sending…' : 'Send Message'}</span>
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {status && (
                <motion.p 
                  className="text-accent font-semibold text-center p-4 bg-accent/10 rounded-lg mt-2.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
