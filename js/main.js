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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code can go here
}); 