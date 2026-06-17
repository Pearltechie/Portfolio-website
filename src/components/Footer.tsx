'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './icons/SocialIcons';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Pearltechie', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/idowu-pelumi', icon: LinkedinIcon },
  { name: 'Twitter', href: 'https://x.com/Pelumiidow94016', icon: TwitterIcon },
  { name: 'Email', href: 'mailto:jehofawapelumi@gmail.com', icon: MailIcon },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-card-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <a href="#" className="text-3xl font-bold font-display gradient-text">
              &lt;PI /&gt;
            </a>
            <p className="text-foreground/50 mt-2">
              Frontend Software Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-card-bg border border-card-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="line my-10" />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50"
        >
          <p>
            © {currentYear} Pelumi Idowu. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent-secondary animate-pulse" /> in Lagos, Nigeria
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
