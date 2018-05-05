import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageShuffler from './ImageShuffler'

const original_images =[
  'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny8wNzQvb3JpZ2luYWwvbW9ua2V5LWNvdW50aW5nLmpwZw==',
  'http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg',
  'https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg',
  'https://www.worldatlas.com/r/w728-h425-c728x425/upload/00/fa/69/shutterstock-450936571.jpg',
  'https://gdb.voanews.com/120F3C79-0139-481D-929B-6FD996EB6AFE_cx0_cy7_cw0_w1023_r1_s.jpg',
  'https://s-i.huffpost.com/gen/1755634/images/o-ANIMALS-PONDERING-facebook.jpg',
  'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/56/n6/p056n6fv.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVS0-ZizbrWW1oEd1k5ahXBFgrxU5UxA916ysYbxMd1I4vY7ZFA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgm0wIO4M-MK3SmhJ8V7QAcJuUF-Tziq5v8KjgVju6OAQEzCf8',
  'http://images.glaciermedia.ca/polopoly_fs/1.23163721.1517633518!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/0130-peacock-jpg.jpg',
  'https://www.drusillas.co.uk/images/explore-more-card/meerkat1-profile-400x400-536.jpg',
  'https://www.zoo.org.au/sites/default/files/styles/zv_aggregate_featured/public/hippo-animal-web460.jpg?itok=OEQJYq7D'
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      misses: 0,
      clicked_images: [],
      image_urls: original_images
    }
  }

  onClickImage(event) {
    const { clicked_images } = this.state
    const image_url = event.target.src

    if (clicked_images.includes(image_url)) {
      this.setState({
        misses: this.state.misses + 1,
        clicked_images: []
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        clicked_images: this.state.clicked_images.concat([image_url])
      })
    }

    this.setState({
      image_urls: shuffle(original_images)
    })
  }

  render() {
    const { score, misses, image_urls } = this.state
    return (
      <div style={{width: '1200px', margin: '0 auto'}}>
        <div className="score-box">
          <span>Your score: { score }</span>
          <span>Your misses: { misses }</span>
        </div>
        <ImageShuffler image_urls={image_urls} onClickImage={e => this.onClickImage(e)} />
      </div>
    );
  }
}
export default App;
