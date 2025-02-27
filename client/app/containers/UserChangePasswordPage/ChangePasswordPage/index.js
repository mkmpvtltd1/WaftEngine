import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// core components
import { TextField } from '@material-ui/core';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import PageContent from '../../../components/PageContent/PageContent';

const styles = theme => ({
});

/* eslint-disable react/prefer-stateless-function */
export class ChangePassword extends React.Component {
  static propTypes = {
    changePasswordRequest: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  state = {
    oldPassword: '',
    newPassword: '',
    newPassword2: '',
    errors: {},
    showPassword: false,
  };

  handleChange = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    const errors = {};
    const { oldPassword, newPassword, newPassword2 } = this.state;
    if (!oldPassword) errors.oldPassword = "Can't be empty";
    if (!newPassword) errors.newPassword = "Can't be empty";
    if (!newPassword2) errors.newPassword2 = "Can't be empty";
    return { errors, isValid: !Object.keys(errors).length };
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { errors, isValid } = this.validate();
  //   this.setState({ errors });
  //   // const { oldPassword, newPassword, newPassword2 } = this.state;
  //   // this.props.changePasswordRequest({ oldPassword, newPassword, newPassword2 });
  //   if (isValid) {
  //     const { oldPassword, newPassword, newPassword2 } = this.state;
  //     this.props.changePasswordRequest({ oldPassword, newPassword, newPassword2 });
  //   }
  // };

  handleSave = e => {
    e.preventDefault();
    const { errors, isValid } = this.validate();
    this.setState({ errors });
    if (isValid) {
      const { oldPassword, newPassword, newPassword2 } = this.state;
      this.props.changePasswordRequest({
        oldPassword,
        newPassword,
        newPassword2,
      });
    }
  };

  render() {
    const {
      oldPassword,
      newPassword,
      newPassword2,
      showPassword,
      errors,
    } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
       
           
            <div className="w-full md:w-1/2 pb-4">
              <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2" htmlFor="oldPassword">
              Old Password
              </label>
              <input className="Waftinputbox" id="oldPassword" type="text"    name="oldPassword"   
                    value={oldPassword}
                    onChange={this.handleChange}
                    type={showPassword ? 'text' : 'password'} />
                    {errors.oldPassword && <span>{errors.oldPassword}</span>}
            </div>

            <div className="w-full md:w-1/2 pb-4">
              <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2" htmlFor="newPassword">
              New Password
              </label>
              <input className="Waftinputbox" id="newPassword" type="text"    name="newPassword"   
                    value={newPassword}
                    onChange={this.handleChange}
                    type={showPassword ? 'text' : 'password'} />
                    {errors.newPassword && <span>{errors.newPassword}</span>}
            </div>

            <div className="w-full md:w-1/2 pb-4">
              <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2" htmlFor="newPassword">
              Confirm New Password
              </label>
              <input className="Waftinputbox" id="newPassword2" type="text"    name="newPassword2"   
                    value={newPassword2}
                    onChange={this.handleChange}
                    type={showPassword ? 'text' : 'password'} />
                    {errors.newPassword2 && <span>{errors.newPassword2}</span>}
            </div>

                
             <button className="text-white py-2 px-4 rounded mt-4 btn-waft" onClick={this.handleSave}>
              Save
              </button>
             
             
           
         
      
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

const withReducer = injectReducer({ key: 'changePassword', reducer });
const withSaga = injectSaga({ key: 'changePassword', saga });

const withStyle = withStyles(styles);

export default compose(
  withStyle,
  withReducer,
  withSaga,
  withConnect,
)(ChangePassword);
