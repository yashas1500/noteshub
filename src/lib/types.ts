
export interface Note {
  id: string;
  title: string;
  subject: string;
  description: string;
  fileUrl: string;
  uploadedBy: string;
  uploadDate: Date;
  downloads: number;
}

export interface NoteRequest {
  id: string;
  title: string;
  subject: string;
  description: string;
  requestedBy: string;
  requestDate: Date;
  isFulfilled: boolean;
}

export type Subject = 
  | "Mathematics"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "Computer Science"
  | "Literature"
  | "History"
  | "Geography"
  | "Economics"
  | "Business Studies"
  | "Psychology"
  | "Sociology"
  | "Other";
