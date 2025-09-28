import React, { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom';
import MainView from './MainView';
import {
  loadInitialIdeas,
  loadInitialVotes,
  saveIdeas,
  saveVotes,
} from './storage';
import { UPVOTE, DOWNVOTE, NO_VOTE } from './constants';

const App = () => {
  // State and Persistence
  const [ideas, setIdeas] = useState(loadInitialIdeas);
  const [userVotes, setUserVotes] = useState(loadInitialVotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    saveIdeas(ideas);
  }, [ideas]);
  useEffect(() => {
    saveVotes(userVotes);
  }, [userVotes]);

  // Idea Submission
  const handleNewIdea = (description) => {
    const newIdea = {
      id: uuidv4(),
      description,
      upvotes: 0,
      downvotes: 0,
    };
    setIdeas([newIdea, ...ideas]);
  };

  // Voting Logic
  const handleVote = (ideaId, newVoteStatus) => {
    const prevVoteStatus = userVotes[ideaId] || NO_VOTE;

    // 1. Update the ideas list (the counts)
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) => {
        if (idea.id === ideaId) {
          let upChange = 0;
          let downChange = 0;

          // Remove previous vote's effect
          if (prevVoteStatus === UPVOTE) upChange = -1;
          if (prevVoteStatus === DOWNVOTE) downChange = -1;

          // Apply new vote's effect
          if (newVoteStatus === UPVOTE) upChange = 1;
          if (newVoteStatus === DOWNVOTE) downChange = 1;

          return {
            ...idea,
            upvotes: idea.upvotes + upChange,
            downvotes: idea.downvotes + downChange,
          };
        }
        return idea;
      })
    );

    // 2. Update the user's vote status
    setUserVotes((prevVotes) => ({
      ...prevVotes,
      [ideaId]: newVoteStatus,
    }));
  };

  // Search and Sort Filtering
  const filteredAndSortedIdeas = useMemo(() => {
    let filtered = ideas;
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = ideas.filter((idea) =>
        idea.description.toLowerCase().includes(lowerSearchTerm)
      );
    }
    return filtered.sort((a, b) => {
      if (sortBy === 'upvotes') return b.upvotes - a.upvotes;
      if (sortBy === 'downvotes') return b.downvotes - a.downvotes;
      return 0;
    });
  }, [ideas, searchTerm, sortBy]);

  return (
    <div className="max-w-4xl mx-auto my-10 px-5 font-sans bg-white rounded-xl py-3">
      <div className="flex items-center gap-2 text-3xl font-bold text-purple-600 mb-8">
        <h1>Game Idea Voting Platform</h1>
        <span className="text-3xl">🎮</span>
      </div>

      {/* Route setup */}
      <Routes>
        <Route
          path="/"
          element={
            <MainView
              handleNewIdea={handleNewIdea}
              filteredAndSortedIdeas={filteredAndSortedIdeas}
              userVotes={userVotes}
              handleVote={handleVote}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
