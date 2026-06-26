import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikYupValidation() {
  return (
    <Formik
      initialValues={{ username: "", email: "" }}
      onSubmit={(values) => {
        console.log("submitted:", values);
      }}
    >
      <Form className="border border-black p-4 rounded max-w-md mx-auto flex flex-col gap-4">
        <div>
          <label className="block mb-1">Username:</label>
          <Field
            name="username"
            type="text"
            className="w-full border border-black p-2 rounded"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <Field
            name="email"
            type="email"
            className="w-full border border-black p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2 rounded hover:bg-gray-800 cursor-pointer"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}