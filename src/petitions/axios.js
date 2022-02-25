import axios from 'axios';

export const loginRequest = async () => {
  try {
    const payload = { user: 'frontend', password: 'ghop' };
    const res = await axios.post('ghoptest.ddns.net:2028', payload);
    // const data = res.data;
    console.log(res.status);
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async () => {
  try {
    const res = await axios.get('ghoptest.ddns.net:2028');
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const headerRequest = async () => {
  try {
    const res = await axios.head('http://webcode.me');

    console.log(`Status: ${res}`);
    // console.log(`Server: ${res.headers.server}`);
    // console.log(`Date: ${res.headers.date}`);
  } catch (error) {
    console.log(error);
  }
};
