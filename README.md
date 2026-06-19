# ADVONOTE WEBSITE

## Overview

Advonote is a modern Legal Practice Management platform designed for advocates and law firms. This website serves as the official marketing, lead generation, and customer engagement platform for the Advonote mobile application.

The platform allows visitors to:

* Learn about Advonote features and benefits
* Explore application screenshots
* Read customer testimonials
* Submit contact requests
* Request product demonstrations
* Access tutorials
* Download the mobile application

The project also includes a secure Admin Dashboard for managing leads, contact requests, demo requests, and analytics.

---

# Developed By

ECCURA TECHNOLOGIES PVT. LTD.

Email:
[eccuratech@gmail.com](mailto:eccuratech@gmail.com)

Phone:
+91 6398057980

Address:
Near Hotel Grand Nirvana,
Karampur Chaudhary,
Nainital Road,
Bareilly - 243202,
Uttar Pradesh, India

---

# Technology Stack

## Frontend

Built using:

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* Lucide React Icons
* Recharts

Purpose:

* Responsive User Interface
* Navigation
* API Integration
* Landing Page Experience
* Admin Dashboard UI

---

## Backend

Built using:

* Node.js
* Express.js
* Microsoft SQL Server
* JWT Authentication
* CORS
* Dotenv

Purpose:

* API Services
* Authentication
* Lead Management
* Contact Request Processing
* Demo Request Processing
* Analytics

---

# Project Structure

## Frontend

frontend/

src/

├── assets/

├── components/

├── pages/

│ ├── admin/

│ │ ├── Login.jsx

│ │ ├── Dashboard.jsx

│ │ ├── Leads.jsx

│ │ └── Analytics.jsx

│ ├── Home.jsx

│ ├── Contact.jsx

│ └── Demo.jsx

├── services/

├── App.jsx

└── main.jsx

---

## Backend

backend/

├── config/

├── controllers/

├── middleware/

├── routes/

├── services/

├── utils/

├── .env

└── server.js

---

# Website Features

## Landing Page

The landing page includes:

### Hero Section

* Product Introduction
* Download App Button
* Request Demo Button
* Contact Us Button

### Features Section

Highlights key functionality and benefits of Advonote.

### Screenshots Section

Displays application screenshots.

### Testimonials Section

Displays customer feedback and reviews.

### FAQ Section

Answers frequently asked questions.

### Contact Section

Allows visitors to submit inquiries.

### Footer

Contains:

* Quick Links
* Resources
* Contact Information
* Download Buttons
* WhatsApp Contact

---

# Admin Panel

## Admin Login

Local URL:

http://localhost:5173/admin

Production URL:

https://eccura-advonote-website.vercel.app/admin

---

## Admin Features

### Dashboard

Provides:

* Total Leads
* Contact Requests
* Demo Requests
* Recent Leads

### Lead Management

Allows administrators to:

* View Leads
* Search Leads
* Update Lead Status

### Analytics

Provides:

* Lead Statistics
* Source Analytics
* Business Insights

---

# Database

Database Name:

AdvonoteWebsite

Database Type:

Microsoft SQL Server

Total Active Tables: 4

---

## Database Tables

### 1. Admins

Stores administrator login credentials.

Purpose:

* Admin authentication
* Access control

---

### 2. Leads

Stores generated leads.

Purpose:

* Lead management
* Lead tracking
* Analytics

---

### 3. ContactRequests

Stores contact form submissions.

Purpose:

* Customer inquiry management

---

### 4. DemoRequests

Stores demo booking requests.

Purpose:

* Product demonstration management
* Sales follow-up

---

# Database Setup

## Create Database

```sql
CREATE DATABASE AdvonoteWebsite;
GO

USE AdvonoteWebsite;
GO
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

DB_SERVER=localhost
DB_PORT=1433

DB_DATABASE=AdvonoteWebsite

DB_USER=your_database_user
DB_PASSWORD=your_database_password

JWT_SECRET=your_secret_key
```

---

# Installation Guide

## Step 1: Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2: Frontend Setup

```bash
cd frontend
npm install
```

Start Frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Step 3: Backend Setup

```bash
cd backend
npm install
```

Start Backend:

```bash
node server.js
```

Backend URL:

```text
http://localhost:5000
```

---

# API Endpoints

## Contact Request

```http
POST /api/contact
```

Purpose:

Store contact form submissions.

---

## Demo Request

```http
POST /api/demo
```

Purpose:

Store demo booking requests.

---

## Admin Login

```http
POST /api/auth/login
```

Purpose:

Authenticate administrators.

---

## Dashboard

```http
GET /api/admin/dashboard
```

Purpose:

Retrieve dashboard statistics.

---

## Leads

```http
GET /api/admin/leads
```

Purpose:

Retrieve all leads.

---

## Search Leads

```http
GET /api/admin/leads/search
```

Purpose:

Search lead records.

---

## Update Lead Status

```http
PUT /api/admin/leads/:id
```

Purpose:

Update lead status.

---

## Analytics

```http
GET /api/admin/analytics
```

Purpose:

Retrieve analytics information.

---

# Current System Scope

The current version focuses on:

* Marketing Website
* Contact Request Management
* Demo Request Management
* Lead Tracking
* Admin Dashboard
* Analytics
* Tutorial Page

The previous Advocate/User Profile module has been removed from this version.

---

# Deployment

## Frontend Deployment

Recommended Platforms:

* Vercel
* Netlify

Build Command:

```bash
npm run build
```

Output Directory:

```text
dist
```

---

## Backend Deployment

Recommended Platforms:

* AWS EC2
* Azure Virtual Machine
* Oracle Cloud VM

Requirements:

* Node.js
* SQL Server
* Environment Variables

---

# Customization

## Update Logo

Replace:

```text
frontend/src/assets/advonote-logo.png
```

---

## Update Screenshots

Replace images inside:

```text
frontend/src/assets/screenshots/
```

---

## Update Contact Information

Files:

```text
Footer.jsx
AboutEccura.jsx
Contact.jsx
```

---

## Update Download Links

Files:

```text
Hero.jsx
Footer.jsx
```

Update:

* Google Play Store URL
* Apple App Store URL

---

# Security Features

Implemented:

* JWT Authentication
* Protected Admin Routes
* Environment Variables
* CORS Configuration

---

# Troubleshooting

## Frontend Not Starting

```bash
npm install
npm run dev
```

---

## Backend Not Starting

Check:

* Node.js Installation
* Environment Variables
* Database Credentials

---

## Database Connection Error

Verify:

* SQL Server Service Running
* Database Exists
* Correct Username
* Correct Password
* Correct Port

---

# Version Information

Application Name:

Advonote Website

Version:

1.0.0

Last Updated:

June 2026

---

# License

Copyright © 2026 Eccura Technologies Pvt. Ltd.

All Rights Reserved.
