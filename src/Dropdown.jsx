import React, { useState } from "react";
import "./Drop.css";


const Dropdown = () => {
  // function getSorted(data){
    const [options, setOptions] = useState([
        {value:'date', Label:'Date'},
        {value:'rating', Label:'Rating'},
        {value:'relevance', Label:'Relevance'},
        {value:'title', Label:'Title'}
      ]);
    //   console.log(options)
  const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

  const Dropdowns = ({ placeHolder, options }) => {
    const getDisplay = () => {
      return placeHolder;
    };

    return (
      <div className="dropdown-container">
        <div className="dropdown-menu">
          {options.map((option) => {
            return (
              <div key={option.value} className="dropdown-item">
                {option.label}
              </div>
            );
          })}
        </div>
        <div className="dropdown-selected-value">{getDisplay()}</div>

        <Icon />
      </div>
    );
  };
  // }
  
      {/* //   <select class="dropbtn">
//   <option>Sort</option>
//     <option className='date' value='date'>Date</option>
//     <option className='rating' value='rating'>Rating</option>
//     <option className='relevance' value='relevance'>Relevance</option>
//     <option className='title' value='title'>Title</option>
//   </select>
  */}

};

export default Dropdown;