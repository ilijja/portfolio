export interface Project {
  name: string;
  icon: string;
  desc: string;
  url?: string;
  techStack: TechStackIcon[];
}

export enum TechStackIcon {
  REACT = "React",
  NODEJS = "NodeJS",
  NEXTJS = "NextJS",
  FFMPEG = "ffmpeg",
  MONGO = "MongoDB",
  CLOUDFLARE_R2 = "Cloudflare-R2",
  NEXTAUTH = "NextAuth",
  PASSPORT = "Passport.js",
  AWS_S3_BUCKET = "AWS_S3_BUCKET",
  KONVA = "React Konva",
}

export const diplomskiURL =
  "https://raf.edu.rs/odbrane-zavrsnih-radova/odbrane-radova-2024/student-ilija-dimitrijevic-odbranio-je-diplomski-rad-na-temu-web-aplikacija-za-online-porucivanje-i-placanje-u-ugostiteljskim-objektima/";

export const linkedinURL = "https://www.linkedin.com/in/ilijja/";
