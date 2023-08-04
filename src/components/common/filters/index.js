import React from 'react';
import './filters.css';
import FilterItem from './filterItem';
import '@fortawesome/fontawesome-free/css/all.css';


const Filters = ({filterList}) => {
  return (
    <div className='filters'>
        {filterList && filterList.map((filter) =>{
            return <FilterItem filter={filter} key={filter.id} />
        })}
    </div>
  );
};

export default Filters