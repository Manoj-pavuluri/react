import React, { Component } from 'react'
import Hello from './hello';

export default class Login extends Component {
    state = {
        subject: []
    }
    componentDidMount() {
        fetch('https://api.stag.talentscreen.io/v1/subjects?limit=3')
            .then(response => response.json())
            .then(json => {
                this.setState({ subject: json })
            })

    }
    render() {
        let data = ()=>
            this.state.subject.map((val, k) =>
                <tr key={k}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.mode}</td>
                </tr>
            );
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>

                    <tbody >
                        {data()}
                    </tbody>
                </table>
                <Hello/>


            </div>
        )
    }
}


