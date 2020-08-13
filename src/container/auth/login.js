import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../redux/authActions';
import classnamed from 'classnames';
import TextFieldGroup from '../../common/TextFieldGroup'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            pwd:'',
            email:'',
            errors:{}
        }
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onsubmit(e){
        e.preventDefault()
        const newUser ={
            pwd:this.state.password,
            email:this.state.email
        }
        //save data in authAction.js of redux when click login
        this.props.loginUser(newUser)
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }

    componentWillReceiveProps(nextprops){
        console.log(nextprops.auth.isAuthenticated)
        console.log(nextprops.errors)
        //Judge whether the isauthenticated verification under the auth set is true. If yes, it means success=> page transfer
        if(nextprops.auth.isAuthenticated){this.props.history.push('/dashboard')}
        
        if(nextprops.errors){
            this.setState({
                errors:nextprops.errors
            })
        }
    }
    render(){
        //decode errors msg from mapStateToProps
        const {errors} = this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Login</h1>
                            <p className="lead text-center">Login with Existing Account</p>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <TextFieldGroup
                                    type = "email"
                                    placeholder = "email address"
                                    name = "email"
                                    value = {this.state.email}
                                    onChange = {this.onChange.bind(this)}
                                    error = {errors.email}
                                />
                                <TextFieldGroup
                                    type = "pwd"
                                    placeholder = "password"
                                    name = "pwd"
                                    value = {this.state.pwd}
                                    onChange={this.onChange.bind(this)}
                                    error = {errors.pwd}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
loginUser.PropTypes = {
    //  judge return type of data
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}
// transfer returned status to props
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

/** 
const mapStateToProps = (state) =>({
    errors:state.errors
})
*/

export default connect(mapStateToProps,{loginUser})(Login);