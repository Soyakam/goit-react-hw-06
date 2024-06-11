import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/actions";


const SearchBox = () => {

  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <h3>You can Find contacts by name</h3>
      <input
        type="text"
        value={filter.className}
        onChange={handleChangeInput}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;