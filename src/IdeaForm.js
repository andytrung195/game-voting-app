import React, { useState } from 'react';

const IdeaForm = ({ onNewIdea }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onNewIdea(description.trim());
      setDescription(''); // Clear the input after submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 p-4 border border-gray-300 rounded-lg bg-gray-50"
    >
      <h3 className="text-lg font-semibold mb-3">Submit a New Game Idea 💡</h3>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your amazing game idea description here..."
        rows="4"
        className="w-full p-2 mb-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white border-none rounded cursor-pointer hover:bg-green-600 transition-colors duration-200"
      >
        Submit Idea
      </button>
    </form>
  );
};

export default IdeaForm;
