import parse from "html-react-parser";
import "./Detail.css";

const Details = ({ description }: { description: string }) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  );
};

export default Details;
