import React from "react";

// Converted to class based component

const ApprovalCard = (props) => {
  return _react.default.createElement(
    "div",
    {
      className: "ui card",
    },
    _react.default.createElement(
      "div",
      {
        className: "content",
      },
      props.children
    ),
    _react.default.createElement(
      "div",
      {
        className: "extra content",
      },
      _react.default.createElement(
        "div",
        {
          className: "ui two buttons",
        },
        _react.default.createElement(
          "div",
          {
            className: "ui basic green button",
          },
          "Approve"
        ),
        _react.default.createElement(
          "div",
          {
            className: "ui basic red button",
          },
          "Reject"
        )
      )
    )
  );
};

var _default = ApprovalCard;
exports.default = _default;
