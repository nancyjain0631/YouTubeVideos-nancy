import axios from "axios";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
  });
// const KEY='AIzaSyAuWKnJQYYwzE5ZP-5Wdp6OpNCOs-NOyg0';

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params:{
//         part:'snippet',
//         maxResults:5,
//         key:KEY
//     }
// });
