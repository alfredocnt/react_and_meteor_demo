//Any JS in here is automatically ran for us

//Import React
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'
import axios from 'axios'

//Create Component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {images: []}

  }
  componentWillMount(){
  //Place to load data!
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => this.setState({images: response.data.data}));
  }
  render() {
    console.log(this.state.images);
    return (
    <div>
      <ImageList />
    </div>
  );
}
};

//Render component
Meteor.startup(() => {
ReactDOM.render(<App />, document.querySelector('.container'));

});
