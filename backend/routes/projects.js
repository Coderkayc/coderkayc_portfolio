const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/seed', async (req, res) => {
  try {
    await Project.deleteMany({});
    const sample = [
      {
        title: 'Attendance System',
        description: 'A full-stack QR-code based attendance management system built for the University of Nigeria, Nsukka (UNN). The system enables lecturers to generate attendance sessions using QR codes, students to mark attendance securely, and administrators to manage courses and generate attendance reports.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Next.js', 'TailwindCSS'],
        githubUrl: 'https://github.com/Coderkayc/Attendance-System',
        liveUrl: 'https://attendance-system-rho-virid.vercel.app',
        featured: true,
      },
      {
        title: 'Luminest Africa',
        description: 'LUMINEST AFRICA is a web app that helps Nigerian households track and understand what they spend on electricity — across NEPA prepaid tokens, generator diesel, and solar top-ups — all in one place. It provides insights into energy consumption patterns, helps users optimize their electricity usage, and ultimately saves them money.',
        tech: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/Coderkayc/LUMINEST-AFRICA',
        liveUrl: 'https://luminestafrica.vercel.app/',
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
