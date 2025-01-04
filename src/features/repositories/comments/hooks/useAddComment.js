import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const useAddComment = (repoId, handleClose) => {
  const userInfo = JSON.parse(Cookies.get("userInfo"));

  const validationSchema = yup.object({
    [repoId]: yup.string().required("Comment is required"),
  });

  const formik = useFormik({
    initialValues: {
      [repoId]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const comments = JSON.parse(localStorage.getItem("repoComments") || "{}");
      comments[repoId] = values[repoId];
      localStorage.setItem("repoComments", JSON.stringify(comments));
      handleClose();
      toast.success("Comment added successfully!");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      toast.error(errors[repoId]);
    } else {
      formik.handleSubmit();
    }
  };

  return { userInfo, formik, handleSubmit };
};
