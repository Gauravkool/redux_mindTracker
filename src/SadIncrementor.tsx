import { FC, memo, useState } from "react";
import Button from "./Button/Button";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions/mood-actions";

type SadIncrementorProps = {};
const SadIncrementor: FC<SadIncrementorProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function increment() {
    dispatch(sadButtonClicked(quantity, new Date));
  }
  function clear(){
    
  }
  return (
    <div>
      <h3>Are you Sad</h3>
      <input
        className="border border-gray-300 rounded-md"
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <Button onClick={increment} className="bg-blue-700">
        Yes
      </Button>
      <Button onClick={clear} className="bg-blue-700">
        Clear
      </Button>
    </div>
  );
};
SadIncrementor.defaultProps = {};
export default memo(SadIncrementor);
