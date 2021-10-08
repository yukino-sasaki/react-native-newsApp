import axios from 'axios';

const URL = '1b6ed6c353f6489282bf54392e16471c';

export const fetchData = async () => {
  await axios.get(URL).then(res => console.log(res));
};
