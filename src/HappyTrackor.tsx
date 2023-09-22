import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectors/mode-Selectors";

type HappyTrackorProps = {};

const HappyTrackor: FC<HappyTrackorProps> = () => {
  console.log("HappyTrackor refreshed");
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className=" bg-orange-700 text-white px-8 py-4">
      {happyMoments.map((m) => (
        <div key={m.when}>
          Happyness Intensity : {m.intensity}, {m.when.toISOString()}
        </div>
      ))}
    </div>
  );
};
HappyTrackor.defaultProps = {};
export default memo(HappyTrackor);
