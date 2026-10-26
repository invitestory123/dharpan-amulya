// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY when cloning this template for a client.
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Amulya Reddy",
  groom: "Dharpan Reddy",
  /** Shown big in the hero */
  dateLabel: "01.11.26",
  /** Local start / end of the main function (ISO, no timezone) */
  start: "2026-11-01T10:15:00",
  end: "2026-11-01T15:00:00",
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "Sunday, 1st November 2026",
  timeLine: "10:15 AM onwards",
  eventTitle: "Engagement Ceremony of Dharpan Reddy & Amulya Reddy",
  invitationNote:
    "With the blessings of our families, Podduturi Nagendra Karan Reddy and Podduturi Rajitha invite you to the engagement ceremony of their son Dharpan Reddy and Amulya Reddy. Please join us for a morning celebration and lunch.",
  venue: {
    name: "Laxmi Kalyana Mandapam",
    address: "Maruti Nagar, Nizamabad, Telangana 503002, India",
    /** Used for the Google Maps deep link */
    query: "Laxmi Kalyana Mandapam, Maruti Nagar, Nizamabad, Telangana 503002",
    lat: 18.6725,
    lng: 78.0944,
  },
  closing: "Looking forward to celebrating with you",
} as const;

export const mapsUrl = "https://maps.app.goo.gl/wnNtZUuw4GDPky3M9?g_st=ic";

export const directionsUrl = "https://maps.app.goo.gl/wnNtZUuw4GDPky3M9?g_st=ic";
