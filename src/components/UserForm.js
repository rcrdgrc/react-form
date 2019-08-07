import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

// proceed to the next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

//Go back to prev step
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

// Handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value}) // this will take care of the state input/fields
}

//we need to figure out what step we're on, then decide which component we want to display
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

       switch(step) {
           case 1:
               return (
                   <FormUserDetails //take in props, attributes for components, it also handles change
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                   />
               )
            case 2:
                return (
                   <FormPersonalDetails //take in props, attributes for components, it also handles change
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                   />
               )
            case 3:
                return (
                   <Confirm //take in props, attributes for components, it also handles change
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                   />
               )
            case 4:
                return <Success />
       }
    }
}

export default UserForm
