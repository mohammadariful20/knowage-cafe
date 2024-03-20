import img from "../../assets/images/profile.png";
export default function Header() {
  return (
    <div className="flex justify-between">
      <h2 className="text-4xl text-bold">Knowledge Cafe</h2>
      <img src={img} alt="" />
    </div>
  );
}
