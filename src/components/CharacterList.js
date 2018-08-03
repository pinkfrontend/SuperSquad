import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <h4>Characters</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state ---', state);
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, null)(CharacterList);
