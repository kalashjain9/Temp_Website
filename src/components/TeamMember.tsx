import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

interface TeamMemberProps {
  photo: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  delay: number;
}

export function TeamMember({
  photo,
  name,
  role,
  email,
  phone,
  github,
  linkedin,
  twitter,
  delay,
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-4 border border-violet-500/20 "
    >
      <div className="flex justify-center mb-4 ">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-full border-4 border-violet-400 shadow-lg transition duration-300 transform hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-bold text-violet-100 mb-2">{name}</h2>
      <p className="text-violet-300 mb-4">{role}</p>

      <div className="space-y-2 w-64">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-start gap-2 text-violet-300 hover:text-violet-100 transition-colors w-full"
          >
            <Mail size={20} className="flex-shrink-0" />{" "}
            {/* Prevent shrinking */}
            <span className="break-all">{email}</span>
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors"
          >
            <Phone size={20} />
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
