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

    calculateIndex = () => {
        let { currentPage, totalproducts } = this.props

        let start_index = 0;
        let end_index = 0;

        if (Math.ceil(totalproducts / 12) <= 5 && currentPage <= 5) {
            start_index = 1;
            end_index = Math.ceil(totalproducts / 12)
        }
        else if (currentPage <= 5) {
            start_index = 1
            end_index = 5
        }
        else if (Math.ceil(totalproducts / 12) - 4 <= currentPage && currentPage <= Math.ceil(totalproducts / 12)) {
            console.log("as")
            start_index = Math.ceil(totalproducts / 12) - 4;
            end_index = Math.ceil(totalproducts / 12)

        }
        else {
            console.log("aas")
            start_index = currentPage - Math.floor(5 / 2)
            end_index = currentPage + Math.floor(5 / 2)
        }

        console.log(
            currentPage, start_index, end_index
        )


        let links = []
        for (; start_index <= end_index; start_index++) {
            links.push(start_index)
        }

        this.setState({ links: links })
        this.setState({ currentPage: currentPage })
    }

    componentDidMount() {

        this.calculateIndex()

    }

    componentDidUpdate() {
        if (this.props.currentPage != this.state.currentPage) {
            this.calculateIndex()
        }
    }



    render() {
        return (
            <>
                <div className="pagination">
                    <div className="pageof_span">Page {this.props.currentPage} of {Math.ceil(this.props.totalproducts / 12)}</div>
                    <div className="nav_page">
                        {0 >= this.props.currentPage - 1 ? '' :
                            <div key="previous">
                                <Link className="nav_page_linK_previous_next" to={`/dishes?page=${this.props.currentPage - 1}`}>Previous</Link>
                            </div>
                        }

                        {this.state.links.map(link => {
                            return (
                                link == this.props.currentPage ?
                                    <div key={link}>
                                        <Link className="nav_page_linK_current" to={`/dishes?page=${link}`}>{link}</Link>
                                    </div> :
                                    <div key={link}>
                                        <Link className="nav_page_link" to={`/dishes?page=${link}`}>{link}</Link>
                                    </div>
                            )
                        })}
                        {((this.props.currentPage + 1)) > Math.ceil(this.props.totalproducts / 12) ? '' :
                            <div key="next">
                                <Link className="nav_page_linK_previous_next" to={`/dishes?page=${this.props.currentPage + 1}`}>Next</Link>
                            </div>
                        }
                    </div>
                    <span className="pageof_span"></span>
                </div>
            </>
        )
    }
}

export default Pagination