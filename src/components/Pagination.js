import React from "react";
import { useState, useEffect} from "react";
import fetcher from "../fetcher";
import "../styles/pagination.css"

const Pagination = ({totalCount, rowsPerPage, currentPage, pagination}) => {

   
    
    const [currentPageDisplay, setCurrentPageDisplay] = useState(currentPage)

    useEffect(()=>{
        setCurrentPageDisplay(currentPage);
    }, [currentPage])
    
    const pageNumber = []

    for(let i=1; i<= Math.ceil(totalCount/rowsPerPage); i++) pageNumber.push(i);

    async function handleNext () {
        console.log(currentPageDisplay)
        if(currentPageDisplay >= Math.ceil(totalCount/rowsPerPage)) return;
        await pagination('next')
        const temp = currentPageDisplay+1;
        setCurrentPageDisplay(temp);

    }
    async function handlePrevious () {
        if(currentPageDisplay <= 1) return;
        await pagination('previous')
        const temp = currentPageDisplay;
        setCurrentPageDisplay(temp-1);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
            <li className={(currentPageDisplay == 1) ? ('page-item disabled') : ('page-item')} id="PreviousButton">
            <a className="page-link"  tabindex="-1" onClick={handlePrevious}>Previous</a>
            </li>
            <li className="page-item" id="currentPage"><a class="page-link" >{currentPageDisplay}</a></li>
            <li className={(currentPageDisplay >= Math.ceil(totalCount/rowsPerPage)) ? ('page-item disabled') : ('page-item')} id="NextButton">
              <a className="page-link" onClick={handleNext}>Next</a>
            </li>
            </ul>
        </nav>
    )
    
}

export default Pagination;