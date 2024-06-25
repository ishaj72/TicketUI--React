# Ticket Reservation WebApp with API Integration

A comprehensive web application for reserving tickets, integrated with an API for enhanced functionality.
**Note:** This project is currently a work in progress and is not yet completed.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
  - [Steps](#steps)
  - [Prerequisites](#prerequisites) 
- [Usage](#usage)
- [License](#license)
- [Images](#images)

## Introduction
Welcome to the React.js Web App designed to streamline ticket reservation processes. This application caters to two distinct roles:
- **Admin**: Responsible for comprehensive CRUD operations related to managing train details and seat allocations.
- **User**: Enables users to manage their profiles efficiently, facilitating ticket booking and cancellation seamlessly.

## Installation

### Steps
<ul>
<li>Clone the github repository : git clone https://github.com/ishaj72/TicketUI--React.git</li>
<li>Navigate to the project : cd TicketUI--React</li>
<li>Install frontend dependencies <br/> -npm install  <br/> -npm react-router-dom  <br/> -npm install axois</li>
<li>Start your project : npm run dev</li>
</ul>

### Prerequisites
- Node.js
- npm (install using npm install npm@latest -g)

## Usage

Here's how you can leverage this application based on your role:
### For Admins:
- Add new trains to expand the service offerings.
- Manage seat configurations to optimize capacity.
- Update and delete existing train and seat details as needed.

### For Users:
- Register or log in to manage your profile.
- Book tickets for preferred train routes.
- Cancel booked tickets if plans change.

## Some API Endpoints Exposed
- https://localhost:7094/api/AdminLogin/TrainDetails 
- https://localhost:7094/api/User/Create
- https://localhost:7094/api/UserLogin/Login?userid=${encodeURIComponent(userid)}&password=${encodeURIComponent(password)} 

## Images
- Add Trains 
<img src="src\assets\addtrains.png" alt="addtrains" width="200" height="150">
<img src="src\assets\addtrains2.png" alt="addtrains" width="200" height="150">

-Login Page
<img src="src\assets\Login.png" alt="addtrains" width="200" height="150">

-Register Page
<img src="src\assets\register.png" alt="addtrains" width="200" height="150">
