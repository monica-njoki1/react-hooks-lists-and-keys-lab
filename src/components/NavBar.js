import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];
  const navItem = links.map((link) => {
    return (
    <a key = {link} href = {`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
    );
  });
  return <nav>{navItem}</nav>;

  }



export default NavBar;
