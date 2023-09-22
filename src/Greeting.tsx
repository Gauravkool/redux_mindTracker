import { FC, memo, useState } from "react";

type GreetingProps = {
  name: string;
};
const Greeting: FC<GreetingProps> = (props) => {
  const [count, setCount] = useState(0);
  const [reviews, setReview] = useState<string[]>([]);
  // setCount((count) => count + 1);
  return <h1 className="text-2xl text-indigo-700">Hello, {props.name}</h1>;
};

Greeting.defaultProps = {};
export default memo(Greeting);
