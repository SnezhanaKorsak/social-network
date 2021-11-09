import React from "react";
import {PaginationPropsType} from "./PaginationContainer";
import axios from "axios";
import s from "../Pagination.module.css";

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from: number | string, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        typeof i === "number" ? i += step : i = 0;
    }

    return range;
}

//https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react-ru

export class Pagination extends React.Component<PaginationPropsType> {

    fetchPageNumbers = () => {
        const totalPages = Math.ceil(this.props.totalRecords / this.props.pageLimit);
        const currentPage = this.props.currentPage;
        const pageNeighbours = this.props.pageNeighbours;

        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    }

    handleClick = (page: number | string) => {
        if (typeof page === "number") {
            this.props.setCurrentPage(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageLimit}`)
                .then(response => {
                    this.props.setFriends(response.data.items)
                })
        }
    }
    handleMoveLeft = () => {
        const previousPage = this.props.currentPage - (this.props.pageNeighbours * 2) - 1
        this.props.setCurrentPage(previousPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${previousPage}&count=${this.props.pageLimit}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            })
    }
    handleMoveRight = () => {
        const nextPage =this.props.currentPage + (this.props.pageNeighbours * 2) + 1
        this.props.setCurrentPage(nextPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageLimit}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            })
    }

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render(): React.ReactNode {
        const totalPages = Math.ceil(this.props.totalRecords / this.props.pageLimit);
        const pages = this.fetchPageNumbers()
        if (!this.props.totalRecords || totalPages === 1) return null

        return (
            <nav className={s.paginationBlock}>
                <div className={s.totalCounter}>
                   <span className={s.selectedItem}>{this.props.totalRecords}</span>  Users
                </div>

                <div className={s.currentPage}>
                   Page   <span className={s.selectedItem}>{this.props.currentPage}</span>/{totalPages}
                   {/*{`Page ${this.props.currentPage}/${totalPages}`}*/}
                </div>

                <ul className={s.totalBlocks}>
                    {pages.map((page, index) => {
                        if (page === LEFT_PAGE) return (
                            <li key={index} className={s.pageItem}>
                                <span aria-hidden="true"
                                      onClick={this.handleMoveLeft}>&laquo;</span>
                                {/*<span className="sr-only"
                                      onClick={this.handleMoveLeft}>Previous</span>*/}
                            </li>
                        );

                        if (page === RIGHT_PAGE) return (
                            <li key={index} className={s.pageItem}>
                                <span aria-hidden="true"
                                      onClick={this.handleMoveRight}>&raquo;</span>
                                {/* <span className="sr-only"
                                      onClick={this.handleMoveRight}>Next</span>*/}
                            </li>
                        );

                        return (
                            <li key={index}
                                className={`${s.pageItem} ${this.props.currentPage === page && s.selectedPage}`}
                                onClick={() => this.handleClick(page)}>
                                {page}
                            </li>
                        )

                    })}
                </ul>
            </nav>

        )
    }
}
