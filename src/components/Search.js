import React from "react";


function Search({searchPoke, onSearch}) {


  function handleSearch(e){
    //e.preventDefault()
    onSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchPoke} onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
