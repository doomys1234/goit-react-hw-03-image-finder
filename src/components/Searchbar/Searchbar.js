import React from "react";
import s from "./Searchbar.module.scss";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
class Searchbar extends React.Component {
  state = {
    value: "",
    images: [],
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  handleChange = (e) => {
    const normalisedValue = e.currentTarget.value.toLowerCase();
    this.setState({
      value: normalisedValue,
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
      <>
        <header className={s.searchbar}>
          <form className={s.search_form} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.search_button}>
              <span className={s.search_button_label}>Search</span>
            </button>

            <input
              className={s.search_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
