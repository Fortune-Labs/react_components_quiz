import React from "react";

// converted to class-based component

class CommentDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.img} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.commentText}</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
