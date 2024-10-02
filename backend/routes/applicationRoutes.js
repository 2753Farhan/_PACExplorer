import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
  employerGetAllApplicationsAccordingToJob
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import upload from '../middlewares/fileupload.js'; // Adjust the path as necessary

const router = express.Router();

router.post("/post", isAuthenticated, upload.single('resume'), postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.get("/employer/getall/:jobid", isAuthenticated, employerGetAllApplicationsAccordingToJob);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;
