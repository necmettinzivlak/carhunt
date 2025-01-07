import React from 'react';

interface MessageDisplayProps {
  message: string;
  messageType: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({
  message,
  messageType,
}) => {
  return (
    message && (
      <div
        className={`p-4 rounded-lg ${
          messageType === 'success'
            ? 'bg-green-100 text-green-700'
            : messageType === 'error'
            ? 'bg-red-100 text-red-700'
            : 'bg-blue-100 text-blue-700'
        } animate-fadeScale`}
      >
        {message}
      </div>
    )
  );
};

export default MessageDisplay;