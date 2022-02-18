import {
  faClipboard,
  faEye,
  faForward,
  faHandPaper,
  faPaperclip,
  faPen,
  faPlus,
  faShare,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AdminHome.css";
const AdminHome = () => {
  return (
    <div className="admin_container">
      <div className="admin_wrapper">
        <div className="admin_dashboard">
          <div className="profile_img_role">
            <div className="profile_img"></div>

            <h3>Editor</h3>
          </div>
          <div className="profile_info">
            <h1>Udochukwuka Levi Okoye</h1>
            <h5>Registerd: 11/05/2020</h5>
            <h5>Registerd Department: Editorial</h5>
            <h5>E-mail: levi@thecincytimes.com</h5>

            <button className="pending_tasks">
              View all pending Tasks (10)
            </button>
            <button className="assign_tasks">
              Assign Task <FontAwesomeIcon icon={faClipboard} />
            </button>
          </div>
        </div>

        <div className="quicklinks">
            <h3>Quick Link</h3>
          <div className="rw1">
            <div className="qlink1">
                <div className="icn"><FontAwesomeIcon icon={faPlus} /></div>
                <h3>Add Post</h3>
            </div>
            <div className="qlink1">
            <div className="icn"><FontAwesomeIcon icon={faEye} /></div>
                <h3>View Post</h3>
            </div>
            <div className="qlink1">
            <div className="icn"><FontAwesomeIcon icon={faPen} /></div>
                <h3>Edit Post</h3>
            </div>
          </div>
          <div className="rw2">
            <div className="qlink1">
            <div className="icn"><FontAwesomeIcon icon={faUserAlt} /></div>
                <h3>View Users</h3>
            </div>
            <div className="qlink1">
            <div className="icn"><FontAwesomeIcon icon={faUserAlt} /></div>
                <h3>View Users</h3>
            </div>
            <div className="qlink1">
            <div className="icn"><FontAwesomeIcon icon={faUserAlt} /></div>
                <h3>View Users</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
