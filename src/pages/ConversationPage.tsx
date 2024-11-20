import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Upload, User, Bot, X } from 'lucide-react';
import VoiceWidget from '../components/VoiceWidget';
import ProgressBar from '../components/ProgressBar';

const ConversationPage = () => {
  const navigate = useNavigate();
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleStartConversation = () => {
    if (isConversationActive) {
      setIsConversationActive(false);
      navigate('/results');
    } else {
      setIsConversationActive(true);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type and size
    const validTypes = ['audio/mp3', 'audio/wav'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      alert('Please upload only MP3 or WAV files.');
      return;
    }

    if (file.size > maxSize) {
      alert('File size must be less than 10MB.');
      return;
    }

    // Simulate file upload
    setIsUploading(true);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadProgress(0);
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-8 w-8 text-gray-700" />
                <div>
                  <h3 className="font-medium text-gray-900">You</h3>
                  <p className="text-sm text-gray-500">
                    {isConversationActive ? 'Speaking...' : 'Ready to Start'}
                  </p>
                </div>
              </div>
              <ProgressBar
                isActive={isConversationActive}
                label="Your Activity"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-indigo-600" />
                <div>
                  <h3 className="font-medium text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-gray-500">
                    {isConversationActive ? 'Listening...' : 'Standing By'}
                  </p>
                </div>
              </div>
              <ProgressBar
                isActive={isConversationActive}
                label="AI Response"
              />
            </div>
          </div>

          {/* Controls Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartConversation}
                className={`w-full max-w-md flex items-center justify-center space-x-2 py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                  isConversationActive ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                <Mic className="h-5 w-5" />
                <span>{isConversationActive ? 'Stop Conversation' : 'Start Conversation'}</span>
              </motion.button>
              <p className="text-sm text-gray-500">Time limit: 3 minutes</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".mp3,.wav"
                className="hidden"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="w-full max-w-md flex items-center justify-center space-x-2 py-3 px-6 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Conversation</span>
              </motion.button>
              <p className="text-sm text-gray-500">
                Upload MP3 or WAV file. Max size: 10MB
              </p>
            </div>

            {isUploading && (
              <div className="w-full max-w-md mx-auto">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Time limit: 1 minute, file size limit: 10MB for uploads
            </p>
          </div>
        </div>
      </div>

      {/* Voice Widget */}
      <VoiceWidget isActive={isConversationActive} />
    </div>
  );
};

export default ConversationPage;