import React, { Component } from "react";

export class Newsitem extends Component {
  render(props) {
    let {
      tittle,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedAt,
      source,
    } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="position-absolute  translate-middle badge rounded-pill bg-danger"
            style={{ marginLeft: "16%" }}
          >
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-header alert-heading">{tittle}</h5>

            <p className="card-text ">{description}</p>
            <hr />
            <footer className="blockquote-footer">
              <p className="card-text mb-10">
                <small className="text-muted">
                  Written by : {!author ? "Unknown" : author} on Date :
                  {new Date(publishedAt).toGMTString()}
                </small>
              </p>
            </footer>
            <a href={newsUrl} target="-blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
