export type UpcomingEvent = {
  eventName: string;
  date: string;
  location: string;
  description: string;
  isOnLeft?: boolean;
  register?: string;
  registerAsSpeaker?: boolean;
};

export type PastEvents = {
  id?: number;
  eventName: string;
  date: string;
  location: string;
  description: string;
  isOnLeft: boolean;
};
