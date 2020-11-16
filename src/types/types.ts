export interface Speciality {
  specialityId: number;
  name: string;
  [props: string]: any;
}

export interface Ticket {
  ticketId: number;
  number: string;
  lastUpdateTime: string;
  owner: {
    userId: number;
    firstName: string;
    lastName: string;
    avatar: string;
    specialities: Speciality[];
  };
  reportedTime: string;
  status: string;
  description: string;
  asset: {
    assetId: number;
    name: string;
    geoCode: string;
    kmFrom: number;
    kmTo: number;
  };
}
