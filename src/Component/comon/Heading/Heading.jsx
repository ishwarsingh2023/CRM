import React from "react";
import "./Heading.css";
import { useNavigate } from "react-router-dom";

const Heading = ({ heading, navigateTo, BreadcrumbMain }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pages-heading d-sm-flex align-items-center gap-2 ">
        <h5>{heading}</h5>
        <div className="d-flex align-items-center gap-2 mt-2 mt-sm-0 ms-2 ms-sm-0">
          <div className="branch" onClick={() => navigate(navigateTo)}>
            {BreadcrumbMain}{" "}
          </div>

          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="13px"
              viewBox="0 0 320 512"
              fill="#4B6793"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>{" "}
          </div>

          <div className="currunt-branch">{heading}</div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Heading) ;
