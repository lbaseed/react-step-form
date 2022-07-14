import React, { PureComponent } from 'react';
import FormUserDetails from './formUserDetails';

export class UserForm extends PureComponent {

    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // proceed to next step
    nextStep =() => {
        const {step } = this.state;

        this.setState({
            step: step+1
        });
    }

    // proceed to preveios step
    prevStep =() => {
        const {step } = this.state;

        this.setState({
            step: step-1
        });
    }


    // handle fields change
    handleChange= input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

  render() {
      const {step} = this.state;
      const {firstName, lastName, email, occupation,city, bio} = this.state;
      const values =  {firstName, lastName, email, occupation,city, bio};

      switch(step){
        case 1: 
          return (
            <FormUserDetails
                nexStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
            />
          )
        case 2:
              return <h1>FormPersonalDetails</h1>
        case 3: 
            return <h1>Confirm</h1>
        case 4: 
            return <h1>Success</h1>
        default:
            return <h1>Default case</h1>

      }

    // return (
    //   <>
          
    //   </>
    // )
  }
}

export default UserForm