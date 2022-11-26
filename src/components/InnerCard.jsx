import { Card, Col } from "react-bootstrap";
import book from "../images/ak_jha.jpg";

export const InnerCard = (img) => {
  console.log(img.img);
  return (
    <Col md={3}>
      <Card
        style={{
          width: "80%",
          height: "80%",
          cursor: "pointer",
          border: "none",
          color: "#626262",
          padding: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={img.img}
          height={300}
          // style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontWeight: "normal",
              fontSize: "14px",
            }}
          >
            A Textbook of Applied Physics
            <span style={{ userSelect: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </span>
          </Card.Title>
          <Card.Text style={{ fontSize: "25px", fontWeight: "bold" }}>
            Rs 450
          </Card.Text>
          <Card.Text style={{ fontSize: "13px" }}>DTU - 3 mins ago</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
