import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-violet-900/90 to-purple-900/90 backdrop-blur-lg rounded-xl p-6 border border-violet-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-violet-300 hover:text-violet-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
              {service.title}
            </h2>
            
            <p className="text-violet-200 mb-6">{service.description}</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-violet-100 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-violet-300">
                      <span className="text-violet-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-violet-100 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-violet-300">
                      <span className="text-violet-400 mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}