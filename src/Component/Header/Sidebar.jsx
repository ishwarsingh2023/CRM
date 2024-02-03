import React, { useEffect, useState } from "react";
import NavugationMenu from "./NavugationMenu";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
  from 'react-icons/bs'
import { SiPayloadcms } from "react-icons/si";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const AdminData = { firstName: "Ishu", lastName: "Singh" }
  const user = JSON.parse( localStorage.getItem('user'))
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menu, setMenu] = useState("");
  const [childMenu, setChildMenu] = useState("");
  const [grandChildMenu, setGrandChildMenu] = useState("");
  const [superGrandChildMenu, setSuperGrandChildMenu] = useState("");
  const [subChildMenu, setSubChildMenu] = useState("");
  const logOut=(e)=>{
    e.preventDefault();
    localStorage.clear()
    navigate('/')

  }
  const handleMenuclick = (e, path) => {
    if (path) {
      navigate(`/${path}`);
    }
    if (e === menu) {
      setMenu();
    } else {
      setMenu(e);
    }
    // localStorage.setItem("menupage", e);
  };
  const handleChildMenuclick = (e, path) => {
    if (path) {
      navigate(`/${path}`);
    }
    if (e !== childMenu) {
      setChildMenu(e);
      setSubChildMenu("");
    } else {
      setChildMenu("");
      setSubChildMenu("");
    }
  };
  const handleSubChildClick = (e, path) => {
    if (path) {
      navigate(`/${path}`);
    }
    if (e !== subChildMenu) {
      setSubChildMenu(e);
    } else {
      setSubChildMenu("");
    }
  };
  const handleGrandChildClick = (e, path) => {
    if (path) {
      navigate(`/${path}`);
    }
    if (e !== grandChildMenu) {
      setGrandChildMenu(e);
    } else {
      setGrandChildMenu("");
    }
  };
  const handleSuperGrandChildClick = (e, path) => {
    if (path) {
      navigate(`/${path}`);
    }
    if (e !== superGrandChildMenu) {
      setSuperGrandChildMenu(e);
    } else {
      setSuperGrandChildMenu("");
    }
  };
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="c-sidebar-header">
        {AdminData.firstName !== undefined ? (
          <div className="sidebar-user">
            {AdminData.profileImage ? (
              <img
                src={`${serverUrl}/${AdminData.profileImage}`}
                alt="user"
                className="img-fluid"
              />
            ) : (
              <img
                src={`../images/Avatar.svg`}
                alt="user"
                className="img-fluid"
              />
            )}
            <p className="min-w-100">
              {AdminData.firstName + " " + AdminData.lastName}
            </p>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>

        ) : (
          <>
            <div className="px-3">
              {/* <span className='icon close_icon' onClick={OpenSidebar}>X</span> */}
            </div>
          </>
        )

        }

      </div>
      <div className="c-sidebar-body scroll">
        {/* {userRole.length !== 0 ? ( */}
        <div className="sidebar-body-wrap">
          {/* {userRole?.includes("Dashboard") && ( */}
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "products" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("products", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                <BsFillArchiveFill className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                  Products
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>
            <div
              className={`c-sidebar-submenu-wrap ${menu === "products" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "Products" ||
                  pathname === "/products"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Products",
                    "products"
                  )
                }
              >
                <div>Products</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnProduct" ||
                  pathname === "/return-product"
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "ReturnProduct",
                    "return-product"
                  )
                }
              >
                <div>Return Product</div>
              </div>
              {/* )} */}

            </div>
          </div>
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "categories" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("categories", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                 <BsFillGrid3X3GapFill className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                Categories
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>
            <div
              className={`c-sidebar-submenu-wrap ${menu === "categories" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "Categories" ||
                  pathname === "/categories"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Categories",
                    "categories"
                  )
                }
              >
                <div>Categories</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnCategories" ||
                  pathname === "/return-categories"
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "ReturnProduct",
                    "return-product"
                  )
                }
              >
                <div>Return Categories</div>
              </div>
              {/* )} */}

            </div>
          </div>
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "customers" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("customers", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                <BsPeopleFill className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                Customers
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>
            <div
              className={`c-sidebar-submenu-wrap ${menu === "customers" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "customers" ||
                  pathname === "/customers"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Products",
                    "customers"
                  )
                }
              >
                <div>Products</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnProduct" ||
                  pathname === "/return-product"
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "ReturnProduct",
                    "return-product"
                  )
                }
              >
                <div>Return Product</div>
              </div>
              {/* )} */}

            </div>
          </div>
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "inventory" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("inventory", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                <BsListCheck className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                Inventory
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>
            <div
              className={`c-sidebar-submenu-wrap ${menu === "inventory" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "inventory" ||
                  pathname === "/inventory"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Products",
                    "inventory"
                  )
                }
              >
                <div>Inventory</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnProduct" ||
                  pathname === "/return-product"
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "ReturnProduct",
                    "return-product"
                  )
                }
              >
                <div>Return Product</div>
              </div>
              {/* )} */}

            </div>
          </div>
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "reports" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("reports", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                <BsMenuButtonWideFill className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                Reports
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>
            <div
              className={`c-sidebar-submenu-wrap ${menu === "reports" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "Reports" ||
                  pathname === "/reports"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Reports",
                    "reports"
                  )
                }
              >
                <div>Reports</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnProduct" ||
                  pathname === "/return-product"
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "ReturnProduct",
                    "return-product"
                  )
                }
              >
                <div>Return Product</div>
              </div>
              {/* )} */}

            </div>
          </div>
          <div className="c-sidebar-full-menu">
            <div
              className={`d-flex justify-content-between c-sidebar-menu ${menu === "setting" ? "active" : ""
                }`}
              onClick={() => handleMenuclick("setting", " ")}
            >
              <div className="d-flex align-items-center gap-2">
                <div>
                <BsFillGearFill className='icon'/>
                </div>
                <div className="c-sidebarmenu-text">
                Setting
                </div>
              </div>
              <div>
                <NavugationMenu />
              </div>
            </div>

            <div
              className={`c-sidebar-submenu-wrap ${menu === "setting" ? "active" : ""
                }`}
            >
              {/* {userRole?.includes("New Registration") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "Setting" ||
                  pathname === "/setting"

                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleChildMenuclick(
                    "Setting",
                    "setting"
                  )
                }
              >
                <div>Setting</div>
              </div>
              {/* )} */}
              {/* {userRole?.includes("Renewal & Modify") && ( */}
              <div
                className={`c-sidebar-submenu ${childMenu === "ReturnProduct" ||
                  pathname === "/return-product"
                  ? "active"
                  : ""
                  }`}
                  onClick={logOut}
              >
                <div>LogOut</div>
              </div>
              {/* )} */}

            </div>


          </div>

        
        </div>
        </div>

      {/* <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul> */}
    </aside>
  )
}

export default Sidebar