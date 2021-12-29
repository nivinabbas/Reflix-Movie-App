import React, { Component } from 'react';

class SearchBox extends Component{
  render(){
    const {value,setSearchValue}=this.props;
  return (
    <div className="col col-sm">
      <input
        className="form-control"
        placeholder="type to search"
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}};

export default SearchBox;
