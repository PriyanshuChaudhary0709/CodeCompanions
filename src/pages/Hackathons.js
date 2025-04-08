import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, InputGroup, ListGroup, Button } from "react-bootstrap";
import { FaLinkedin, FaPlusCircle, FaSearch, FaRegCommentDots, FaUserCircle } from "react-icons/fa";

const hackathonsData = {
    "InOut 7.0": {
        date: "11/27/2020, 12:30 PM - 12/21/2020, 6:29 PM",
        participants: [
            { name: "Harshit Gupta", role: "Web Developer", skills: ["Node.js", "MongoDB", "HTML", "CSS", "Heroku"] },
            { name: "Pathan Moin Khan", role: "Web Developer", skills: ["Node.js", "HTML5", "React", "CSS3"] },
            { name: "Amit Verma", role: "Backend Developer", skills: ["Express.js", "SQL", "Docker"] },
            { name: "Sneha Sharma", role: "Data Scientist", skills: ["Python", "TensorFlow", "Pandas"] },
            { name: "Rohan Mehta", role: "Full Stack Developer", skills: ["MERN Stack", "GraphQL", "AWS"] },
            { name: "Neha Jain", role: "UI/UX Designer", skills: ["Figma", "Adobe XD", "CSS"] },
        ],
    },
    "Hack with CW": {
        date: "02/15/2021, 10:00 AM - 02/20/2021, 5:00 PM",
        participants: [
            { name: "Aryan Singh", role: "Cybersecurity Analyst", skills: ["Ethical Hacking", "Kali Linux", "Wireshark"] },
            { name: "Kavita Mishra", role: "ML Engineer", skills: ["Python", "Machine Learning", "OpenCV"] },
            { name: "Ankit Yadav", role: "DevOps Engineer", skills: ["Kubernetes", "Docker", "Jenkins"] },
            { name: "Pooja Iyer", role: "Frontend Developer", skills: ["Vue.js", "SCSS", "Bootstrap"] },
            { name: "Rahul Bose", role: "Software Engineer", skills: ["Java", "Spring Boot", "Microservices"] },
            { name: "Sana Khan", role: "Cloud Engineer", skills: ["AWS", "GCP", "Azure"] },
        ],
    },
    "Hack Nagpur": {
        date: "05/10/2021, 09:00 AM - 05/15/2021, 06:00 PM",
        participants: [
            { name: "Shivam Dubey", role: "AI Engineer", skills: ["Python", "AI", "Deep Learning"] },
            { name: "Priya Singh", role: "Frontend Developer", skills: ["React", "CSS", "JavaScript"] },
            { name: "Vinay Patel", role: "Game Developer", skills: ["Unity", "C#", "Blender"] },
            { name: "Swati Rao", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"] },
            { name: "Adarsh Nair", role: "Embedded Systems Engineer", skills: ["Arduino", "Raspberry Pi", "IoT"] },
            { name: "Ritika Sethi", role: "Cybersecurity Expert", skills: ["Penetration Testing", "Metasploit", "Burp Suite"] },
        ],
    },
    "The Python Week": {
        date: "08/01/2021, 11:00 AM - 08/07/2021, 07:00 PM",
        participants: [
            { name: "Sahil Jain", role: "Python Developer", skills: ["Python", "Django", "Flask", "REST API"] },
            { name: "Neha Kapoor", role: "AI/ML Engineer", skills: ["TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"] },
            { name: "Devansh Tripathi", role: "Data Analyst", skills: ["Pandas", "NumPy", "SQL", "Tableau"] },
            { name: "Pooja Rao", role: "Cybersecurity Expert", skills: ["Penetration Testing", "Ethical Hacking", "Wireshark", "Kali Linux"] },
            { name: "Ashwin Iyer", role: "Backend Developer", skills: ["Node.js", "Express.js", "MongoDB", "GraphQL"] },
            { name: "Tanya Malhotra", role: "Software Engineer", skills: ["Java", "Spring Boot", "Microservices", "Docker"] },
        ],
    },
    "HackNITP 3.0": {
        date: "10/12/2021, 02:00 PM - 10/18/2021, 11:59 PM",
        participants: [
            { name: "Arjun Das", role: "Full Stack Developer", skills: ["React", "Node.js", "MongoDB", "Redux"] },
            { name: "Kiran Mehta", role: "Embedded Systems Engineer", skills: ["Arduino", "Raspberry Pi", "IoT", "C++"] },
            { name: "Harsh Tandon", role: "DevOps Engineer", skills: ["Docker", "Kubernetes", "CI/CD", "AWS"] },
            { name: "Snehal Jha", role: "Game Developer", skills: ["Unity", "C#", "Game Physics", "Blender"] },
            { name: "Rishi Agarwal", role: "Backend Engineer", skills: ["Spring Boot", "MySQL", "Redis", "RabbitMQ"] },
            { name: "Sanya Sharma", role: "Data Scientist", skills: ["Python", "Scikit-learn", "Big Data", "Hadoop"] },
        ],
    },
    "Electrothon 3.0": {
        date: "01/05/2022, 09:30 AM - 01/10/2022, 06:30 PM",
        participants: [
            { name: "Akash Chauhan", role: "Cloud Engineer", skills: ["AWS", "Azure", "Google Cloud", "Terraform"] },
            { name: "Radhika Patel", role: "iOS Developer", skills: ["Swift", "Xcode", "CoreData", "SwiftUI"] },
            { name: "Pratik Joshi", role: "Blockchain Engineer", skills: ["Solidity", "Ethereum", "Hyperledger", "Web3.js"] },
            { name: "Natasha Verma", role: "IoT Developer", skills: ["MQTT", "ESP32", "Zigbee", "Embedded C"] },
            { name: "Sanjay Rawat", role: "Security Researcher", skills: ["Metasploit", "Burp Suite", "Reverse Engineering", "Exploit Development"] },
            { name: "Anjali Gupta", role: "Product Designer", skills: ["Figma", "Sketch", "UI/UX Design", "Wireframing"] },
        ],
    },
};
const Hackathons = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHackathon, setSelectedHackathon] = useState(Object.keys(hackathonsData)[0] || "");

    // Get filtered hackathons based on search term
    const filteredHackathons = Object.keys(hackathonsData).filter(hackathon =>
        hackathon.toLowerCase().includes(searchTerm)
    );

    // Ensure selectedHackathon is valid after filtering
    useEffect(() => {
        if (!filteredHackathons.includes(selectedHackathon)) {
            setSelectedHackathon(filteredHackathons[0] || "");
        }
    }, [searchTerm, filteredHackathons, selectedHackathon]);

    return (
        <Container fluid className="p-3 bg-dark text-white">
            <Row>
                {/* Sidebar */}
                <Col md={3} className="bg-light text-dark p-3">
                   {/* <Button variant="dark" className="mb-3 w-100">
                        <FaRegCommentDots /> Chat
                    </Button> */}
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Search for Hackathons"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                        />
                    </InputGroup>
                    <ListGroup>
                        {filteredHackathons.map((hackathon, index) => (
                            <ListGroup.Item
                                key={index}
                                className={`text-dark ${selectedHackathon === hackathon ? "active" : ""}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedHackathon(hackathon)}
                            >
                                {hackathon}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                {/* Main Content */}
                <Col md={9}>
                    {selectedHackathon && hackathonsData[selectedHackathon] ? (
                        <>
                        
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h4 className="mb-0">
                                        {selectedHackathon} 
                                    </h4>
                                    <small>{hackathonsData[selectedHackathon].date}</small>
                                </div>
                            </div>

                            {/* Participant Cards */}
                            <Row>
                                {hackathonsData[selectedHackathon].participants.map((participant, index) => (
                                    <Col md={4} key={index} className="mb-3">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <FaUserCircle size={80} className="text-primary my-2" />
                                                </div>
                                                <Card.Title>{participant.role}</Card.Title>
                                                <Card.Subtitle className="fw-bold">{participant.name}</Card.Subtitle>
                                                <div className="d-flex justify-content-center flex-wrap mt-2">
                                                    {participant.skills.map((skill, i) => (
                                                        <span key={i} className="badge bg-secondary m-1">{skill}</span>
                                                    ))}
                                                </div>
                                                <div className="d-flex justify-content-center gap-3 mt-3">
                                                    <FaPlusCircle size={20} />
                                                    <FaLinkedin size={20} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    ) : (
                        <p className="text-center">No hackathons found.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Hackathons;