import React from 'react';

interface VoiceWidgetProps {
  isActive: boolean;
}

const VoiceWidget: React.FC<VoiceWidgetProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <iframe
      id="audio_iframe"
      src="https://widget.synthflow.ai/widget/v2/1732035369433x639979748453412900/1732035369319x468761323859220300"
      allow="microphone"
      width="200"
      height="300"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        background: 'transparent',
        border: 'none',
        zIndex: 999,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default VoiceWidget;