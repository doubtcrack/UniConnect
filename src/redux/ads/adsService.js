import axios from "axios";

const url = "https://uni-connect.vercel.app";

// POST ADS
const postAd = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const ad = await axios({
    method: "post",
    url: `${url}/api/post`,
    headers: header,
    data,
  });

  return ad.data;
};

// GET ADS
const getAds = async () => {
  const ads = await axios.get(`${url}/api/items`);

  return ads.data;
};

// GET ITEM USER
const getItemUser = async (userId) => {
  const user = await axios({
    method: "post",
    url: `${url}/api/item/user`,
    data: { userId },
  });

  return user.data;
};

// MY ADS
const myads = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const user = await axios({
    method: "get",
    url: `${url}/api/myads`,
    headers: header,
  });

  return user.data;
};
// DELETE AD
const deleteAd = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const user = await axios({
    method: "delete",
    url: `${url}/api/item/delete/${id}`,
    headers: header,
  });

  return user.data;
};
// UPDATE AD
const updateAd = async ({ id, ad }) => {
  // console.log(ad)
  const token = JSON.parse(localStorage.getItem("token"));

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const user = await axios({
    method: "put",
    url: `${url}/api/item/update/${id}`,
    data: ad,
    headers: header,
  });

  return user.data;
};

const adsService = {
  postAd,
  getAds,
  getItemUser,
  myads,
  deleteAd,
  updateAd,
};

export default adsService;
