import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      zip: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateZip = this.updateZip.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      email: '',
      zip: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email: event.target.email
    });
  }

  updateZip(event) {
    this.setState({
      zip: event.target.zip
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateEmail}
            placeholder="email"
            value={this.state.email}
          />
          <input
            onChange={this.updateZip}
            placeholder="zip code"
            value={this.state.zip}
          />
          <button type="submit">register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);