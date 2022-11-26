import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAds, reset } from "../redux/ads/adsSlice";
import { InnerCard } from "./InnerCard";

const Cards = () => {
  const { ads, isLoading, filteredAds } = useSelector(
    (selector) => selector.ads
  );
  console.log(filteredAds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  useEffect(() => {
    return () => dispatch(reset());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeDots color="#3a77ff" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="AdCard">
      <Row className="g-3">
        <InnerCard img="https://thumbs.dreamstime.com/b/learn-physics-concept-book-title-d-stack-business-books-spines-closeup-view-leather-bound-stack-closeup-78780448.jpg" />
        <InnerCard img="https://m.media-amazon.com/images/S/aplus-media-library-service-media/772273b8-9998-4832-adf3-10fd44c4e2df.__CR0,65,395,395_PT0_SX300_V1___.png" />
        <InnerCard img="https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg" />
        <InnerCard img="https://www.ulcdn.net/images/products/579152/slide/666x363/Taylor_Storage_Study_Table_Classic_WalnutLa.jpg?1655450584" />

        {/* {filteredAds.length > 0 ? (
          filteredAds.map((ad) => <InnerCard ad={ad} />)
        ) : (
          <div style={{ height: "35vh" }}>
            <h1>You have no ads to show</h1>
          </div>
        )} */}
      </Row>
    </div>
  );
};

export default Cards;
