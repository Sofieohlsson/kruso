import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'; 
import Dropdown from './Dropdown';

const MenuItems = ({ data, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
           };
          }, []);

          const onMouseEnter = () => {
            window.innerWidth > 960 && setDropdown(true); 
          }; 

          const onMouseLeave = () => {
            window.innerWidth > 960 && setDropdown(false); 
          }; 

  return (
    <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {data.items ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
            <Link to={data.link}>{data.title}</Link>&nbsp;
            {depthLevel > 0 ? <span>&raquo;</span> : <span></span>}
          </button>
          <Dropdown depthLevel={depthLevel} items={data.items} dropdown={dropdown}/>
        </>
      ) : (
        <Link to={data.link || data.url}>{data.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;