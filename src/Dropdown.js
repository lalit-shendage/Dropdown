import React from 'react'

const Dropdown=()=> {
    let items=['yes','why not', 'no','no for sure'] ;
  return (<div>
    <div className="dropdown-content">
    {items.map((element)=>{
        return(
            <a href={element}>{element}</a>
        )
        })}  
        </div>
        </div>
  )
}

export default Dropdown

