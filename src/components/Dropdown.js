import MenuItems from "./MenuItems";

const Dropdown = ({ items, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""; 
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {items.map((data, index) => (
                <MenuItems data={data} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}

export default Dropdown; 