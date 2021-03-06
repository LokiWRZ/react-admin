import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import imoocFrom from '../../component/imooc-form/imooc-form.js'

@connect(
    state=>state.user,
    {login}
)
@imoocFrom
class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    handleLogin(){ 

        this.props.login(this.props.state)
        // console.log("this.props.state",this.props.state);
    }
    render(){
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.props.handleChange('user',v)}>Username</InputItem>
                        <InputItem  type="password" onChange={v=>this.props.handleChange('pwd',v)}>Password</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>Sign in</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">Sign up</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login