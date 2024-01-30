import { getRandomNumber } from "./RanomNumber";

const data = [
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/zacp0rqiezkrnlrdvac4.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/kcg5so9173r3luyjfwba.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/mjfusq7ac5dsehsfxzax.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/dldguyu857r2qzrtthwr.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/p3dwwnoexqctzgelxd1u.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/s1f8uuo9uwlxsze9r59h.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/pn2vvac4flfksizo0ewy.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/mfpmqaglummafpyhjwnm.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/rx3omietndfhspeld6im.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/ovehfm5vy62eum8dbquo.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/owppsnnvkhvrazk2tvwl.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547558/home-icons/tpxi2fybc4pobcdxw5cg.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/swnodkxmx9hljsc1kx5y.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/spzux4yzrq6qnshqrlc8.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/rsofjky9pjqo41xmrtte.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/z3arafwl8vwbkghvnjop.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/pqb6i2x7qrjkbm09nq1s.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/llq9zrqezt9c2acxczhf.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/fj1mwamrl1d3ethfzdst.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/ld67iai7vnktvyn7yrgg.png",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547560/home-icons/drgb6rfk9busqia5k6jo.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/wyhf7l93ruxktwmzaxhi.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/ep6gkxbfjhand1cekzrv.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/o9jxdvi6mmxawnjhxlws.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/cicqdiyqd0xszpkzfsjg.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/kffwwnplklt94erbarqd.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/sggebry7msmmydssglte.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/ljvcwh4bldcvhcmqhhib.jpg",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/yq35v5wi2evrhqlpound.png",
  "https://res.cloudinary.com/di9xrtfcu/image/upload/v1706547559/home-icons/xfwjgqk6ogtuvmrhgmrm.jpg",
];

export const getHomeTaskIcon = () => {
  const id = getRandomNumber(30);
  return data[id];
};
