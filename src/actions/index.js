export const commentSubmit = (comment) => {
  return {
    type: "COMMENT_SUBMIT",
    payload: comment,
  };
};
