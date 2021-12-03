import React from "react";
import s from "./Searchbar.module.scss";
import { toast } from "react-toastify";
class Searchbar extends React.Component {
  state = {
    value: "",
    images: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const preValue = prevState.value;
    const nextValue = this.state.value;
    const KEY = "24630234-63d298eb892b3c6f0ac62f70f";

    if (preValue !== nextValue) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((image) => this.setState({ images: image.hits }));
    }
  }

  handleChange = (e) => {
    const trimmedValue = e.target.value.trim();
    this.setState({
      value: trimmedValue,
      images: [],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.button_label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
