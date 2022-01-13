import { useParams } from "react-router-dom";
import { useFetch } from "../auth/functions";

const Details = () => {
  const { id } = useParams();
  const { blogsList } = useFetch();
  console.log(blogsList);
  return (
    <div
      style={{
        marginTop: "8rem",
        fontSize: "3rem",
        color: "#046582",
        fontFamily: "Girassol",
        fontWeight: 800,
      }}
    >
      <h3>─── Details ───</h3>
      {blogsList?.map((card) => (card.id === id ? <p>{card.id}</p> : null))}
    </div>
  );
};

export default Details;
