import axios from 'axios';

export const loginRequest = async (user) => {
  try {
    // const payload = { user: 'frontend', password: 'ghop' };
    const res = await axios.post('http://ghoptest.ddns.net:2028/login', user, {
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const openDoorRequest = async () => {
  try {
    const payload = { user: 'frontend' };
    const res = await axios.post('http://ghoptest.ddns.net:2028/open', payload, {
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
