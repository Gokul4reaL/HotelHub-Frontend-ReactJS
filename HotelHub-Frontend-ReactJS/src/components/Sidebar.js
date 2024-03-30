import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/Sidebar.css"; // Import your custom CSS file for styling

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="sidebar-toggle">
        <i className="bi bi-list">...</i>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>Sidebar</Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-grid gap-2">
            <a href="/dashboard" className="btn btn-outline-orange">
              Dashboard
            </a>
            <a href="/view-profile" className="btn btn-outline-orange">
              View Profile
            </a>
            <a href="/edit-profile" className="btn btn-outline-orange">
              Edit Profile
            </a>
            <a href="/explore" className="btn btn-outline-orange">
              Explore
            </a>
            <a href="/favorites" className="btn btn-outline-orange">
              Favorites
            </a>
            <a href="/trending" className="btn btn-outline-orange">
              Trending
            </a>
            <a href="/" className="btn btn-outline-orange">
              Logout
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
