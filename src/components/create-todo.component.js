import React, {Component} from 'react';
import { runInThisContext } from 'vm';
import axios from 'axios';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);

        this.onchangeEventCategory = this.onchangeEventCategory.bind(this);
        this.onchangeEventCost = this.onchangeEventCost.bind(this);
        this.onchangeEventDescript = this.onchangeEventDescript.bind(this);
        this.onchangeEventEnd = this.onchangeEventEnd.bind(this);
        this.onchangeEventName = this.onchangeEventName.bind(this);
        this.onchangeEventStart =this.onchangeEventStart.bind(this);
        this.onchangeEventSize = this.onchangeEventSize.bind(this);    
        this.onchangeEventAddress = this.onchangeEventAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            event_name:'',
            event_descript:'',
            event_category:'',
            event_start_date:'',
            event_end_date:'',
            event_size:'',
            event_cost:'',
            event_address:''    
        }
    }

    onchangeEventName(e){
        this.setState({
               event_name:e.target.value
        });
    }

    onchangeEventDescript(e){
        this.setState({
               event_descript:e.target.value
        });
    }


    onchangeEventCategory(e){
        this.setState({
                   event_category:e.target.value 
            });
        } 

    onchangeEventStart(e){
        this.setState({
                   event_start_date:e.target.value
            });
        } 
        
    onchangeEventEnd(e){
            this.setState({
                   event_end_date:e.target.value
            });
        } 
        
    onchangeEventSize(e){
            this.setState({
                   event_size:e.target.value
            });
        } 
        
    onchangeEventCost(e){
            this.setState({
                   event_cost:e.target.value
            });
        } 

    onchangeEventAddress(e){
            this.setState({
                   event_address:e.target.value
            });
        } 
        
    onSubmit(e){
            e.preventDefault();

            console.log(`Event details Submitted`);

            console.log(`Event Name : ${this.state.event_name}`);
            console.log(`Event description : ${this.state.event_descript}`);
            console.log(`Event Category : ${this.state.event_category}`);
            console.log(`Event Start date : ${this.state.event_start_date}`);
            console.log(`Event End date : ${this.state.event_end_date}`);
            console.log(`Event address : ${this.state.event_address}`);
            console.log(`Event Size ; ${this.state.event_size}`);  
            console.log(`Event Cost : ${this.state.event_cost}`);


            const newEvent = {
                event_name :this.state.event_name,
                event_address : this.state.event_address,
                //event_descript = this.state.event_descript,
                event_size : this.state.event_size,
                event_cost : this.state.event_cost

            }

            axios.post("http://localhost:4000/events/add",newEvent)
            .then(res=>console.log(res.data));



            this.setState({
                event_name:'',
                event_descript:'',
                event_category:'',
                event_start_date:'',
                event_end_date:'',
                event_size:'',
                event_cost:'',
                event_address:''    

            })
        }
     
    render(){
        return (
            <div style ={{marginTop:20}}>
                <h3> Create an event </h3>

                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group" >
                        <label> Name </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.event_name}
                            onChange = {this.onchangeEventName}

                        />

                    </div> 
                
                    <div className = "form-group" >
                        <label> Description </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.event_descript}
                            onChange = {this.onchangeEventDescript}

                        />

                    </div> 
                    
                    
                    
                    
                    <div className = "form-check form-check-inline" >
                        <input
                            className = "form-check-input"
                            type = "radio"
                            name = "Options"
                            id = "Music_Event"
                            value = "music"
                            checked = {this.state.event_category=='music'}
                            onChange = {this.onchangeEventCategory}

                        />
                        <label className  = "form-check-label ">music</label>
                    </div> 

                    <div className = "form-check form-check-inline" >
                        <input 
                            className = "form-check-input"
                            type = "radio"
                            name = "Options"
                            id = "Wedding_Event"
                            value = "wedding"
                            checked = {this.state.event_category=='wedding'}
                            onChange = {this.onchangeEventCategory}

                        />
                        <label className  = "form-check-label ">wedding</label>
                    </div>

                    <div className = "form-check form-check-inline" >
                        <input className = "form-check-input"
                            type = "radio"
                            name = "Options"
                            id = "Sports Event"
                            value = "sport"
                            checked = {this.state.event_category=='sport'}
                            onChange = {this.onchangeEventCategory}

                        />
                        <label className  = "form-check-label ">sport</label>
                    </div>

                    <div className = "form-group" >
                        <label> Address </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.event_address}
                            onChange = {this.onchangeEventAddress}
                        />

                    </div> 

                    <div className = "form-group" >
                        <label> Size </label>
                            <input type = "number"
                            maxlength = "3"
                            className = "form-control"
                            value = {this.state.event_size}
                            onChange = {this.onchangeEventSize}
                        />

                    </div> 

                    <div className = "form-group" >
                        <label> Cost </label>
                        <input type = "number"
 
                            className = "form-control"
                            value = {this.state.event_cost}
                            onChange = {this.onchangeEventCost}
                        />

                    </div> 
                    
                    <div className = "form-group" >
                    
                        <label> Start Date </label>
                        <input
                            type="date"
                            name="date"
                            id="exampleDate"
                            className = "form-control"
                            placeholder="date placeholder"
                            value = {this.state.event_start_date}
                                onChange = {this.onchangeEventStart}
                        />
                    </div>

                    <div className = "form-group" >
                    
                        <label> End Date </label>
                        <input
                            type="date"
                            name="date"
                            id="exampleDate"
                            className = "form-control"
                            placeholder="date placeholder"
                            value = {this.state.event_end_date}
                                onChange = {this.onchangeEventEnd}
                        />
                    </div>
                    <div className = "form-group">
                        <input type = "submit" 
                        value = "Create Event"
                        className = "btn btn-primary"
                        /> 

                    </div>
                </form>
                
            </div>        
            )
    }

    }
