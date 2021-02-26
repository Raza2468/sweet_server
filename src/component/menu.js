import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Appmodel from './Modelz'



function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const handlemodel = () => {
  //     setAnchorEl(null);
  //     alert("raza")

  // };
  function myFun() {
    var a = document.getElementById("tog").classList.toggle("fa-angle-down")
    // alert(a,"s")

  }

  // function module(){
  //  }

  return (
    <div>
      {/* <Appmodel/> */}
      <div className="overflow-auto col-md-2"  onClick={() => myFun()}>
        {/* <Button  aria-controls="fade-menu" aria-haspopup="true"  onClick={handleClick}  >
      </Button> */}
        <i id="tog" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className="fa fa-angle-up s28 "></i>
        <Menu
          onClick={() => myFun()}
          className="fa fa-angle-up s28 "
          id="tog"
          id="fade-menu"
          className="side nav nav-pills nav-stacked anyClass"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >

          <ul class="nav nav-pills nav-stacked anyClass">

            <MenuItem id="sid" onClick={handleClose} class="nav-item">
              <img src="https://static.thenounproject.com/png/2819186-200.png" id="sidimag" height="25px" width="25px" />
              <p className="locat">
                Use current location <br />

         Location blocked<br /> Check browser/phone settings.
        </p>
            </MenuItem>

            <hr />

            <p id="RECENT"> RECENT LOCATIONS </p>
            <MenuItem id="sid" onClick={handleClose} class="nav-item">
            {/* <p id="RECENT"> RECENT LOCATIONS </p> */}
              <img src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png" id="sidimag" height="25px" width="20px" />
          Friends Raza City</MenuItem>
            <hr />
            <br />
            <h6  id="RECENT"> POPULAR LOCATIONS</h6><br />

            <MenuItem id="sid" onClick={handleClose} class="nav-item">
              <img src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png" id="sidimag" height="25px" width="20px" />
          Friends Royal City</MenuItem>

            <MenuItem id="sid" onClick={handleClose} class="nav-item">
              <img src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png" id="sidimag" height="25px" width="20px" />
          North Karachi</MenuItem>

            <MenuItem id="sid" onClick={handleClose} class="nav-item">
              <img src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png" id="sidimag" height="25px" width="20px" />
          Rufi Lake Drive Apartments</MenuItem>

            <MenuItem id="sid" onClick={handleClose} class="nav-item">
              <img src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png" id="sidimag" height="25px" width="20px" />
          Karachi Motorway</MenuItem>

          </ul>
        </Menu>
      </div>

    </div>
  );
}
export default FadeMenu;