import express from "express";
import { Query } from "../controllers/resumeController.js";
import * as skillset from '../methods/Search_based_on_skillset.js';
import { QueryAccordingToJobId } from "../controllers/resumeController.js";

const router = express.Router();

router.post('/chatbot', Query);
router.post('/chatbot/:jobId',QueryAccordingToJobId)

// Use the imported functions directly
router.get('/skill', skillset.Traverse);
router.get('/cp', skillset.CP);
router.get('/cg', skillset.CG);

// It seems 'CG' function is not defined in the provided code
// If you have a 'CG' function, make sure it's defined and exported in Search_based_on_skillset.js
// router.get('/cg', skillset.CG);

export default router;