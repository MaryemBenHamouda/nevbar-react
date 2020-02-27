import React from 'react';

const Navbar = (props) =>{
    return (
        <div className="container">
            <ul className="list">  {props.data.map(el =>( 
                    el.subMenu ? <div className="dropdown">
                        <li className="supmenu">{ el.title}</li>
                       
                        <ul className='sousmenu'>
                            {el.subMenu.map(elm=>  <li className="li">{elm}</li>)}
                        </ul>
                    </div> 
                    :<li className="supmenu"> 
                       <a href={el.link}> {el.title}</a>
                    </li>))  
                } 
            </ul>
            <hr />
        </div>
    ) 
}  
 export default Navbar;