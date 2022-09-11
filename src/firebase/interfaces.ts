import { Timestamp } from 'firebase/firestore/lite'

export interface Certificate {
  id: string;
  name: string;
  date: Timestamp;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  languages: string[];
  'last Updated': Timestamp;
  links: ProjectLinks[];
  haveImage: boolean;
}

interface ProjectLinks {
  name: string;
  url: string;
}

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

export interface Skill {
  id: string;
  name: string;
  iconName: string;
  proficiency: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
