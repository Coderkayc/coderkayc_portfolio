const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new project (protected in production)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Seed sample projects
router.post('/seed', async (req, res) => {
  try {
    await Project.deleteMany({});
    const sample = [
      {
        title: 'E-Commerce REST API',
        description: 'Scalable REST API for an e-commerce platform with JWT auth, product management, and order processing.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Redis'],
        githubUrl: 'https://github.com',
        featured: true,
      },
      {
        title: 'Real-Time Chat App',
        description: 'WebSocket-powered chat application with rooms, typing indicators, and message persistence.',
        tech: ['Node.js', 'Socket.io', 'MongoDB', 'Next.js'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
      },
      {
        title: 'Task Management System',
        description: 'Full-stack task manager with role-based access control, team collaboration, and analytics dashboard.',
        tech: ['Next.js', 'Express', 'MongoDB', 'TailwindCSS'],
        githubUrl: 'https://github.com',
        featured: false,
      },
    ];
    const projects = await Project.insertMany(sample);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
