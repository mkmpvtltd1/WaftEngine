import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from '@material-ui/core/TextField';
import { makeSelectName, makeSelectNameError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const NameInput = props => {
  const { name, setStoreValue, error } = props;
  const handleChange = e =>
    setStoreValue({ key: 'name', value: e.target.value });
  const hasError = Boolean(error);
  return (
    <div className="mb-4">
      <label className="block text-grey-darker text-sm mb-2" htmlFor="username">
        {error || 'Name'}
      </label>
      <input
        error={hasError.toString()}
        onChange={handleChange}
        value={name}
        className="Waftinputbox"
        type="text"
      />
    </div>
  );
};

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  error: makeSelectNameError(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameInput);
