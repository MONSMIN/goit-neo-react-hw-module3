import style from "./SearchBox.module.css"

const SearchBox = ({ searchInput, handleChange }) => {
    return (
        <div className={style.serch}>
            <label htmlFor="search">Find contacts by name</label>
            <input className={style.field} type="text" id="search" value={searchInput} onChange={handleChange}/>
        </div>
    )
};

export default SearchBox;