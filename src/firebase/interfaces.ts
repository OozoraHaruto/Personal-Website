import { Timestamp } from 'firebase/firestore/lite'

export interface School {
  id: string;
  cert: string;
  grade: number | string;
  logo: string;
  name: string;
  timeFrom: Timestamp;
  timeTo: Timestamp;
  subjects: SchoolSubjectWrapper[] | undefined;
  ccas: SchoolCCA[] | undefined;
}

export interface SchoolSubjectWrapper {
  id: string;
  name: string;
  subjects: SchoolSubject[]
}

export interface SchoolSubject {
  name: string;
  grade: number | string;
}

export interface SchoolCCA {
  id: string;
  club: string;
  status: string;
}