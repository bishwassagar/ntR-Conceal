import React from 'react';

function Message({ type, text }) {
  let bgColor;
  let textColor;

  switch (type) {
    case 'success':
      bgColor = 'bg-green-600';
      textColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-red-600';
      textColor = 'text-white';
      break;
    default:
      bgColor = 'bg-gray-800';
      textColor = 'text-gray-300';
  }

  return (
    <div className={`p-4 rounded-lg ${bgColor} ${textColor} mb-4`}>
      {text}
    </div>
  );
}

export default Message;
