function formatDateTime(input: string): string {
    const date = new Date(input);
    const currentDate = new Date();
    const yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);

    const isToday = date.toDateString() === currentDate.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
        return `Today at ${formatTime(date)}`;
    } else if (isYesterday) {
        return `Yesterday at ${formatTime(date)}`;
    } else {
        const formattedDate = `${getMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
        return `${formattedDate} at ${formatTime(date)}`;
    }
}

function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
}

function getMonthName(month: number): string {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
}

// Example usage:
export default formatDateTime;
