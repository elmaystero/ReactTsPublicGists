import React from "react";

export default (p:any) => {
  return (
    <div
      className="main main-spacer-wide u-12@large u-9@medium u-12@small u-12@tiny"
      id="filter-sidebar"
    >

      <form
       onSubmit={e=> {e.preventDefault();p.filterGistList(e);}}
        className="form pdn--an-imp"
        data-filter="form"
      >
        <input
          name="_token"
          type="hidden"
          value="8htTgx3SEx0mblq2qtMCE4e5ElLn2pFN1sFpui5r"
        />

        <div className="carda__body  ">
          <div className="row">
            <div className="col-sm-12 mrg--vt">
              <div className="form-group">
                <label>Search By Username</label>
                <input
                  className="form-control"
                  id="project__title"
                  data-filter="keyword"
                  name="userName"
                  type="text"
                />
                <button type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
