import React, { Component } from 'react';
import InputField from '../input-field/input-field';
import { Link } from 'react-router-dom';

const phoneRegex = /^0(5|6|7)\d{8}$/;
const emailRegex = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.com$/;

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        errorMsg: {
            firstName: null,
            lastName: null,
            phone: null,
            email: null,
            address: null
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    resetForm = () => {
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            errorMsg: {
                firstName: null,
                lastName: null,
                phone: null,
                email: null,
                address: null
            }
        })
    }

    checkFormValidation = () => {
        const { firstName, lastName, phone, email, address } = this.state;
        let errorMsg = {
            firstName: firstName ? null : "First Name is required",
            lastName: lastName ? null : "Last Name is required",
            phone: phone ? null : "Phone is required",
            email: email ? null : "Email is required",
            address: address ? null : "Location is required",
        };
        if (phone && !phoneRegex.test(phone)) {
            errorMsg.phone = "Invalid phone number";
        }
        if (email && !emailRegex.test(email)) {
            errorMsg.email = "Invalid email address";
        }
        return errorMsg;
    }

    handleClick = () => {
        let errorMsg = this.checkFormValidation();
        if (!errorMsg.firstName && !errorMsg.lastName && !errorMsg.phone && !errorMsg.email && !errorMsg.address) {
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                email: this.state.email,
            };
            this.props.submit({customer: user, address: this.state.address});
            this.resetForm();
        }
        else {
            this.setState({ errorMsg: errorMsg });
        }
    }

    render() {
        return (
            <div className="col-md-8 col-sm-12 offset-md-2">
                <div className="row"> 
                    <div className="col-md-6 col-sm-12">
                        <InputField
                            name="firstName"
                            label="First Name"
                            type="text"
                            placeholder="Adam"
                            value={this.state.firstName}
                            error={this.state.errorMsg.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <InputField
                            name="lastName"
                            label="Last Name"
                            type="text"
                            placeholder="Smith"
                            value={this.state.lastName}
                            error={this.state.errorMsg.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <InputField
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="0(5|6|7)xxxxxxxx"
                    value={this.state.phone}
                    error={this.state.errorMsg.phone}
                    onChange={this.handleChange}
                />
                <InputField
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    error={this.state.errorMsg.email}
                    onChange={this.handleChange}
                />
                <InputField
                    name="address"
                    label="Address"
                    type="text"
                    placeholder="1234 Street, City"
                    value={this.state.address}
                    error={this.state.errorMsg.address}
                    onChange={this.handleChange}
                />
                <div>
                    <button className="btn btn-success col-md-5 offset-md-2 col-sm-12" onClick={this.handleClick} > Submit </button>
                    <Link to={'/menu'}> <button className="btn btn-primary col-md-5 col-sm-12"> Go to menu </button></Link>
                </div>
            </div>
        );
    }
}


export default Form;