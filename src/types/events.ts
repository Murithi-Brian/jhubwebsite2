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

export type EventCardProps = {
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  description: {
    _type: string;
    _key: string;
    style: string;
    children: [];
    markDefs: [];
  }[];
  eventDateTime: string;
  location: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
};
