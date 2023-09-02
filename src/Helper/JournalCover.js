import { getRandomNumber } from "./RanomNumber";

const data = [
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover1.jpg?alt=media&token=d1b6b453-b322-42e0-b0ba-239cf3009d0b",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover10.jpg?alt=media&token=21a07130-6f4d-434b-a5e2-5f5752cb7abd",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover2.jpg?alt=media&token=77515c49-f915-4d52-970b-146bf861cfb7",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover3.jpg?alt=media&token=7baf02d9-cbe5-4c02-8ee9-14600a856afe",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover4.jpg?alt=media&token=379d7905-989a-44a4-b6d4-45e174f09a07",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover5.jpg?alt=media&token=a3231962-70b0-4a22-aea0-7237a1f85fb8",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover6.jpg?alt=media&token=41b076bd-fab2-467e-b1bb-9746bd72d0c8",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover7.jpg?alt=media&token=f38803f4-4d22-4977-9803-e5c136d4a136",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover8.jpg?alt=media&token=34295e70-de8c-4ed4-8040-e85e5618a140",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/journal%2Fjournal_cover9.jpg?alt=media&token=26d50fa6-4a83-488e-b3e0-a9c7e777f5a8",
];

export const getJournalCover = () => {
  const id = getRandomNumber(9);
  return data[id];
};
