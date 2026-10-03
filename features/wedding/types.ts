export type Wedding = {
  slug: string;
  couple: {
    firstName: string;
    secondName: string;
  };
  date: string;
  time: string;
  timezone: string;
  startsAt: string;
  venue: string;
  description: string;
  guestCount: number;
};
