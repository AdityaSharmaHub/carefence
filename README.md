<div align="center">
  <img src="https://github.com/user-attachments/assets/0ad9fbb7-d943-4bc8-becb-ea6f437c44a6" alt="CareFence logo" height="100" width="250" />
</div>
<div align="center">
  <i>"Clock in within the safe zone"</i>
</div>
<br />
<div align="center">
  
  [`carefence.vercel.app`](https://carefence.vercel.app)
</div>

<div align="center"> 
  <h1>Healthcare Shift Management System</h1>
</div>

<p>A web-based application for healthcare organizations to manage staff shift tracking with location-based clock-in/out functionality.</p>

## 1. Core Features
### 1.1 User Authentication
- Registration with email/password
- Google OAuth integration
- Role-based permissions
- Session management

### 1.2 Location Services
- GPS location detection
- Geofencing for perimeter checking
- Location permission handling
- Fallback for location failures

### 1.3 Time Tracking
- Clock in/out functionality
- Shift duration calculation
- Historical shift records
- Note attachment system

### 1.4 Management Dashboard
- Real-time staff status
- Analytics and reporting
- Location perimeter configuration
- Shift history views


## 2. Technical Architecture

### 2.1 Frontend Stack
- **Framework**: Next.js (React)
- **UI Library**: Ant Design
- **State Management**: React Context
- **Styling**: Ant Design + custom CSS modules
- **Maps**: Google Maps API

### 2.2 Backend Stack
- **API**: GraphQL with Apollo Server
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Auth0
- **Hosting**: Vercel (frontend), Railway (backend)
