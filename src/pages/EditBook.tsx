import Layout from "../layouts/Layout";
import Edit from "../layouts/Edit";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  return (
    <Layout>
      <Edit id={id} />
    </Layout>
  );
};

export default EditBook;
