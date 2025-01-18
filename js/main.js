// Demo data for robots and schedules
const demoData = {
    robots: [
        { id: 'A1', status: 'FEEDING_GROUP1', location: 'Section A', currentTask: 'Feeding Dairy Cows' },
        { id: 'B2', status: 'MOVING_TO_FEED', location: 'Section B', currentTask: 'Moving to Bulls' },
        { id: 'C3', status: 'LOADING_FEED', location: 'Feed Station', currentTask: 'Loading Evening Mix' }
    ],
    schedules: [
        { id: 1, group: 'Dairy Cows', recipe: 'Morning Mix', time: '06:00', status: 'completed' },
        { id: 2, group: 'Bulls', recipe: 'Afternoon Mix', time: '14:00', status: 'in-progress' },
        { id: 3, group: 'Young Stock', recipe: 'Evening Mix', time: '19:00', status: 'upcoming' }
    ],
    alerts: [
        { id: 1, type: 'info', message: 'Next feed cycle starts in 45 minutes', timestamp: new Date() },
        { id: 2, type: 'success', message: 'Morning feed completed for all groups', timestamp: new Date() }
    ]
};

// Function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white transform transition-transform duration-300 translate-y-full ${
        type === 'success' ? 'bg-green-500' :
        type === 'warning' ? 'bg-yellow-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        notification.style.transform = 'translateY(full)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize charts if they exist
function initializeCharts() {
    document.querySelectorAll('canvas').forEach(canvas => {
        if (canvas.id === 'feedDistributionChart') {
            initializeFeedDistributionChart(canvas);
        } else if (canvas.id === 'feedCyclesChart') {
            initializeFeedCyclesChart(canvas);
        }
    });
}

// Update robot status and tasks
function updateRobotStatus() {
    demoData.robots.forEach(robot => {
        // Update status based on current task
        if (robot.status === 'FEEDING_GROUP1') {
            setTimeout(() => {
                robot.status = 'MOVING_TO_FEED';
                robot.currentTask = 'Moving to next group';
                showNotification(`${robot.id} completed feeding, moving to next location`);
            }, Math.random() * 5000 + 5000);
        }
    });
}

// Update feed statistics
function updateFeedStats() {
    demoData.schedules.forEach(schedule => {
        const currentTime = new Date();
        const scheduleTime = new Date();
        const [hours, minutes] = schedule.time.split(':');
        scheduleTime.setHours(parseInt(hours), parseInt(minutes), 0);

        if (currentTime >= scheduleTime && schedule.status === 'upcoming') {
            schedule.status = 'in-progress';
            showNotification(`Starting feed cycle for ${schedule.group}`, 'info');
        }
    });
}

// Start demo updates
function startDemoUpdates() {
    initializeCharts();
    setInterval(updateRobotStatus, 5000);
    setInterval(updateFeedStats, 10000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', startDemoUpdates); 