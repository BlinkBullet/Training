import React, { Component } from "react";

class Table extends Component {
    handleRemove = (indx) => {
        let body = this.props.body
        // console.log(body, body[indx], indx)
        body.splice(indx, 1);
        this.setState({ body })
    }
    render() {
        let { heading, body } = this.props;

        return (
            <table className='table table-bordered' style={{ width: 800 }}>
                <thead>
                    <tr>
                        {heading.map((head, headID) =>
                            <th key={headID} >{head}</th>)}
                    </tr>
                </thead>
                <tbody>

                    {body.map((item, indx) => {
                        return (
                            <tr key={indx} >
                                <td >{item.name}</td>
                                <td >{item.lastName}</td>
                                <td >{item.age}</td>
                                <td >{item.etc}</td>
                                <td >
                                    <button className='btn btn-dark' onClick={() => this.handleRemove(indx)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}



export default Table;