import React, { useState } from "react";
import { connect } from "react-redux";
import { commentSubmit } from "../actions";

const CommentBox = ({ commentSubmit, comments }) => {
  const [comment, setComment] = useState("");

  // useEffect(() => {
  //   commentSubmit(comment);
  // }, [comment]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   commentSubmit(comment);
  // };
  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          commentSubmit(comment);
        }}
      >
        <div className="field">
          <textarea
            row="5"
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
        </div>
        <br />
        <button className="ui primary button">Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps, { commentSubmit })(CommentBox);
