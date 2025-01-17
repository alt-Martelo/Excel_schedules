class MS {
    constructor(title, room, t_duration, t_trailer, t_break, sessions) {
        this.title = title;
        this.room = room;
        this.t_duration = t_duration; // in minutes
        this.t_trailer = t_trailer; // in minutes
        this.t_break = t_break; // in minutes, 0 if no break
        this.sessions = sessions; // array of start times in hhmm format (e.g., 1300 for 13:00)
    }

    generateEvents() {
        let events = [];

        this.sessions.forEach(startTime => {
            // Convert hhmm format to minutes from midnight
            let startMinutes = this.convertHHMMtoMinutes(startTime);

            // Calculate event times in minutes from midnight
            let trailerEnd = startMinutes + this.t_trailer;
            let breakStart = trailerEnd + this.t_duration;
            let end;

            if (this.t_break > 0) {
                // Calculate end time with break
                end = breakStart + this.t_break + 7;
            } else {
                // End time without break
                end = breakStart;
            }

            // Add events for each calculated time
            events.push(new Event(startMinutes, this.room, "start"));
            if (this.t_break > 0) events.push(new Event(breakStart, this.room, "break"));
            events.push(new Event(end, this.room, "end"));
        });

        // Sort events by time
        events.sort((a, b) => a.time - b.time);

        return events;
    }

    convertHHMMtoMinutes(hhmm) {
        // Extract hours and minutes from hhmm format
        let hours = Math.floor(hhmm / 100);
        let minutes = hhmm % 100;
        return hours * 60 + minutes; // Convert to minutes from midnight
    }
}

class Event {
    constructor(time, room, status) {
        this.time = time; // in minutes from midnight
        this.room = room;
        this.status = status;
    }

    // Helper to format the event for display
    toString() {
        let hours = Math.floor(this.time / 60).toString().padStart(2, '0');
        let minutes = (this.time % 60).toString().padStart(2, '0');
        return `${hours}h${minutes} ${this.status} room ${this.room}`;
    }
}

// Example usage
let movieSession = new MS(
    "Sample Movie",
    2,
    93, // Movie duration in minutes
    10, // Trailer duration in minutes
    15, // Break duration in minutes
    [1300, 1530] // Session start times in hhmm format (1300 for 13:00, 1530 for 15:30)
);

let events = movieSession.generateEvents();
events.forEach(event => console.log(event.toString()));