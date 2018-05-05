import React, { Component } from 'react';
import logo from './logo.svg';

class ImageShuffler extends Component {

  render() {
    const { image_urls, onClickImage } = this.props
    return (
      <div>
          {
              image_urls.map(url => {
                return (
                    <div style={{float: 'left', width: '30%', boxSizing: 'border-box', padding: '20px', height: '200px', overflow: 'hidden'}}>
                        <img src={url} style={{width: '100%'}} onClick={e => onClickImage(e)} />
                    </div>
                )
              })
          }
      </div>
    );
  }
}

export default ImageShuffler;
