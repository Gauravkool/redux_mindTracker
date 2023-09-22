import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors/mode-Selectors";

type SadTrackorProps = {};
const SadTrackor: FC<SadTrackorProps> = () => {
  console.log("SadTrackor refreshed");

  const sadMoments = useSelector(sadMomentsSelector);
  return (
    <div className="bg-blue-700 text-white px-8 py-4">
      {sadMoments.map((m) => (
        <div key={m.when}>
          Sadness Intensity : {m.intensity}, {m.when.toISOString()}
        </div>
      ))}
    </div>
  );
};
SadTrackor.defaultProps = {};
export default memo(SadTrackor);
