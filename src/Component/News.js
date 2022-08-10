import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async handelNews() {
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=aa388ad7dfe84f0aae29051aeb1aac85&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json();
    this.setState({
      articles: passedData.articles,
      totalResults: passedData.totalResults,
    });
  }
  async componentDidMount() {
    this.handelNews();
  }
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.handelNews();
  };
  handleNextClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      this.setState({
        page: this.state.page + 1,
      });
    }
    this.handelNews();
  };
  capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  render(props) {
    return (
      <>
        <div className=" container my-3 text-center">
          <h2
            className=" container  fst-Abril Fatface alert alert-primary w-50 p-3 "
            // style={{ margin: "35px" }}
          >
            NewsDog - Top Hedlines
          </h2>
          <h3 className=" container alert alert-dark w-25 p-3">
            {this.capatalize(this.props.category)}
          </h3>
          <div className="row my-3 ">
            {this.state.articles.map((elements) => {
              return (
                <div className="col md-3 my-3" key={elements.url}>
                  <Newsitem
                    tittle={elements.title ? elements.title.slice(0, 45) : " "}
                    description={
                      elements.description
                        ? elements.description.slice(0, 188)
                        : " "
                    }
                    imageUrl={
                      elements.urlToImage
                        ? elements.urlToImage
                        : "https://images.mktw.net/im-228251/social"
                    }
                    newsUrl={elements.url}
                    author={elements.author}
                    publishedAt={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-center fixed-bottom">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="  btn btn-dark "
                onClick={this.handlePrevClick}
              >
                &laquo;Prev
              </button>
              <button
                type="button"
                className=" btn btn-dark "
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.handleNextClick}
              >
                Next&raquo;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
