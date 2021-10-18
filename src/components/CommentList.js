import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderedList = comments.map((item, i) => {
    return (
      <div className="ui segment" key={i}>
        {item}
      </div>
    );
  });
  return <div>{renderedList}</div>;
};
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps)(CommentList);
