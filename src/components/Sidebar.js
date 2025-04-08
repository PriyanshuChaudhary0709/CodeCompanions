import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserEdit, FaComments, FaSignOutAlt } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
      <div className="text-center mb-4">
        <img
          src="/code-companions-logo.png"
          alt="CODE COMPANIONS Logo"
          className="img-fluid"
          style={{ width: "100px" }}
        />
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item as={Link} to="/" className="bg-dark text-white border-0">
          <FaHome className="me-2" /> Home
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard" className="bg-dark text-white border-0">
          <FaHome className="me-2" /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/editprofile" className="bg-dark text-white border-0">
          <FaUserEdit className="me-2" /> Edit Profile
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/hackathons" className="bg-dark text-white border-0">
          🏆 Hackathons
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/chats" className="bg-dark text-white border-0">
          <FaComments className="me-2" /> Chats
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/suggestions" className="bg-dark text-white border-0">
          ❓ Any Suggestions?
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/logout" className="bg-dark text-white border-0 text-danger">
          <FaSignOutAlt className="me-2" /> Sign out
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
