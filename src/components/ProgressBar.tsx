import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  isActive: boolean;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive, label }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {isActive ? 'Active' : 'Ready'}
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        {isActive && (
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProgressBar;