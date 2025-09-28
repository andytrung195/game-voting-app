import IdeaForm from './IdeaForm';
import SearchAndSort from './SearchAndSort';
import IdeaCard from './IdeaCard';
import { NO_VOTE } from './constants';

const MainView = ({
  handleNewIdea,
  filteredAndSortedIdeas,
  userVotes,
  handleVote,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}) => {
  console.log(filteredAndSortedIdeas);
  return (
    <>
      <IdeaForm onNewIdea={handleNewIdea} />

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-4">
        All Game Ideas ({filteredAndSortedIdeas.length})
      </h2>

      <SearchAndSort
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="idea-list">
        {filteredAndSortedIdeas.map((idea, index) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            userVoteStatus={userVotes[idea.id] || NO_VOTE}
            onVote={handleVote}
            orderNumber={index + 1}
          />
        ))}
        {!filteredAndSortedIdeas.length && (
          <p className="text-center text-gray-600 py-8">
            No ideas found matching your criteria. Be the first to submit one!
          </p>
        )}
      </div>
    </>
  );
};

export default MainView;
