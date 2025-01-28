# OnlineShariaAcademy

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.
This been created in a idead to donate this project to a non profit organisation and an opportuny to try all concepts hands-on

## Initial Project Plan
Here’s an updated professional and scalable plan for the Online Sharia Academy project:

Project Overview

A professional e-learning platform tailored for Online Sharia Academy (OSA). It will support user management, course enrollment, live classes, exams, and weekly assembly publishing while providing a scalable structure for future enhancements.

Core Features for Phase 1: Online Sharia Academy

User Features:

	1.	Authentication:
	•	Secure login/signup with role-based access (Student, Teacher, Admin).
	•	Password reset using email.
 
	2.	Course Enrollment:
	•	Students can enroll in the 5-year program.
	•	Display enrollment status (Pending/Approved).
 
	3.	Class List & Subjects:
	•	View class schedules by subjects.
	•	Track class progress and material (e.g., PDF, video links).
	•	Real-time notifications for upcoming classes.
 
	4.	Exam Management:
	•	Monthly, quarterly, yearly exams with results.
	•	Downloadable question papers and online submission.
	•	Exam history and grades per subject.
 
	5.	Live Classes:
	•	Integration with Zoom or WebRTC for live online sessions.
	•	Notifications for live class schedules.
	6.	Weekly Assemblies:
	•	Publish assembly topics and materials weekly.
	•	View archives of past assemblies.
	7.	Progress Tracking:
	•	Track course progress (e.g., completed lessons, upcoming exams).
	•	Display personalized dashboards for students.

Admin/Teacher Features:

	1.	User Management:
	•	Manage students and teachers (CRUD operations).
	•	Role-based access control for managing permissions.
	2.	Course Management:
	•	Add/edit course syllabus, materials, and class schedules.
	•	Upload resources (e.g., PDFs, videos).
	3.	Exam Management:
	•	Create monthly, quarterly, and yearly exams.
	•	Set grading criteria and publish results.
	4.	Reporting:
	•	Generate detailed reports for student performance.
	•	View course progress analytics.
	5.	Notifications:
	•	Send announcements to students (e.g., exam dates, new materials).

Technical Plan

Modules:

	1.	AuthModule:
	•	Handles login, signup, and role-based authentication.
	•	Includes route guards for secure navigation.
	2.	StudentModule:
	•	Course enrollment, class schedules, progress tracking, and live sessions.
	•	Dashboard for student-specific activities.
	3.	AdminModule:
	•	User, course, and exam management.
	•	Reporting and notifications.
	4.	SharedModule:
	•	Reusable components like navbar, footer, and directives.
	•	Pipes for formatting dates and grades.

Key Angular Topics:

Angular Concept	Usage in Project
Reactive Forms	Enrollment forms, login/signup, exam creation.
Interceptors	Add JWT tokens to secure API requests and handle errors globally.
NgRx/Redux	Manage application state (e.g., user data, class schedules, exam results).
Lazy Loading	Load AdminModule and StudentModule only when accessed.
Guards	Restrict access based on user roles (e.g., admin-only pages).
Async Observables	Fetch real-time data for live classes, notifications, and progress updates.
Custom Pipes	Format grades, dates, and filter subjects by levels or categories.
Change Detection	Optimize real-time updates like exam results and live notifications.

Implementation Plan:

Step 1: Initial Setup
	1.	Folder Structure:
	•	src/app/modules/auth (Login/Signup)
	•	src/app/modules/student (Student-specific features)
	•	src/app/modules/admin (Admin features)
	•	src/app/modules/shared (Reusable components/services)
	2.	Install Libraries:
	•	State management: @ngrx/store, @ngrx/effects.
	•	UI: @angular/material or Bootstrap.
	3.	API Integration:
	•	Define backend endpoints (e.g., /login, /enrollment, /exams).
	•	Use HttpClient and Interceptors for requests.

Step 2: Build Core Features:

	1.	Authentication:
	•	Role-based login.
	•	Implement AuthGuard for securing routes.
	2.	Dashboard:
	•	Design personalized dashboards for students and admins.
	3.	Enrollment:
	•	Create an enrollment form with dynamic validations.
	•	Show pending/approved statuses.
	4.	Class List:
	•	Display subjects, class materials, and schedules.
	•	Enable filtering by date or progress.
	5.	Live Classes:
	•	Integrate a video streaming service (e.g., Zoom API or WebRTC).
	6.	Exam Management:
	•	Allow admins to schedule exams and upload materials.
	•	Students can view schedules, download question papers, and submit answers.
	7.	Weekly Assemblies:
	•	Build a module for creating and viewing assemblies.

Next Steps:

	1.	Let me know if you’d like help with Step 1: Initial Setup, and we can start building the folder structure and core modules.
	2.	If you want further details for backend integration or UI design, I can help draft that too!
 
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## Runnig json server
```bash
json-server --watch db.json --port 3000
```
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
