import React, { useRef } from "react";
import styles from "./Home.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userInfo } from "../../store/slices/userSlice";
import axios from "axios";

const Home = ({ setHomeTrue }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handlesubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      if (!name || !email || !password) {
        return toast.error("All fields are required");
      }

      const response = await axios.post("http://localhost:8000/signUp", {
        name,
        email,
        password,
      });

      if (response) {
        console.log(response);
        dispatch(userInfo(response.data.newUser));
        setHomeTrue(false);

        return toast.success(
          `${response?.data?.newUser?.name} successfully registered`,
        );
      } else {
        return toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Internal server error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* LEFT SIDE */}
        <div className={styles.leftSection}>
          <div className={styles.overlay}></div>

          <div className={styles.leftContent}>
            {/* Calculator Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891175.png"
              alt="calculator"
              className={styles.calculatorImg}
            />

            <h1>Smart Calculator</h1>

            <p>
              Access your personal calculator workspace and manage all your
              calculations with a clean and modern experience.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span>✓</span>
                Fast & Smooth
              </div>

              <div className={styles.featureItem}>
                <span>✓</span>
                Professional Design
              </div>

              <div className={styles.featureItem}>
                <span>✓</span>
                Easy to Use
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightSection}>
          <div className={styles.formBox}>
            <h2>Create Account</h2>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  ref={nameRef}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                />
              </div>

              <button onClick={handlesubmit} className={styles.registerBtn}>
                Register & Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
