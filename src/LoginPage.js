import React from 'react';
import Auth from './Auth';
import './App.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name:"",
          password:""
        }
      }
      handleChangeName=()=>{
          this.setState({name:this.state.name})
      }
      handleChangePassword=()=>{
        this.setState({password:this.state.password})
      }
    render(){
        return (
            
            <div className="box">
                 <input type="text" placeholder="Username" onChange={this.handleChangeName}></input>
                 <br></br>
                 <input type="password" placeholder="Password" onChange={this.handleChangePassword}></input>
                 <br></br>
                 <div>
                 <button onClick={
                    ()=>{
                        Auth.login(()=>{
                                this.props.history.push("/app");
                        });
                    }
                }>Login</button>
                 </div>
                
            </div>
        );
    }
}
export default LoginPage;