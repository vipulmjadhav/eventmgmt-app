import React,{Component} from 'react';
import { Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class Register extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       errormessage: ''
//     };
//   }
  
constructor(props){
    super(props);

    this.onchangeUName = this.onchangeUName.bind(this);
    this.onchangeUPass = this.onchangeUPass.bind(this);
    this.onchangeUEmail = this.onchangeUEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        u_name :'',
        u_password:'',
        u_email:''

    }
}

onchangeUName(e){
    this.setState({
        u_name:e.target.value
        });
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
            console.log(`user Name : ${this.state.u_name}`);
            console.log(`user password : ${this.state.u_password}`);
            console.log(`user email : ${this.state.u_email}`);

            this.setState = ({
                u_name :'',
                u_password:'',
                u_email:''
        
            });

            const newUser = {
                u_name :this.state.u_name,
                u_email : this.state.u_email,
                u_password : this.state.u_password,

            }

            axios.post("http://localhost:4000/users/add",newUser)
            .then(res=>console.log(res.data));

            this.props.history.push('/login');


        }

   render(){
       return (
        <Form className="text-center">
          <FormGroup row>
            <Label sm={2}>Name</Label>
            <Col sm={10}>
              <Input onChange = {this.onchangeUName}/> 
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label lg={2}>Organisation</Label>
            <Col sm={10}>
              <Input/>
            </Col>
          </FormGroup>
 
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" onChange = {this.onchangeUEmail}/>
            </Col>
          </FormGroup>
   
          <FormGroup row>
            <Label sm={2}>Phone</Label>
            <Col sm={10}>
              <Input type="number" name="mobile" onChange="this.myChangeHandler"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" onChange = {this.onchangeUPass}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Confirm Password</Label>
            <Col sm={10}>8
             <Input type="password"/>
            </Col>
          </FormGroup>

          
          <Button onClick = {this.onSubmit}>Register</Button>
         
          <Button onClick={()=>{this.props.history.push('/login');}}>Cancel</Button>

      </Form>

     );
   }
}


