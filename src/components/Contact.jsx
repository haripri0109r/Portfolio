import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedDivider from './AnimatedDivider.jsx';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_h52ndu9',
        'template_1bng84f',
        formRef.current,
        'Y9j4PjFwL8Zg4E0Nq'
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <>
      <AnimatedDivider color="#F0F0EB" />
      <section id="contact" className="section-light min-h-[80vh] flex flex-col justify-center">
        <div className="container-custom">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="heading-section">LET'S TALK</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-60">Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full bg-transparent border-b border-dark/20 py-3 focus:outline-none focus:border-dark transition-colors font-body text-lg"
                    placeholder="Haripriyan A"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-60">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full bg-transparent border-b border-dark/20 py-3 focus:outline-none focus:border-dark transition-colors font-body text-lg"
                    placeholder="haripri0109r@gmail.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest opacity-60">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-dark/20 py-3 focus:outline-none focus:border-dark transition-colors font-body text-lg resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              
              <div className="pt-4 flex items-center justify-between">
                <span className="text-sm font-mono text-green-600">
                  {success ? "Message sent successfully! ✓" : ""}
                </span>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-pill-dark"
                >
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
              <div className="pt-8 text-center">
                <p className="text-sm font-mono opacity-60 mb-4">Or connect directly via email:</p>
                <a href="mailto:haripri0109r@gmail.com" className="btn-pill-dark inline-block">
                  SEND AN EMAIL
                </a>
              </div>
            </motion.form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
