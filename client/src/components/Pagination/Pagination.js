import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Pagination extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div> {this.props.currentPage} of {Math.ceil(this.props.totalproducts / 12)}</div>
            </>
        )
    }
}

export default Pagination