# Ticket Reservation WebApp with API Integration

A comprehensive web application for reserving tickets, integrated with an API for enhanced functionality.
**Note:** API calling and basic structure completed. Styling to be started.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
  - [Steps](#steps)
  - [Prerequisites](#prerequisites) 
- [Usage](#usage)
- [Images](#images)

## Introduction
Welcome to the React.js Web App designed to streamline ticket reservation processes. This application caters to two distinct roles:
- **Admin**: Responsible for comprehensive CRUD operations related to managing train details and seat allocations.(Everytime a new train is added 10 seats(for each of 3AC , 2AC, 1AC , Sleeper, General))
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

## Link to API repository 
https://github.com/ishaj72/RailwayTicketAPI

## Images
- Add Trains
<img src="src\assets\addtrains.png" alt="addtrains" width="200" height="150">
<img src="src\assets\addtrains2.png" alt="addtrains" width="200" height="150">

- Login Page
<img src="src\assets\LoginPage.png" alt="addtrains" width="200" height="150">

- Register Page
<img src="src\assets\Registeration.png" alt="addtrains" width="200" height="150">

- Add/Delete Page
<img src="src\assets\addeleteSeat.png" alt="addtrains" width="200" height="150">

- Search Trains
<img src="src\assets\findTrain.png" alt="addtrains" width="200" height="150">