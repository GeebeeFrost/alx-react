import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItemShape from "./NotificationItemShape";

function close() {
  console.log("Close button has been clicked");
}

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
  return (
    <>
      <div className="menuItem">
        <span>Your notifications</span>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
          <button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            aria-label="close"
            onClick={close}>
            <img src={closeIcon} alt="Close button"></img>
          </button>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
