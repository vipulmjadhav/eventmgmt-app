import React,{Component} from 'react';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Login extends Component{

    constructor(props){
      super(props);

    this.onchangeUPass = this.onchangeUPass.bind(this);
    this.onchangeUEmail = this.onchangeUEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        u_email:'',
        u_password:''
      }

    }

  onchangeUPass(e){
      this.setState({
             u_password:e.target.value
      });
  }
  
  onchangeUEmail(e){
      this.setState({
             u_email:e.target.value
      });
  }

  onSubmit(e){
    e.preventDefault();

            console.log(`user details Submitted`);
            console.log(`user password : ${this.state.u_password}`);
            console.log(`user email : ${this.state.u_email}`);

            this.setState = ({
              u_password:'',
              u_email:''
      
          });

          const oldUser = {
            u_email : this.state.u_email,
            u_password : this.state.u_password,

        }
          axios.post("http://localhost:4000/users/check",oldUser)
          .then(res=>console.log(res.data));

        //  this.props.history.push('/login');    


  }


   render(){
    return (
        <Form className="text-center"> 
            <FormGroup row>
              <Label sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" placeholder="email" onChange = {this.onchangeUEmail}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" placeholder="password" onChange = {this.onchangeUPass}/>
              </Col>
            </FormGroup>
       
            <Button onClick={this.onSubmit}>Login</Button>

            <div>
                Not a member?
            </div>
            <Button onClick={()=>{this.props.history.push('/Signup');}}>Sign Up</Button>     
        </Form>
      );
   }
}