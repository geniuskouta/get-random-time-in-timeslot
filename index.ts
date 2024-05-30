// Get a random time in a time slot like 15:00 - 15:30

export function getRandomTimeInTimeSlot(startTime: Date, endTime: Date): Date {
    if (new Date().getTime() > startTime.getTime()) {
        startTime = new Date()
    }

    if (startTime.getTime() > endTime.getTime()) {
        throw new Error('The time slot is invalid.')
    }

    const timeGap = endTime.getTime() - startTime.getTime();
    const randomAddition = Math.floor(Math.random() * timeGap);

    const randomTime = startTime.getTime() + randomAddition;

    return new Date(randomTime);
}
