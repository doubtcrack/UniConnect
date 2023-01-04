import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../styles/contact.css";
import ContactInput from "../components/ContactInput";
import { FileUpload } from "../components/FileUpload";
import { reset, updateAd } from "../redux/ads/adsSlice";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const UpdateAd = () => {
  const [value, setValue] = useState(null);
  const [allValues, setAllValues] = useState({
    title: "",
    description: "",
    brand: "",
    condition: "",
    category: "",
    price: null,
    images: [],
    location: "",
  });

  const dispatch = useDispatch();
  const ad_location = useLocation();
  const id = ad_location.state;
  const { errorMessage, successMessage, isError, isSuccess, isLoading } =
    useSelector((selector) => selector.ads);

  useEffect(() => {
    if (isError && errorMessage) {
      toast.error(errorMessage);
    }

    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }
  }, [isError, isSuccess, errorMessage, successMessage, dispatch]);

  useEffect(() => {
    return () => dispatch(reset());
  }, [dispatch]);

  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  const dropDownChange = (e) => {
    setAllValues({ ...allValues, condition: e.target.value });
  };
  const categoryDropdownChange = (e) => {
    setAllValues({ ...allValues, category: e.target.value });
  };
  const location = (e) => {
    setAllValues({ ...allValues, location: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (allValues.images) {
      for (let i = 0; i < allValues.images.length; i++) {
        formData.append("images", allValues.images[i].file);
      }
    }

    allValues.title && formData.append("title", allValues.title);
    allValues.brand && formData.append("brand", allValues.brand);
    allValues.category && formData.append("category", allValues.category);
    allValues.condition && formData.append("condition", allValues.condition);
    allValues.description &&
      formData.append("description", allValues.description);

    allValues.price && formData.append("price", allValues.price);
    allValues.location && formData.append("location", allValues.location);
    dispatch(updateAd({ id, ad: formData }));

    setAllValues({
      title: allValues.title,
      description: allValues.description,
      brand: allValues.brand,
      condition: allValues.condition,
      category: allValues.category,
      price: allValues.price,
      images: [],
      location: allValues.location,
    });
  };
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
    <div className="contact_page ">
      <div className="cliped_bg updatead_page"></div>
      <Container>
        <div className="contact_us_container">
          <h3 className="heading" style={{ color: "#fff" }}>
            UPDATE YOUR AD
          </h3>
          <p className="description" style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi natus
            veniam eveniet id, distinctio ipsa rerum veritatis porro ea soluta.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            ratione.
          </p>

          <form
            className="contactform"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Row className="g-2 gy-4">
              <ContactInput
                label="Ad title"
                placeholder="title..."
                name="title"
                handleChange={handleChange}
              />
              <ContactInput
                label="Description"
                placeholder="Add your ad description..."
                name="description"
                handleChange={handleChange}
              />
              <ContactInput
                label="Brand"
                placeholder="e.g Apple, Samsung..."
                name="brand"
                handleChange={handleChange}
              />

              <div>
                <p className="input_label">Condition</p>

                <Form.Select onChange={dropDownChange}>
                  <option value="New">New</option>
                  <option value="Open">Open</option>
                  <option value="Used">Used</option>
                  <option value="Refurbished">Refurbished</option>
                </Form.Select>
              </div>

              <div>
                <p className="input_label">Categories</p>

                <Form.Select onChange={categoryDropdownChange}>
                  <option value="Books">Books</option>
                  <option value="Lab Coat">Lab Coat</option>
                  <option value="Apron">Apron</option>
                  <option value="Calculator">Calculator</option>
                  <option value="Hostel Stuff">Hostel Stuff</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </div>

              <ContactInput
                label="SET A PRICE"
                placeholder="price..."
                type="number"
                name="price"
                handleChange={handleChange}
              />

              <FileUpload allValues={allValues} setAllValues={setAllValues} />

              <div className="input-control">
                <label className="mb-2 text-uppercase">
                  Enter your location
                </label>
                <Form.Select onChange={location}>
                  <option value="Delhi Technological University(DTU)">
                    Delhi Technological University(DTU)
                  </option>
                  <option value="Netaji Subhas Institute of Technology(NSIT)">
                    Netaji Subhas Institute of Technology(NSIT)
                  </option>
                  <option value="Indra Gandhi Delhi Technological University for Women(IGDTUW)">
                    Indra Gandhi Delhi Technological University for
                    Women(IGDTUW)
                  </option>
                  <option value="Indraprastha Institude of Information Technology Delhi(IIITD)">
                    Indraprastha Institude of Information Technology
                    Delhi(IIITD)
                  </option>
                  <option value="Indian Institude of Technology Delhi(IIT)">
                    Indian Institude of Technology Delhi(IIT)
                  </option>
                </Form.Select>
              </div>
            </Row>

            <p className="agreement_heading">
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>

            <div>
              <Button style={{ background: "#333333" }} type="submit">
                UPDATE
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateAd;
