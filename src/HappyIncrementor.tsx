import { FC, memo, useState } from "react";
import Button from "./Button/Button";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/mood-actions";

type HappyIncrementorProps = {};
const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function increment() {
    dispatch(happyButtonClicked(quantity, new Date));
  }
  function clear(){
    
  }
  return (
    <div>
      <h3>Are you Happy</h3>
      <input
        className="border border-gray-700 rounded-md"
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <Button onClick={increment} className="bg-orange-700 ">
        Yes
      </Button>
      <Button onClick={clear} className="bg-orange-700 ">
        Clear
      </Button>
    </div>
  );
};
HappyIncrementor.defaultProps = {};
export default memo(HappyIncrementor);
