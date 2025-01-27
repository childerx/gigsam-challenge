import ButtonLoader from "@/components/loaders/button";
import { DASHBOARD, SIGNUP } from "@/constants/page-path";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-location";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required"),
    }),

    onSubmit: (values, actions) => {
      setLoading(true);
      setTimeout(() => {
        navigate({ to: DASHBOARD });
        actions.resetForm();
        setLoading(false);
      }, 4000);
    },
  });

  return (
    <div className="w-full flex flex-col gap-y-10">
      <div>
        <h1 className="font-bold text-3xl mobile:text-xl">Welcome Back</h1>
        <p className="text-[#A3A3A3] font-normal mobile:text-sm">
          Log in to access your NIDF Portal account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-2">
        <label htmlFor="Email" className="font-normal text-xs">
          Email
        </label>
        <input
          id="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-3 h-12 rounded-md  border border-[#EAE0E0] focus:outline-0 focus:outline-primary-300 
           transition-all duration-300 ease-in-out placeholder:font-normal placeholder:text-xs placeholder:text-[#969696] 
           text-base font-normal ${
             errors.email && touched.email ? "border border-[#fc8181]" : ""
           }`}
        />
        {errors.email && touched.email ? (
          <p className="font-normal text-xs text-[#fc8181]">{errors.email}</p>
        ) : (
          ""
        )}
        <label htmlFor="password" className="font-normal text-xs">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-3 h-12 rounded-md  border border-[#EAE0E0] focus:outline-0 focus:outline-primary-300 
            transition-all duration-300 ease-in-out placeholder:font-normal placeholder:text-xs placeholder:text-[#969696] 
            text-base font-normal ${
              errors.password && touched.password
                ? "border border-[#fc8181]"
                : ""
            }`}
        />
        {errors.password && touched.password ? (
          <p className="font-normal text-xs text-[#fc8181]">
            {errors.password}
          </p>
        ) : (
          ""
        )}
        <p className="text-base text-[#1024A3] font-normal cursor-pointer mobile:text-sm">
          Forgotten Password?
        </p>
        <button
          disabled={isSubmitting}
          type="submit"
          className={`bg-[#17567E] w-44 h-12 flex justify-center items-center rounded-md text-white mobile:text-sm mx-auto my-3 mobile:py-2 mobile:px-10 ${
            isSubmitting ? "opacity-35" : ""
          }`}
        >
          {loading ? <ButtonLoader title="Logging In" /> : "Log In"}
        </button>
        <p
          className="mx-auto font-normal text-base mobile:text-sm mobile:text-center"
          onClick={() => {}}
        >
          Don’t have an account?{" "}
          <Link
            to={SIGNUP}
            className="text-[#1024A3] cursor-pointer mobile:text-sm"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
