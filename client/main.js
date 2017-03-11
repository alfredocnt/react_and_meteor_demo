//Any JS in here is automatically ran for us

//Import React
import React from 'react'
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'

//Create Component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
}

//Render component
Meteor.startup(() => {
ReactDOM.render(<App />, document.querySelector('.container'));
});
