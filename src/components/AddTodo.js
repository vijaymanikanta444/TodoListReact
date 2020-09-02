import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  state = {
    title: '',
  };

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          style={{ flex: 10 }}
          type="text"
          name="title"
          placeholder="Add Todo....."
          className="title"
          value={this.state.title}
          onChange={this.onchange}
        ></input>
        <input
          style={{ flex: 1 }}
          type="submit"
          value="submit"
          className="submit"
        ></input>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
