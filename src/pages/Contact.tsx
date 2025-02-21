import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

export function Contact() {
  const contacts = [
    { href: "mailto:neuramindsai@gmail.com", icon: <Mail />, text: "neuramindsai@gmail.com" },
    { href: "https://wa.me/+918890713878", icon: <Phone />, text: "+91 8890713878" },
    { href: "https://www.instagram.com/neuramindsai/", icon: <Twitter />, text: "@neuramindsai" },
    { href: "https://www.linkedin.com/company/neuramindsai/", icon: <Linkedin />, text: "in/neuramindsai" },
    { href: "https://github.com/NeuraMindsAI", icon: <Github />, text: "/NeuraMindsAI" },
  ];

  return (
    <section className="min-h-screen pt-24 px-4 flex flex-col justify-center items-center ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            Get in touch with us to explore how AI can transform your business.
          </p>
        </motion.div>
      </div>
    
    
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 px-6 py-3 text-pink-300 bg-black rounded-full border-2 border-black shadow-lg hover:shadow-pink-400/50 hover:border-pink-300 transition-all text-lg font-bold"
          >
            <span className="text-xl">{contact.icon}</span>
            <span>{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

