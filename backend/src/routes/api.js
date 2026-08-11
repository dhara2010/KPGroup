import express from "express";
import Blog from "../models/Blog.js";
import Form from "../models/Form.js";
import Partner from "../models/Partner.js";
import Team from "../models/Team.js";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// Helper for error handling
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// --- BLOGS ---
router.get("/blogs", asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.json(blogs);
}));

// --- FORMS ---
router.post("/forms", asyncHandler(async (req, res) => {
  const form = await Form.create(req.body);
  res.status(201).json({ success: true, message: "Form submitted successfully", form });
}));

router.get("/forms", asyncHandler(async (req, res) => {
  const forms = await Form.find({}).sort({ createdAt: -1 });
  res.json(forms);
}));

// --- PARTNERS ---
router.get("/partners", asyncHandler(async (req, res) => {
  const partners = await Partner.find({}).sort({ createdAt: -1 });
  res.json(partners);
}));

// --- TEAMS ---
router.get("/teams", asyncHandler(async (req, res) => {
  const teams = await Team.find({}).sort({ createdAt: -1 });
  res.json(teams);
}));

// --- TESTIMONIALS ---
router.get("/testimonials", asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
  res.json(testimonials);
}));

// Error middleware
router.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message || "Server Error" });
});

export default router;
