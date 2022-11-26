import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyAd from "../components/MyAd";
import { myads, reset } from "../redux/ads/adsSlice";

const MyAds = () => {
  const dispatch = useDispatch();
  const { ads } = useSelector((select) => select.ads);

  useEffect(() => {
    dispatch(myads());
  }, [dispatch]);

  useEffect(() => {
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <Container>
      {/* {ads.length > 0 ? (
        ads.map((ad) => (
          <>
            <h1 className="mt-5 mb-3">Your Ads</h1>
            <MyAd ad={ad} />
          </>
        ))
      ) : (
        <div style={{ height: "35vh" }}>
          <h1>Your AD bucket is empty</h1>
        </div>
      )} */}
      <h1 className="mt-5 mb-3">Your Ads</h1>
      <MyAd />
    </Container>
  );
};

export default MyAds;
