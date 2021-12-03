import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";

class App extends React.Component {
  state = {
    value: "",
    images: [],
  };

  onSubmit = ({ value, images }) => {
    console.log(value);
    this.setState({ value, images });
    console.log("app", this.state);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <ToastContainer
          position={"top-right"}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
