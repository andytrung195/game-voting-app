import { UPVOTE, DOWNVOTE, NO_VOTE } from './constants';

const IdeaCard = ({ idea, userVoteStatus, onVote, orderNumber }) => {
  const { id, description, upvotes, downvotes } = idea;

  const handleVote = (voteType) => {
    let newVoteStatus;

    if (userVoteStatus === voteType) {
      // Toggling off the current vote
      newVoteStatus = NO_VOTE;
    } else {
      // Placing a brand new vote or switching vote
      newVoteStatus = voteType;
    }

    onVote(id, newVoteStatus);
  };

  const isUpvoted = userVoteStatus === UPVOTE;
  const isDownvoted = userVoteStatus === DOWNVOTE;

  const upvoteButtonClasses = `px-3 py-2 mr-2 text-white border-none rounded cursor-pointer transition-all duration-200 hover:-translate-y-0.5 ${
    isUpvoted ? 'bg-yellow-500' : 'bg-blue-500 hover:bg-blue-600'
  }`;

  const downvoteButtonClasses = `px-3 py-2 text-white border-none rounded cursor-pointer transition-all duration-200 hover:-translate-y-0.5 ${
    isDownvoted ? 'bg-yellow-500' : 'bg-red-500 hover:bg-red-600'
  }`;

  return (
    <div className="border border-gray-200 p-5 mb-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Order Number and Idea Description */}
      <div className="mb-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
            {orderNumber}
          </span>
          <p className="m-0 text-base leading-relaxed   text-gray-800 break-words flex-1">
            {description}
          </p>
        </div>
      </div>

      {/* Vote Stats and Actions */}
      <div className="flex flex-row justify-between items-center flex-wrap gap-2">
        {/* Vote Statistics */}
        <div className="flex gap-5 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <span className="text-green-500 text-lg">👍</span>
            <strong className="text-green-500">{upvotes}</strong>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-red-500 text-lg">👎</span>
            <strong className="text-red-500">{downvotes}</strong>
          </span>
        </div>

        {/* Vote Buttons */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleVote(UPVOTE)}
            className={`${upvoteButtonClasses} text-sm font-medium min-w-24`}
            aria-pressed={isUpvoted}
          >
            {isUpvoted ? 'Upvoted! 👍' : 'Upvote 👍'}
          </button>
          <button
            onClick={() => handleVote(DOWNVOTE)}
            className={`${downvoteButtonClasses} text-sm font-medium min-w-24`}
            aria-pressed={isDownvoted}
          >
            {isDownvoted ? 'Downvoted! 👎' : 'Downvote 👎'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
