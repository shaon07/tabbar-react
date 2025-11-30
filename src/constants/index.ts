import type { Event, Menu } from "../types";

export const MIN_VENUE_WIDTH = 300;
export const HEADER_MAX_WIDTH = 600;
export const TIME_LIST_HEIGHT = 50;

export const TIME_OPTIONS: string[] = [
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
];

export const VENUE_OPTIONS: Menu[] = [
  {
    label: "Venue 1",
    value: "venue-1",
  },
  {
    label: "Venue 2",
    value: "venue-2",
  },
  {
    label: "Venue 3",
    value: "venue-3",
  },
  {
    label: "Venue 4",
    value: "venue-4",
  },
  {
    label: "Venue 5",
    value: "venue-5",
  },
  {
    label: "Venue 6",
    value: "venue-6",
  },
  {
    label: "Venue 7",
    value: "venue-7",
  },
  {
    label: "Venue 8",
    value: "venue-8",
  },
  {
    label: "Venue 9",
    value: "venue-9",
  },
  {
    label: "Venue 10",
    value: "venue-10",
  },
  {
    label: "Venue 11",
    value: "venue-11",
  },
  {
    label: "Venue 12",
    value: "venue-12",
  },
];

export const HEADER_OPTIONS: Menu[] = [
  {
    label: "Monday",
    value: "2024-12-01",
  },
  {
    label: "Tuesday",
    value: "2024-12-02",
  },
  {
    label: "Wednesday",
    value: "2024-12-03",
  },
  {
    label: "Thursday",
    value: "2024-12-04",
  },
  {
    label: "Friday",
    value: "2024-12-05",
  },
  {
    label: "Saturday",
    value: "2024-12-06",
  },
  {
    label: "Sunday",
    value: "2024-12-07",
  },
];

export const EVENT_OPTIONS: Record<string, Event[]> = {
  "2024-12-01": [
    {
      name: "Event 1",
      startTime: "9:00",
      endTime: "9:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1", "venue-2"],
    },
    {
      name: "Event 3",
      startTime: "9:45",
      endTime: "11:00",
      venue: ["venue-3"],
    },
  ],

  "2024-12-02": [
    {
      name: "Event 1",
      startTime: "9:15",
      endTime: "9:45",
      venue: ["venue-1", "venue-3"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 3",
      startTime: "9:00",
      endTime: "10:00",
      venue: ["venue-3"],
    },
  ],

  "2024-12-03": [
    {
      name: "Event 1",
      startTime: "9:45",
      endTime: "10:15",
      venue: ["venue-2"],
    },
    {
      name: "Event 2",
      startTime: "10:30",
      endTime: "10:45",
      venue: ["venue-1", "venue-2"],
    },
  ],

  "2024-12-04": [
    {
      name: "Event 1",
      startTime: "9:00",
      endTime: "9:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1", "venue-2"],
    },
    {
      name: "Event 3",
      startTime: "9:00",
      endTime: "10:45",
      venue: ["venue-4"],
    },
  ],

  "2024-12-05": [
    {
      name: "Event 1",
      startTime: "9:00",
      endTime: "9:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1", "venue-2"],
    },
    {
      name: "Event 3",
      startTime: "9:45",
      endTime: "10:45",
      venue: ["venue-3"],
    },
  ],

  "2024-12-06": [
    {
      name: "Event 1",
      startTime: "9:00",
      endTime: "9:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1", "venue-2"],
    },
    {
      name: "Event 3",
      startTime: "9:45",
      endTime: "10:45",
      venue: ["venue-3"],
    },
  ],

  "2024-12-07": [
    {
      name: "Event 1",
      startTime: "9:00",
      endTime: "9:30",
      venue: ["venue-1"],
    },
    {
      name: "Event 2",
      startTime: "10:00",
      endTime: "10:30",
      venue: ["venue-1", "venue-2"],
    },
    {
      name: "Event 3",
      startTime: "9:45",
      endTime: "10:45",
      venue: ["venue-3"],
    },
  ],
};
