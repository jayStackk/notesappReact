import React from "react";
import { Col, Row } from "react-bootstrap";


const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title" style={{ textAlign: "center" }}>
        Super Sticky Notes
      </h1>
      <aside className="app-header__controls" style={{ textAlign: "center" }}>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
          style={{ textAlign: "center" }}
        />
      </aside>

        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
    </header>
  );
};

export default Header;
