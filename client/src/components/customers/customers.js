import React, { Component } from 'react';
import "./customers.css";

class Customers extends Component {
    constructor() {
        super()
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch("/api/customers")
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log(customers)))
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Customers</h1>
                <ul style={{ padding: 0 }}>
                    {this.state.customers.map(customer =>
                        <li style={{ listStyle: "none", marginBottom: "1rem" }}>{`${customer.firstName} ${customer.lastName}`}</li>
                    )}
                </ul>
            </div>
        );
    }

}

export default Customers;
