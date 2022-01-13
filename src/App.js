/* eslint-disable array-callback-return */
import React from "react";
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";

class App extends React.Component {
  state = {
    value: "",
    images: [],
    status: "idle",
    page: 1,
    modalImage: "",
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const preValue = prevState.value;
    const nextValue = this.state.value;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const KEY = "24630234-63d298eb892b3c6f0ac62f70f";

    if (preValue !== nextValue) {
      this.setState({ page: 1 });
      this.fetchImages(nextValue, nextPage, KEY);
    }

    if (prevPage !== nextPage) {
      this.fetchImages(nextValue, nextPage, KEY);
    }
  }

  fetchImages = (nextValue, nextPage, KEY) => {
    this.setState({ status: "pending" });
    fetch(
      `https://pixabay.com/api/?q=${nextValue}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((image) => {
        const arrImages = [];
        image.hits.forEach((img) => {
          arrImages.push({
            id: img.id,
            webformatURL: img.webformatURL,
            largeImageURL: img.largeImageURL,
          });
        });

        this.setState((prevState) => ({
          images: [...prevState.images, ...arrImages],
          status: "resolved",
        }));
        if (this.prevPage !== nextPage) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => this.setState({ status: "rejected" }));
  };

  onSubmit = ({ value, images, loading }) => {
    this.setState({ value, images, loading });
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (e) => {
    this.setState(({ openModal }) => ({
      openModal: !openModal,
    }));
  };

  onImageClick = (largeImageURL) => {
    this.setState({
      modalImage: largeImageURL,
      openModal: true,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        {this.state.status === "resolved" && (
          <ImageGallery
            images={this.state.images}
            onImageClick={(largeImageUrl) => this.onImageClick(largeImageUrl)}
          />
        )}
        {this.state.status === "pending" && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
        {this.state.status === "resolved" && (
          <Button loadMore={this.loadMore} />
        )}
        {this.state.openModal && (
          <Modal
            modalImage={this.state.modalImage}
            toggleModal={this.toggleModal}
          />
        )}

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
