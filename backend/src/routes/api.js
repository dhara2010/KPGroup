import express from "express";
import Blog from "../models/Blog.js";
import Form from "../models/Form.js";
import Partner from "../models/Partner.js";
import Team from "../models/Team.js";
import Testimonial from "../models/Testimonial.js";
import Job from "../models/Job.js";
import FAQ from "../models/FAQ.js";
import Service from "../models/Service.js";
import Achievement from "../models/Achievement.js";
import Metric from "../models/Metric.js";
import Reason from "../models/Reason.js";
import Ecosystem from "../models/Ecosystem.js";
import WebsiteSetting from "../models/WebsiteSetting.js";

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

// --- JOBS ---
router.get("/jobs", asyncHandler(async (req, res) => {
  const jobs = await Job.find({ status: "active" }).sort({ createdAt: -1 });
  res.json(jobs);
}));

// --- FAQS ---
router.get("/faqs", asyncHandler(async (req, res) => {
  const faqs = await FAQ.find({ status: "active" }).sort({ createdAt: -1 });
  res.json(faqs);
}));

// --- SERVICES ---
router.get("/services", asyncHandler(async (req, res) => {
  const services = await Service.find({ status: "active" }).sort({ createdAt: -1 });
  res.json(services);
}));

// --- ACHIEVEMENTS ---
router.get("/achievements", asyncHandler(async (req, res) => {
  const achievements = await Achievement.find({ status: "active" }).sort({ createdAt: 1 });
  res.json(achievements);
}));

// --- METRICS ---
router.get("/metrics", asyncHandler(async (req, res) => {
  const metrics = await Metric.find({ status: "active" }).sort({ createdAt: 1 });
  res.json(metrics);
}));

// --- REASONS ---
router.get("/reasons", asyncHandler(async (req, res) => {
  const reasons = await Reason.find({ status: "active" }).sort({ createdAt: 1 });
  res.json(reasons);
}));

// --- ECOSYSTEMS ---
router.get("/ecosystems", asyncHandler(async (req, res) => {
  const ecosystems = await Ecosystem.find({ status: "active" }).sort({ createdAt: 1 });
  res.json(ecosystems);
}));

// --- SETTINGS ---
router.get("/settings", asyncHandler(async (req, res) => {
  const settings = await WebsiteSetting.find({});
  res.json(settings);
}));

// Error middleware
router.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message || "Server Error" });
});

export default router;
