import { getRandomTimeInTimeSlot } from ".";

jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));

describe('getRandomTimeInTimeSlot', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024/05/31 00:00'));
    })

    afterAll(() => {
        jest.useRealTimers();
    })

    it('Get a random time slot between the start time and end time', () => {
        const startTime = new Date('2024/05/31 08:00');
        const endTime = new Date('2024/05/31 09:30');
        expect(
            getRandomTimeInTimeSlot(startTime, endTime).getTime() > startTime.getTime() &&
            getRandomTimeInTimeSlot(startTime, endTime).getTime() < endTime.getTime()
        ).toBeTruthy();
    });

    it('Get a random time slot between the current time and end time if the start time was passed already', () => {
        const startTime = new Date('2024/05/30 23:30');
        const endTime = new Date('2024/05/31 00:30');
        expect(
            getRandomTimeInTimeSlot(startTime, endTime).getTime() > new Date().getTime() &&
            getRandomTimeInTimeSlot(startTime, endTime).getTime() < endTime.getTime()
        ).toBeTruthy();
    });

    it('Throw an error if the start time is later than the end time.', () => {
        expect(() => getRandomTimeInTimeSlot(new Date('2024/05/31 08:00'), new Date('2024/05/31 07:30')))
            .toThrow(new Error('The time slot is invalid.'));
    });
});
