import { PuffLoader } from "react-spinners";

const Spinners = () => {
  return (
    <div className="flex min-h-screen grow items-center">
      <PuffLoader
        className="mx-auto font-medium text-neutral-blue"
        size={45}
      />
    </div>
  );
};

export default Spinners;
