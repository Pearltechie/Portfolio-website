'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, Sparkles, Zap, Code2 } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Available for Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                Hi, I&apos;m{' '}
                <span className="gradient-text">Pelumi Idowu</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground/80"
              >
                Frontend Software Engineer
              </motion.p>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="text-base sm:text-lg text-foreground/60 max-w-xl mx-auto lg:mx-0"
              >
                Specializing in React, Next.js, and TypeScript. I craft high-performance, 
                AI-powered web experiences that captivate users and drive results.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center justify-center gap-2 relative z-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <Zap size={18} />
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <Code2 size={18} />
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-12 border-t border-card-border"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    className="text-3xl font-display font-bold gradient-text"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image with Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary blur-2xl opacity-30 animate-pulse" />
            
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border border-dashed border-accent/30"
            />

            {/* Image Container */}
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border glow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder Avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white">PI</span>
                  </div>
                </div>
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 bg-card-bg border border-card-border rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Open to Work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-foreground/50 uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
