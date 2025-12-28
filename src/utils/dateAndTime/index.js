// Convert ISO 8601 date to human-readable format
export function convertDate(isoString, type = 'both') {
    const date = new Date(isoString);

    if (type === 'date') {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    if (type === 'time') {
        return date.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }

    // both (default)
    return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

// Examples
// const isoDate = '2025-12-21T18:20:54.121522Z';

// console.log('Date only:', convertDate(isoDate, 'date'));
// Output: Sunday, December 21, 2025

// console.log('Time only:', convertDate(isoDate, 'time'));
// Output: 06:20:54 PM

// console.log('Both:', convertDate(isoDate, 'both'));
// Output: Sunday, December 21, 2025, 06:20:54 PM

// console.log('Default:', convertDate(isoDate));
// Output: Sunday, December 21, 2025, 06:20:54 PM