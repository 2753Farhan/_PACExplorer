import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Context } from "../../main";
import toast from 'react-hot-toast';

const ApplicationsAccordingToJob = () => {
    const { user, isAuthorized } = useContext(Context);
    const navigateTo = useNavigate();
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [filter, setFilter] = useState('all');
    const [inputData, setInputData] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const { jobid } = useParams();

    useEffect(() => {
        if (!isAuthorized) {
            navigateTo("/");
            return;
        }

        const fetchApplications = async () => {
            try {
                const endpoint = `http://localhost:4000/api/v1/application/employer/getall/${jobid}`;
                const res = await axios.get(endpoint, { withCredentials: true });
                setApplications(res.data.applications);
                setFilteredApplications(res.data.applications);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        };

        fetchApplications();
    }, [isAuthorized, navigateTo, jobid]);

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);

        if (selectedFilter === 'all') {
            setFilteredApplications(applications);
        } else {
            const filtered = applications.filter(application => application.jobId === selectedFilter);
            setFilteredApplications(filtered);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:4000/api/v1/resume/chatbot/${jobid}`, { inputData });
            setResponseMessage(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message || 'Something went wrong');
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="filter">Filter: </label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    {/* Dynamically add job IDs if available, ensuring unique keys */}
                    {Array.from(new Set(applications.map((app) => app.jobId))).map((jobId, index) => (
                        <option key={jobId + index} value={jobId}>{jobId}</option>
                    ))}
                </select>
            </div>
            {filteredApplications.map((element) => (
                <EmployerCard
                    element={element}
                    key={element._id}
                />
            ))}

            <div>
                <h2>Query Chatbot for Job ID: {jobid}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="inputData">Input Data:</label>
                        <input
                            type="text"
                            id="inputData"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {responseMessage && (
                    <div>
                        <h3>Response:</h3>
                        <p>{responseMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const EmployerCard = ({ element }) => {
    const showPdf = (pdf) => {
        const pdfFileName = pdf.split('\\').pop();
        window.open(`http://localhost:4000/uploads/${pdfFileName}`, "_blank", "noreferrer");
    };

    return (
        <div className="job_seeker_card">
            <div className="detail">
                <p><span>Name:</span> {element.name}</p>
                <p><span>Email:</span> {element.email}</p>
                <p><span>Phone:</span> {element.phone}</p>
                <p><span>Address:</span> {element.address}</p>
                <p><span>CoverLetter:</span> {element.coverLetter}</p>
                <p><span>Job ID:</span> {element.jobId}</p>
            </div>
            <div className="resume">
                <button onClick={() => showPdf(element.resume)}>Show Resume</button>
            </div>
        </div>
    );
};

export default ApplicationsAccordingToJob;
