'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Users, Zap, Globe, Award, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Building maintainable, scalable applications with modern patterns.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing every interaction for lightning-fast user experiences.',
  },
  {
    icon: Globe,
    title: 'AI Integration',
    description: 'Implementing intelligent features with LLMs and modern APIs.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Designing intuitive interfaces that users love.',
  },
  {
    icon: Award,
    title: 'Quality Code',
    description: 'Writing tested, type-safe code with TypeScript.',
  },
  {
    icon: Rocket,
    title: 'Modern Stack',
    description: 'React, Next.js, Tailwind, and cutting-edge tools.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Crafting{' '}
            <span className="gradient-text">Digital Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/60 max-w-3xl mx-auto"
          >
            I&apos;m a passionate Frontend Software Engineer based in Lagos, Nigeria, specializing in 
            building exceptional digital products that combine beautiful design with robust engineering.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-4 lg:mb-6">
              My Journey
            </h3>
            <div className="space-y-4 lg:space-y-6 text-foreground/70">
              <p className="text-sm sm:text-base">
                With a strong foundation in computer science and a passion for creating intuitive 
                user interfaces, I&apos;ve spent the last 2+ years honing my skills in modern frontend 
                development.
              </p>
              <p className="text-sm sm:text-base">
                I specialize in building scalable, high-performance web applications using React, 
                Next.js, and TypeScript. My focus is on creating AI-driven user experiences that 
                solve real-world problems through clean interfaces and reliable engineering.
              </p>
              <p className="text-sm sm:text-base">
                I believe in writing code that&apos;s not just functional, but maintainable, performant, 
                and delightful to use. Every pixel matters, and every interaction should feel 
                intentional and smooth.
              </p>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 lg:mt-10 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-card-bg border border-card-border gradient-border"
            >
              <h4 className="font-display font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                <Award className="text-accent" size={18} />
                Education
              </h4>
              <div className="space-y-1 lg:space-y-2">
                <p className="font-medium text-sm sm:text-base">B.Sc. Computer Science</p>
                <p className="text-xs sm:text-sm text-foreground/60">University of the People (2025 - 2027)</p>
                <p className="text-xs sm:text-sm text-foreground/50">Currently Pursuing</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-card-bg border border-card-border card-hover group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-accent/10 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={16} />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 lg:mb-2">{item.title}</h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-foreground/60 hidden sm:block">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-card-border pt-8 lg:pt-12"
        >
          <h3 className="text-center text-xs sm:text-sm text-foreground/50 uppercase tracking-widest mb-6 lg:mb-8">
            Certifications & Achievements
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                'Frontend Developer Certificate - ALX Africa',
                'Professional Foundation Certificate - ALX Africa',
                'PMI Kickoff Badge - Project Management Institute',
              ].map((cert, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20 mx-2 sm:mx-3 lg:mx-4"
                >
                  <Award className="text-accent flex-shrink-0" size={14} />
                  <span className="font-medium text-xs sm:text-sm">{cert}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                'Frontend Developer Certificate - ALX Africa',
                'Professional Foundation Certificate - ALX Africa',
                'PMI Kickoff Badge - Project Management Institute',
              ].map((cert, i) => (
                <div
                  key={`dup-${i}`}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20 mx-2 sm:mx-3 lg:mx-4"
                >
                  <Award className="text-accent flex-shrink-0" size={14} />
                  <span className="font-medium text-xs sm:text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
