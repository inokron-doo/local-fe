# Farm Robot Management Interface

A web-based interface for managing farm feeding robots. This interface allows farmers to control feeding schedules, manage recipes, and monitor robot status.

## Live Demo

The interface is accessible at: [https://inokron-doo.github.io/local-fe/index.html](https://inokron-doo.github.io/local-fe/index.html)

## Implemented Features

### Dashboard
- Quick action buttons for common tasks:
  - Repeat Cycle (with customizable amount: 25%, 50%, 75%, 100%)
  - Pause Robot
  - Resume Robot
- Status monitoring:
  - Real-time robot status (Online/Paused)
  - Next scheduled feed information
  - Today's feeding progress

### Settings
- Recipe Management:
  - Create and edit feed recipes
  - Add ingredients with precise amounts per animal
  - Units in kilograms (kg) and liters (L)
  - Display actual ingredient amounts instead of percentages

- Schedule Management:
  - Create feeding and feed pushing schedules
  - Set specific times for each schedule
  - Assign recipes to schedules
  - Multiple schedule types (Feeding/Feed Pushing)

- Group Management:
  - Create and manage animal groups
  - Specify number of animals
  - Assign multiple feeding locations to groups

### Setup
- Location Management:
  - Configure feeding locations with start and end positions
  - Set up special locations:
    - Waiting position (single fixed location)
    - Loading position (start and end positions)
  - Organize locations by sections

- Ingredient Management:
  - Manage available feed ingredients
  - Track ingredient inventory
  - Configure dispensers:
    - 6 weight-based dispensers (1-6)
    - 6 volume-based dispensers (7-12)
    - Individual dispenser activation/deactivation
    - Calibration wizard for volume-based dispensers:
      - Single dispenser calibration
      - Bulk calibration mode
      - 20-second dispensing test
      - Flow rate calculation (g/s)
      - Calibration status tracking

- Robot Control:
  - Basic robot commands:
    - Connect/Disconnect
    - Reset Board
    - Factory Reset

### General Features
- Responsive design for desktop and mobile
- Clean, intuitive user interface
- Real-time status updates
- Notification system for actions
- Navigation:
  - Main menu (Dashboard, Settings, Setup)
  - Settings submenu (Recipes, Schedules, Groups)
  - Setup submenu (Locations, Ingredients, Robot Control)

## Feedback & Bug Reports

We use GitHub Projects to track suggestions, improvements, and bug reports. Your feedback helps us make the interface better!

### How to Submit Feedback

1. Go to our [Project Board](https://github.com/orgs/inokron-doo/projects/3)
2. Click on "Add Item" (+ button) in Backlog section
3. Choose the appropriate template:
   - 🐛 Bug Report - for reporting issues
   - 💡 Feature Request - for suggesting new features
   - 🔄 Enhancement - for suggesting improvements

### What to Include

#### For Bug Reports
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/device information

#### For Feature Requests
- Clear description of the feature
- Use case/why it would be helpful
- Any mockups or examples (if available)

#### For Enhancements
- Which part of the interface you want to improve
- What changes you suggest
- Why this would be better

## Development

The interface is built using:
- HTML5
- Tailwind CSS for styling
- Vanilla JavaScript for interactivity

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/inokron/demo-frontend.git
```

2. Open any of the HTML files in your browser to view the interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Notes

- All actions are simulated in this demo version
- The interface is fully interactive but doesn't connect to a backend 