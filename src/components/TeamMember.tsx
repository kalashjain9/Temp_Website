import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  delay?: number;
}

export function TeamMember({
  name,
  role,
  email,
  phone,
  github,
  linkedin,
  twitter,
  delay = 0,
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20"
    >
      <h3 className="text-xl font-bold text-violet-100 mb-2">{name}</h3>
      <p className="text-violet-300 mb-4">{role}</p>
      <div className="space-y-2">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors"
          >
            <Mail size={16} />
            <span>{email}</span>
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors"
          >
            <Phone size={16} />
            <span>{phone}</span>
          </a>
        )}
        <div className="flex gap-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-100 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-100 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-100 transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}