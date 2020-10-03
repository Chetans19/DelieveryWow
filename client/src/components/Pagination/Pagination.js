import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [],
            currentPage: 1
        }
    }

    componentDidMount() {

        let { currentPage, totalproducts } = this.props
        let start_index = 0;
        let end_index = 0;

        if (Math.ceil(totalproducts / 12) <= 5 && currentPage <= 5) {
            start_index = 1;
            end_index = Math.ceil(totalproducts) / 12
        }
        else if (currentPage <= 5) {
            start_index = 1
            end_index = 5
        }
        else if (Math.ceil(totalproducts / 12) - 4 <= currentPage && currentPage <= Math.ceil(totalproducts / 12) - 4) {
            start_index = Math.ceil(totalproducts / 12) - 4;
            end_index = Math.ceil(totalproducts / 12)
            console.log(
                currentPage, start_index, end_index
            )
        }
        else {
            console.log(
                currentPage, start_index, end_index
            )
            start_index = currentPage - Math.floor(5 / 2)
            end_index = currentPage - Math.floor(5 / 2)
        }


        let links = []
        for (; start_index <= end_index; start_index++) {
            links.push(start_index)
        }

        this.setState({ links: links })
        this.setState({ currentPage: currentPage })

    }

    render() {
        return (
            <>
                <div className="pagination">
                    <div>Page {this.state.currentPage} of {Math.ceil(this.props.totalproducts / 12)}</div>
                    <div className="nav_page">
                        {0 >= this.props.currentPage - 1 ? '' :
                            <li key="previous">
                                <Link className="nav_page_link" to={`/dishes?page=${this.props.currentPage - 1}`}>Previous</Link>
                            </li>
                        }

                        {this.state.links.map(link => {
                            return (
                                link == this.props.currentPage ?
                                    <li key={link}>
                                        <Link className="nav_page_linK_current" to={`/dishes?page=${link}`}>{link}</Link>
                                    </li> :
                                    <li key={link}>
                                        <Link className="nav_page_link" to={`/dishes?page=${link}`}>{link}</Link>
                                    </li>
                            )
                        })}
                        {(this.props.currentPage + 1) <= Math.ceil(this.props.totalproducts / 12) ? '' :
                            <li key="next">
                                <Link className="nav_page_link" to={`/dishes?page=${Number(this.props.currentPage) + 1}`}>Next</Link>
                            </li>
                        }
                    </div>
                    <span></span>
                </div>
            </>
        )
    }
}

export default Pagination