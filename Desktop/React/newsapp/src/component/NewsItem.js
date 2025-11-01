import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageurl
                ? "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900"
                : imageurl
            }
            className="card-img-top"
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}..{" "}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {!source ? "Unknown Source" : source}
              </span>
              <span className="badge text-bg-success">New</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
