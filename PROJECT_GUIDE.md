# Arabic Teacher Platform — Project Guide

## 1. Project Overview

A premium Arabic educational platform for an Arabic language teacher who teaches primary and preparatory school students.

The project consists of two main products:

1. **Public Website:** A polished personal website that introduces the teacher, presents his teaching approach and educational content, and allows students to contact him and book lessons.
2. **Teacher Dashboard:** A private management interface that will eventually allow the teacher to manage students, lessons, educational content, assignments, attendance, announcements, and platform settings.

The platform should communicate:

- Trust and professionalism.
- Strong Arabic educational identity.
- Simplicity and clarity.
- A premium, elegant visual experience.
- A student-focused educational environment.

### Target Audience

- Primary school students.
- Preparatory school students.
- Students interested in improving their Arabic language skills.

### Teaching Methods

- In-person lessons.
- Online lessons.

### Current Booking Workflow

Students contact the teacher through WhatsApp. Booking is confirmed manually by the teacher.

### Future Platform Users

- Teacher.
- Student.

No parent-management role or parent dashboard is planned.

---

# 2. Design System

The public website and dashboard must share the same visual identity to feel like parts of one cohesive product.

## 2.1 Color Palette

| Token         | Hex       | Usage                                       |
| ------------- | --------- | ------------------------------------------- |
| Primary Green | `#183C3A` | Primary brand color, buttons, active states |
| Deep Green    | `#102D2B` | Dark surfaces, emphasis, hover states       |
| Warm Gold     | `#C69A5A` | Accents, highlights, decorative details     |
| Warm Ivory    | `#F7F3EC` | Main background                             |
| White Surface | `#FFFDF9` | Cards, panels, content surfaces             |
| Main Text     | `#202020` | Headings and primary text                   |
| Muted Text    | `#77736D` | Secondary text and descriptions             |
| Border        | `#E8DFD2` | Dividers, card borders, subtle outlines     |

### Color Usage Rules

- Green is the primary identity color.
- Gold is an accent, not a dominant color.
- Ivory provides warmth and visual comfort.
- White surfaces create separation between content areas.
- Avoid excessive use of dark backgrounds.
- Maintain strong text contrast and readability.
- Avoid random colors that do not belong to the design system.

## 2.2 Typography

Recommended Arabic fonts:

- IBM Plex Sans Arabic.
- Alexandria.

Typography should feel:

- Professional.
- Modern.
- Highly readable.
- Naturally suited to Arabic content.

Use a consistent type scale:

- Display / Hero headings.
- Section headings.
- Page headings.
- Subheadings.
- Body text.
- Captions and metadata.

Avoid mixing too many font weights or sizes.

## 2.3 Layout and Spacing

- The entire interface uses RTL direction.
- Use consistent spacing throughout the project.
- Prefer generous whitespace.
- Keep content widths controlled and balanced.
- Use consistent container sizes.
- Avoid unnecessarily crowded sections.
- Keep alignment and spacing consistent between pages.

## 2.4 Components and Visual Language

Use a consistent approach for:

- Buttons.
- Cards.
- Inputs.
- Navigation items.
- Badges.
- Dropdown menus.
- Modals.
- Section headings.
- Empty states.
- Notifications.

### Buttons

- Primary buttons: Primary Green.
- Secondary buttons: subtle neutral or outlined style.
- Accent buttons: Warm Gold only when appropriate.
- Use clear hover, focus, active, and disabled states.

### Cards

- White or warm-white surfaces.
- Subtle borders.
- Soft shadows only when necessary.
- Consistent corner radii.
- Avoid excessive decorative effects.

### General Visual Rules

- Premium and minimal.
- No unnecessary gradients.
- No excessive shadows.
- No clutter.
- No generic dashboard-template appearance.
- Avoid decorative elements that compete with the content.

---

# 3. Public Website

## 3.1 Purpose

The public website is the teacher's digital identity and the main introduction to his teaching services.

It should help visitors understand:

- Who the teacher is.
- What he teaches.
- Which educational stages he supports.
- His teaching philosophy.
- How to contact him and book a lesson.

The introductory website is already designed and considered complete. The implementation should preserve its established visual direction and content structure.

## 3.2 Website Sections

### 01 — Hero Section

The first impression of the website.

Visual direction:

- Elegant Arabic educational identity.
- Teacher's photo as a central visual element.
- Photo emerging from a circular frame.
- Subtle scattered Arabic letters in the background.
- Strong Arabic headline.
- Supporting descriptive text.
- Clear contact or booking call to action.

Important image requirements:

- The teacher's face and head must not be cropped.
- The photo should have balanced proportions.
- The bottom of the photo should extend naturally beyond the circular frame where intended.
- Arabic diacritics must render correctly.

### 02 — About the Teacher

Introduce the teacher, his experience, teaching philosophy, and educational approach.

The section should build trust without becoming a long biography.

### 03 — Educational Stages

Present the educational levels served:

- Primary stage.
- Preparatory stage.

Use clear visual separation and concise descriptions.

### 04 — Learning Library

A section that introduces educational resources and learning materials.

It should establish the idea of an organized educational library that can later connect to the platform's educational content system.

### 05 — Arabic Typography Showcase

A visual section celebrating the Arabic language and its beauty.

Possible content:

- Arabic letters.
- Arabic calligraphy-inspired details.
- Selected Arabic expressions.
- Poetry and literary excerpts.

The section should feel artistic and educational, not like a generic content grid.

### 06 — Contact and Booking

A clear final conversion section.

Booking options:

- In-person lessons.
- Online lessons.

Primary action:

- Contact the teacher through WhatsApp.

Booking is currently manual and requires confirmation from the teacher.

## 3.3 Public Website Behavior

- Fully responsive.
- RTL throughout.
- Smooth but restrained interactions.
- Clear navigation.
- WhatsApp contact links.
- Accessible buttons and interactive elements.
- Good performance and image optimization.

Do not introduce booking systems, authentication, or backend functionality unless specifically requested.

---

# 4. Teacher Dashboard

## 4.1 Purpose

The dashboard is a private workspace for the teacher to manage the educational process.

It should feel like a natural extension of the public website's identity, while being more functional and information-oriented.

### Dashboard Design Direction

- Professional.
- Premium.
- Minimal.
- Easy to navigate.
- Arabic-first and RTL.
- Clear hierarchy.
- Practical rather than decorative.

## 4.2 Main Dashboard Navigation

The sidebar should be positioned on the right side of the interface.

Navigation items:

| Page             | Route                    |
| ---------------- | ------------------------ |
| لوحة التحكم      | `/teacher`               |
| الطلاب           | `/teacher/students`      |
| جدول الحصص       | `/teacher/schedule`      |
| المحتوى التعليمي | `/teacher/content`       |
| الواجبات         | `/teacher/assignments`   |
| الحضور والغياب   | `/teacher/attendance`    |
| الإعلانات        | `/teacher/announcements` |
| الإعدادات        | `/teacher/settings`      |

A separate sidebar item:

- عرض الموقع التعريفي

It should open the existing public website in a new tab, using the actual website URL when available. Never invent a URL.

## 4.3 Dashboard Layout

### Sidebar

- Right-aligned RTL navigation.
- Teacher logo or identity at the top.
- Clear active navigation state.
- Lucide icons.
- Collapsible on desktop.
- Mobile drawer behavior.
- Separate public website link near the bottom.

### Header

- Current page title.
- Breadcrumb navigation.
- Notification icon.
- Teacher profile menu.

### Notification Menu

Initially, it can be an empty dropdown shell.

### Teacher Profile Menu

Include:

- الملف الشخصي
- الإعدادات
- تسجيل الخروج

Authentication and actual logout functionality can be implemented later.

## 4.4 Dashboard Pages and Future Responsibilities

### 01 — Overview `/teacher`

The main dashboard overview.

Future content may include:

- Student statistics.
- Upcoming lessons.
- Recent activity.
- Quick actions.
- Attendance overview.

Do not implement these until the overview page is specifically requested.

### 02 — Students `/teacher/students`

Manage students directly.

Future responsibilities:

- View students.
- Add a student.
- Edit student information.
- View student details.
- Organize students by educational stage.
- Track student progress.

There is no parent-management section.

### 03 — Schedule `/teacher/schedule`

Manage the teacher's lesson schedule.

Future responsibilities:

- View lessons.
- Add and edit lessons.
- Organize lessons by date and time.
- Distinguish online and in-person lessons.
- View lesson details.

### 04 — Educational Content `/teacher/content`

Manage learning materials.

Future responsibilities:

- Add educational resources.
- Organize content.
- Edit and delete resources.
- Associate resources with educational stages.
- Make resources available to students when the student portal is implemented.

### 05 — Assignments `/teacher/assignments`

Manage student assignments.

Future responsibilities:

- Create assignments.
- Set deadlines.
- Associate assignments with students or groups.
- Review submissions when supported.
- Track assignment status.

### 06 — Attendance `/teacher/attendance`

Manage lesson attendance.

Future responsibilities:

- Record attendance.
- Mark absent students.
- View attendance history.
- Filter records by date or student.

### 07 — Announcements `/teacher/announcements`

Manage educational announcements.

Future responsibilities:

- Create announcements.
- Edit announcements.
- Publish or archive announcements.
- Make announcements available to students in the future.

### 08 — Settings `/teacher/settings`

Manage platform and teacher preferences.

Future responsibilities:

- Teacher profile.
- Basic platform settings.
- Notification preferences.
- Public contact information.
- Other relevant preferences.

---

# 5. Student Portal — Future Scope

The student portal is part of the future platform, not the current implementation phase.

Possible responsibilities:

- View personal profile.
- View scheduled lessons.
- Access educational materials.
- View assignments.
- Submit assignments.
- Read announcements.
- Track learning progress.

Do not build the student portal until the teacher dashboard and its underlying workflows are sufficiently defined.

---

# 6. Technical Stack

## Core Technologies

- React.
- JSX — JavaScript only.
- Vite.
- Tailwind CSS.
- React Router.
- Lucide React.

## Animation

For the dashboard:

- CSS transitions only.
- No GSAP.
- No Framer Motion.
- No animation libraries.

For the public website:

- Preserve the existing interaction and animation direction.
- Avoid introducing unnecessary animation dependencies during implementation.

## Architecture Principles

- Reusable components.
- Modular page structure.
- Shared design tokens.
- Consistent naming conventions.
- Separation of layout and page content.
- Avoid large monolithic components.
- Keep components readable and maintainable.

## Backend

The current implementation phase is frontend-focused.

Do not add:

- Supabase.
- Database.
- Authentication.
- API integrations.
- Backend services.

These can be considered in a later phase after the frontend workflows are defined.

---

# 7. Suggested Project Structure

Adapt this structure to the existing project rather than rebuilding it unnecessarily.

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── common/
│   ├── website/
│   └── dashboard/
│       ├── Sidebar.jsx
│       ├── Header.jsx
│       └── DashboardLayout.jsx
│
├── pages/
│   ├── website/
│   │   ├── Home.jsx
│   │   └── ...
│   │
│   └── dashboard/
│       ├── Overview.jsx
│       ├── Students.jsx
│       ├── Schedule.jsx
│       ├── Content.jsx
│       ├── Assignments.jsx
│       ├── Attendance.jsx
│       ├── Announcements.jsx
│       └── Settings.jsx
│
├── layouts/
├── routes/
├── hooks/
├── utils/
├── styles/
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

The exact structure can change according to the existing codebase.

---

# 8. Responsive Design

All pages must work across:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

### Public Website

- Responsive navigation.
- Flexible section layouts.
- Proper image scaling.
- Readable Arabic typography.
- No horizontal overflow.

### Dashboard

- Right sidebar on desktop.
- Collapsible sidebar.
- Mobile drawer.
- Responsive header.
- Tables and content should adapt to narrow screens.
- Comfortable touch targets.

---

# 9. Implementation Strategy

Build the project incrementally. Do not ask an AI coding tool to implement the entire platform in one step.

### Phase 1 — Project Foundation

- Inspect the existing project.
- Understand its current structure.
- Configure or verify React and Vite.
- Establish global styles.
- Define design tokens.
- Configure RTL and Arabic typography.
- Configure routing.

### Phase 2 — Public Website Implementation

Implement and verify each section independently:

1. Hero.
2. About.
3. Educational Stages.
4. Learning Library.
5. Arabic Typography Showcase.
6. Contact and Booking.

Preserve the approved visual identity.

### Phase 3 — Dashboard Foundation

- Dashboard layout.
- Sidebar.
- Header.
- Breadcrumbs.
- Profile dropdown.
- Notifications dropdown.
- Route configuration.
- Responsive behavior.
- Empty placeholder pages.

### Phase 4 — Dashboard Pages

Implement one page at a time:

1. Overview.
2. Students.
3. Schedule.
4. Educational Content.
5. Assignments.
6. Attendance.
7. Announcements.
8. Settings.

Define the UI and interactions for each page before implementing it.

### Phase 5 — Student Portal

Plan and implement the student experience after the teacher dashboard workflows are established.

### Phase 6 — Backend Integration

Only after the frontend structure and requirements are clear:

- Authentication.
- Database.
- Student accounts.
- Teacher permissions.
- Educational content management.
- Assignment workflows.
- Attendance records.
- Notifications.

---

# 10. Important Rules for AI Coding Tools

When working with Codex, Claude Code, or another coding assistant:

1. Always inspect the existing project before modifying files.
2. Do not rebuild working sections without a clear reason.
3. Preserve the approved design system.
4. Use React JSX, never TypeScript or TSX.
5. Keep the interface RTL.
6. Use reusable components where appropriate.
7. Do not introduce unrequested features.
8. Do not invent teacher information, content, or URLs.
9. Do not add parent-management functionality.
10. Do not use GSAP or animation libraries in the dashboard.
11. Do not add a backend unless explicitly requested.
12. Implement one clearly defined task at a time.
13. After implementation, explain which files were changed and what was completed.
14. Do not modify unrelated pages or components.
15. Preserve responsive behavior after every change.

---

# 11. Definition of Done

A page or component is considered complete when:

- It matches the project's design system.
- RTL layout is correct.
- Arabic text is readable and properly rendered.
- Desktop and mobile layouts work.
- Interactive elements behave as expected.
- There is no horizontal overflow.
- There are no console errors.
- Existing pages and routes remain functional.
- The code is organized and reusable.

**Core Principle: Build a cohesive Arabic educational product, not two unrelated interfaces. The public website establishes trust and identity; the dashboard supports the teacher's daily educational workflow.**
