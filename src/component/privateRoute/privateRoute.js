import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Component } from 'react';

const PrivateRoute = ({ component: Component,auth,...rest }) => (
    <Route {...rest}
     render = {(propts) => (
         auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to = '/login' />
     )}
    />
)

const mapStateToProps = (state) => ({
    auth: state.auth
})
PrivateRoute.prototype = {
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(PrivateRoute)