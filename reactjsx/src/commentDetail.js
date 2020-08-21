import React from "react";

// converted to class-based component

const CommentDetail = (props) => {
  return _react.default.createElement(
    "div",
    {
      className: "comment",
    },
    _react.default.createElement(
      "a",
      {
        href: "/",
        className: "avatar",
      },
      _react.default.createElement("img", {
        alt: "avatar",
        src: props.img,
      })
    ),
    _react.default.createElement(
      "div",
      {
        className: "content",
      },
      _react.default.createElement(
        "a",
        {
          href: "/",
          className: "author",
        },
        props.author
      ),
      _react.default.createElement(
        "div",
        {
          className: "metadata",
        },
        _react.default.createElement(
          "span",
          {
            className: "date",
          },
          props.timeAgo
        )
      ),
      _react.default.createElement(
        "div",
        {
          className: "text",
        },
        props.commentText
      )
    )
  );
};

var _default = CommentDetail;
exports.default = _default;
