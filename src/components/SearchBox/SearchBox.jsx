import { useDispatch, useSelector } from "react-redux";

import { selectFilters } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchContact = useSelector(selectFilters);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={css.searchLabel}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={searchContact}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;
