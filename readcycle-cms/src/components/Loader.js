export default function Loader() {
  return (
    <>
      <div className="fixed flex w-full h-screen bg-white opacity-50">
        <img src={require("../images/loader.gif")} className=" mx-auto my-auto" />
      </div>
    </>
  );
}
