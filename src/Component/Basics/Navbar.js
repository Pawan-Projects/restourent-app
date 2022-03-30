import React from "react";

function Navbar({filteritem ,menuList}) {
  return (
    <>

      <nav className="navbar">
        <div className="btn-group">
        {
            menuList.map((curElem)=>{
                return(
                    <button
            className="btn-group__item"
            onClick={() => filteritem(curElem)}
          >
            {curElem}
          </button>
                )
            })
        }
   
        </div>
      </nav>
    </>
  );
}

export default Navbar;
