import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames'

class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            errors:{},
        }
    }
    onChange(e){
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            pwd: this.state.pwd,
            pwd2:this.state.pwd2,
        }
        axios.post('/ap/users/register',newUser)
        .then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log( err.response.data)
            this.setState({
                errors: err.response.data
            })
        })
    }
    render(){
        const {errors} = this.state;
        return (
            <div className="register">
                <from onSubmit = {this.onSubmit.bind(this)}>
                    <input type = "text"
                    className = {classnames("form-control from-control-lg",{'is-invalid':errors.name})}
                    placeholder = "username"
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.onChange.bind(this)}
                    />
                    {errors.name && (<div className = "invalid-feedback">{errors.name}</div>)}
                </from>
            </div>
        )
    }
/**
  render() {
    return (
      <div className="register">
        {// {user ? user.name : null} }
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">注册</h1>
              <p className="lead text-center">创建新的账户</p>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="用户名"
                    name="name"
                    value = {this.state.name}
                    onChange ={this.onChange.bind(this) }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className='form-control form-control-lg'
                    placeholder="邮箱地址"
                    name="email"
                    value = {this.state.email}
                    onChange ={this.onChange.bind(this) }
                    />
 
                  <small className="form-text text-muted">我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱</small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className='form-control form-control-lg'
                    placeholder="密码"
                    name="password"
                    value = {this.state.password}
                    onChange ={this.onChange.bind(this) }
                  />
                </div>
                <div className="form-group">
                  <input type="password"  
                    className='form-control form-control-lg'  
                    placeholder="确认密码"  
                    name="password2" 
                    value = {this.state.password2}
                    onChange ={this.onChange.bind(this) }
                     />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div >
    )
*/
}
export default Register;