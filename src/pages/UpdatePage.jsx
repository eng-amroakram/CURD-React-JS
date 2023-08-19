import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Update Page</h1>
      <UpdateForm id={id} />
    </div>
  );
}

export default UpdatePage;
