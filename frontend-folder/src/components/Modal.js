import React from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useGlobalContext } from "../context";

import Logo from "./Logo";
const Modal = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div
      className={
        showModal ? "modal-container  show-mcontainer" : "modal-container"
      }
    >
      <div className={showModal ? "modal show-modal" : "modal"}>
        <button class="cross-modal" onClick={() => setShowModal(!showModal)}>
          <ImCross />
        </button>
        <div className="side-logo">
          <Logo />
        </div>

        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
            </svg>
            Add Job
          </Link>
          <Link to="/dashboard/all-jobs" className="nav-link">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"></path>
            </svg>
            All Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
