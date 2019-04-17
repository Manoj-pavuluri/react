import React, { Component } from 'react';
import Radium from 'radium';

 class Practice extends Component {
    state = {
        data: [],
        searchTearm: "",
        searchedResults: [],
        searchedData: false
    };
    componentDidMount() {
        this.getData()
    };
    getData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(res => {
                this.setState({ data: res.slice(0, 10) })
            })
    }
    handleOnChanage = event => this.setState({ searchTearm: event.target.value, searchedData: false });
    handleSearch = () => {
        const oldArray = [...this.state.data];
        const regExp = new RegExp(this.state.searchTearm);
        const searchedResults = oldArray.reduce((acc, result) => {
            if (result && result.title.match(regExp)) {
                acc.push(result)
            }
            return acc
        }, []);
        this.setState({ searchedResults, searchedData: true })
    }
    getTableData = data => data && (data.map(val => <tr key={val.id}>
        <td>{val.id}</td>
        <td>{val.title}</td>
    </tr>)
    )
    render() {
       const hello={
           ':hover':{
               backgroundColor:"blue"
           }
       }
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-8 my-4">
                                    <input
                                        onChange={this.handleOnChanage}
                                        value={this.state.searchTearm}
                                        type="text"
                                        placeholder="search results"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-2 my-4">
                                    <button className="btn btn-success" style={hello} onClick={this.handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="container">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>TITLE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.searchedData ? this.getTableData(this.state.searchedResults) : this.getTableData(this.state.data)}
                                    </tbody>
                                </table>
                                {this.state.searchedResults.length === 0? <div>No results found</div> : null}
                            </div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Radium(Practice);