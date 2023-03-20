import React, { useState } from "react";
import { useGeneral } from "../../providers/GeneralProvider";

function VideoCard({ video, index, saveComments }) {
  const [comment, setComment] = useState("");
  const { questions } = useGeneral();
  const question = questions.find(
    (question) => question.id === video.questionId
  )?.question;

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSave = () => {
    saveComments(index, comment);
    setComment("");
  };
  return (
    <div className="card__container">
      <h3>{question}</h3>
      <video src={video?.src} controls />
      <div>
        <h4>Comments: </h4>
        <p>{video?.comments}</p>
      </div>
      <textarea
        placeholder="your comment"
        value={comment}
        onChange={handleChange}
      />
      <div className="btn__wrapper">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default VideoCard;
