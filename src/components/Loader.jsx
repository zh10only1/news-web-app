import { TailSpin } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col gap-[20px] items-center justify-center h-[400px]">
      <h2 className="font-poppins text-[#D62828] text-xl font-semibold">
        Loading {text}
      </h2>
      <TailSpin
        height={80}
        width={80}
        radius={1}
        color={"red"}
        wrapperStyle={{ background: "transparent" }}
      />
    </div>
  );
};

export default Loader;
