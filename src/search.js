import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchPage = (props)=>{
  return (
    <MDBCol md="4">
      <MDBFormInline className=" mb-4">
        <input onChange={props.searchHandler} className="form-control mr-sm-2" 
              type="text" 
              value={props.searchStr}
              
              placeholder="Search" aria-label="Search" />
        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;