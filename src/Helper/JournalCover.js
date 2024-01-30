import { getRandomNumber } from "./RanomNumber";

const data = [
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598975/journal-cover/kahsagemowpmvvykhf54.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598975/journal-cover/vxd9iohmqozpghjosm94.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598975/journal-cover/dy0sxmsatde2o0ep4psh.avif",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598975/journal-cover/kuwsolhatvzxio6k5m04.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598975/journal-cover/ndbublxhicp3ufjxyolw.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/nn8eshybronbzijugddp.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/ksrf9eumfzhwxf8cfb9t.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/wq9kq9xbntawmri4epfh.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/xrlcyi7chklwqm1tqqz8.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/veqhfdplvxmqf7vfzxyj.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706598974/journal-cover/l0u0cypwrc2aeqbffkoe.jpg",
];

export const getJournalCover = () => {
  const id = getRandomNumber(11);
  return data[id];
};
