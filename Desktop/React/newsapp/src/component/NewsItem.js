import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: '18rem' }}>
  <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900":imageurl} className="card-img-top" alt="Card" />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem

