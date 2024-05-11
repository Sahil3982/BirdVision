import React from "react";

const Rating = () => {
  return (
    <>
      <div>
        <strong>Rating:</strong>
        <span className="text-yellow-400">★★★★☆</span> (4.5)
      </div>

      <div>
        <h2>Reviews:</h2>
        <div>
          <strong>User 1:</strong> Very comfortable for wfh .. Spacious. Best
          purchase
        </div>
        <div>
          <strong>User 2:</strong> Better than Expectation. More than satisfied.
          Packaging was Excellent.
        </div>
      </div>
    </>
  );
};

export default Rating;
