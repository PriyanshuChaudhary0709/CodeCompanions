import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const EditProfile = () => {
  const [contact, setContact] = useState("626342315");
  const [profession, setProfession] = useState("Web Developer");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/");
  const [github, setGithub] = useState("github.com/yadavashu/");
  const [skills, setSkills] = useState(["nodejs", "html/css", "AI", "ML NLP", "FIGMA", "VIRTUAL REALITY"]);
  const [newSkill, setNewSkill] = useState(""); // State to store input for new skill

  // Function to remove skill
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Function to add skill
  const addSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill.toLowerCase())) {
      setSkills([...skills, newSkill]); // Add new skill to list
      setNewSkill(""); // Clear input field
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Edit Profile Form */}
      <div className="container mt-4">
        <h2>Edit Profile</h2>

        {/* Contact */}
        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <InputGroup>
            <Form.Control type="text" value={contact} readOnly />
            <InputGroup.Text className="text-success"><FaCheckCircle /></InputGroup.Text>
          </InputGroup>
        </Form.Group>

        {/* Profession */}
        <Form.Group className="mb-3">
          <Form.Label>Profession (0/25)</Form.Label>
          <InputGroup>
            <Form.Control type="text" value={profession} readOnly />
            <InputGroup.Text className="text-success"><FaCheckCircle /></InputGroup.Text>
          </InputGroup>
        </Form.Group>

        {/* LinkedIn & GitHub */}
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>LinkedIn Link</Form.Label>
              <InputGroup>
                <Form.Control type="text" value={linkedin} readOnly />
                <InputGroup.Text className="text-success"><FaCheckCircle /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>GitHub Link</Form.Label>
              <InputGroup>
                <Form.Control type="text" value={github} readOnly />
                <InputGroup.Text className="text-success"><FaCheckCircle /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>
        </div>

        {/* Save Changes Button */}
        <Button className="btn btn-primary mb-3">Save Changes</Button>

        {/* Skills Section */}
        <h5>Skills</h5>

        {/* Add New Skill Input */}
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <Button variant="success" onClick={addSkill}>
            <FaPlusCircle />
          </Button>
        </InputGroup>

        {/* Display Skills */}
        <div className="d-flex flex-wrap">
          {skills.map((skill, index) => (
            <span key={index} className="badge bg-light text-dark m-1 p-2">
              {skill}{" "}
              <FaTimesCircle className="text-danger" style={{ cursor: "pointer" }} onClick={() => removeSkill(index)} />
            </span>
          ))}
        </div>

        {/* Save Changes Button */}
        <Button className="btn btn-primary mt-3">Save Changes</Button>
      </div>
    </div>
  );
};

export default EditProfile;
