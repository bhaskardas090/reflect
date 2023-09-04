import { getRandomNumber } from "./RanomNumber";

const data = [
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg1.jpg?alt=media&token=d3cfed58-378d-4d15-afa8-2bc13d2f1093",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg10.jpg?alt=media&token=df13fa1f-83be-4d57-9654-38a103361f71",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg11.jpg?alt=media&token=736d6a5b-2a95-4504-b013-7c1581dce281",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg12.jpg?alt=media&token=7b6d3049-f5bc-45fe-bd36-cd9ae88b9640",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg13.jpg?alt=media&token=436b7bac-b3bd-4d45-93e6-d7c912c477c6",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg14.jpg?alt=media&token=79108674-0fd4-4cc2-b66e-db9184a82958",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg15.png?alt=media&token=e7b0da46-a47c-4705-9cb7-09ef327e413f",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg16.jpg?alt=media&token=ee25a116-a60b-4c2b-b2e3-bd2296f730f5",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg17.jpg?alt=media&token=92b92e46-f982-4dbb-9187-f5d2941c23aa",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg18.jpg?alt=media&token=fbcb579e-7d99-4686-b423-df94757dc654",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg19.jpg?alt=media&token=5a8650d0-4f5b-4b1f-884e-0336e93c52c5",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg2.jpg?alt=media&token=3549d878-6e92-49d0-9bbc-b8e5759c69f6",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg20.jpg?alt=media&token=ec67f97c-74a8-4c4a-9820-86b578bc3d06",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg21.jpg?alt=media&token=4ed07d22-59ae-41c3-a474-7b51e282a11d",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg22.jpg?alt=media&token=5f44bb77-4313-4578-ad67-8ad582365572",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg23.png?alt=media&token=66c3564f-948c-4390-92aa-a2f37caab5cd",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg24.jpg?alt=media&token=36c8b228-c1a0-4d7a-9da2-11f45399918d",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg25.jpg?alt=media&token=1f1c02a9-41e0-4c6c-9497-2e1cdf267166",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg26.jpg?alt=media&token=a46ab49f-1659-42cc-abef-81e7d90e6051",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg27.jpg?alt=media&token=0fe1a8fc-676b-42c5-8b42-ee62b80d81a7",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg28.jpg?alt=media&token=27b61808-808d-4c55-b0d2-bbe87ba3c2ec",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg29.jpg?alt=media&token=f2807f55-641b-4bfe-b2e0-d2a1673ba356",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg3.jpg?alt=media&token=adda66fc-fe62-4712-a3b6-27a645aacf98",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg30.jpg?alt=media&token=21d4d74b-d3a2-4af5-ba14-548551e2042e",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg4.jpg?alt=media&token=7ceb02a6-52d6-4f4f-96d2-f439c1f4ed34",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg5.jpg?alt=media&token=83100e42-f610-454a-99e4-efec6173de19",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg6.jpg?alt=media&token=d81af21a-e95b-4ec4-95b4-25cb3775693f",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg7.jpg?alt=media&token=7f084a1a-c801-483e-84c8-d63ac70b899f",
  "https://firebasestorage.googleapis.com/v0/b/reflect-manas.appspot.com/o/home%2Ficon%2FtaskImg8.jpg?alt=media&token=fee4c377-a5ae-41ec-b98f-020acd4ccb78",
  " ",
];

export const getHomeTaskIcon = () => {
  const id = getRandomNumber(30);
  return data[id];
};
