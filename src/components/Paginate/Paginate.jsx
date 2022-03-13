import React from 'react'
import {PaginationElement, StyledPaginate} from './Paginate.styles'

const Paginate = ({currentPage, totalPages, pagesToShow = 10}) => {

    const pages = [...Array(totalPages).keys()];

    const startIndex = (currentPage - pagesToShow / 2 > 0)
        ? (currentPage - pagesToShow / 2 + pagesToShow < totalPages
            ? currentPage - pagesToShow / 2
            : totalPages - pagesToShow)
        : 0

    const stopIndex = (startIndex + pagesToShow < totalPages)
        ? startIndex + pagesToShow
        : totalPages

    return totalPages > 1 && (<StyledPaginate>
        {pages.slice(startIndex, stopIndex).map((value, index) => (
            <PaginationElement key={index + value + 1} active={value + 1 === currentPage}>
                {value + 1}
            </PaginationElement>
        ))}
    </StyledPaginate>)
}

export default Paginate