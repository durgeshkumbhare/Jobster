import React, { useEffect, useState } from "react";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/User/UserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };

  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all the fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ email, password, name }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        {/* NAME FIELD */}
        {!values.isMember && (
          <FormRow
            type="name"
            name="name"
            handleChange={handleChange}
            value={values.name}
          />
        )}
        {/* EMAIL FIELD */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        {/* PASSWORD FIELD */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <button type="button" className="btn btn-block btn-hipster" disabled={isLoading} onClick={()=> dispatch(loginUser({email: 'testUser@test.com', password:'secret'}))}>
          Demo User
        </button>
        <p>
          {values.isMember ? "Not a Member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
