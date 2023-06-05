import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
    testImage: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, testImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      work,
      password,
      cpassword,
      testImage,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !work ||
      !password ||
      !cpassword ||
      !testImage
    ) {
      return alert("Please fill in all the fields");
    }

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("phone", phone);
      data.append("work", work);
      data.append("password", password);
      data.append("cpassword", cpassword);
      data.append("testImage", testImage);

      const res = await axios.post("/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Perform any necessary actions after successful registration

      // Clear form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
        testImage: null,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form onSubmit={handleSubmit} className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account zmdi-hc-lg "></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    value={formData.work}
                    onChange={handleInputChange}
                    placeholder="Your Profession"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-key zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-key zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={formData.cpassword}
                    onChange={handleInputChange}
                    placeholder="Conform Your Password"
                  />
                </div>


                <input
                  type="file"
                  name="testImage"
                  onChange={handleImageChange}
                  accept="image/png, image/jpeg"
                />

                <div className="form-group form-button">
                <button type="submit" className="form-submit">Register</button>
                  
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="./images/signup.png" alt="registration pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
