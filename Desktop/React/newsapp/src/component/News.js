import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';

export class News extends Component {
//   articles = [y
//     {
//       "source": {
//         "id": "bbc-sport",
//         "name": "BBC Sport"
//       },
//       "author": null,
//       "title": "Women's Cricket World Cup 2025 results: England thrash poor New Zealand to conclude group stage",
//       "description": "England will take winning momentum into the semi-finals after beating New Zealand by eight wickets in their final group game at the Women's World Cup.",
//       "url": "http://www.bbc.co.uk/sport/cricket/articles/c4gpe14p1eeo",
//       "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/afb2/live/14a24af0-b255-11f0-ba75-093eca1ac29b.jpg",
//       "publishedAt": "2025-10-26T11:07:28.3538808Z",
//       "content": "England will take winning momentum into the semi-finals of the Women's World Cup as they concluded the group stage with a crushing eight-wicket win over New Zealand in Visakhapatnam. \r\nIn a bizarre f… [+1793 chars]"
//     },
//     {
//       "source": {
//         "id": "espn-cric-info",
//         "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       "publishedAt": "2020-04-27T11:41:47Z",
//       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//       "source": {
//         "id": "espn-cric-info",
//         "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       "publishedAt": "2020-03-30T15:26:05Z",
//       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
  
  
// ]
  
  constructor(){ 
    super();
    console.log("Hey i am a constructor")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    console.log("RAm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=063a33a0e52248168c501e7e6064d8c4&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}); 
    let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false
      })
  }

  handlePrevClick= async () => {
let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=063a33a0e52248168c501e7e6064d8c4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
  })
}
  handleNextClick= async () => {
   if (!(this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize))) {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=063a33a0e52248168c501e7e6064d8c4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
  let data = await fetch(url);
     let parsedData = await data.json()
      // this.setState({loading: false});
     console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  }
  render() {
    console.log("render")
    return (
      <div>
        <div className="container my=2">
          <h2 className="text-center">NewsDoes - Top Headlines</h2>
         {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
            })}
            
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page ===1} type="button" className="btn btn-primary btn-lg" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-primary btn-lg" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
