// import Button from "./Button/Button";
// import Greeting from "./Greeting";
// import Greeting2 from "./Greeting2";
// import ProductDetail from "./ProductDetail";
// import { ChangeEvent, MouseEvent, useRef, useState } from "react";
// import HappyTrackor from "./HappyTrackor";
// import SadTrackor from "./SadTrackor";
// import HappyIncrementor from "./HappyIncrementor";
// import SadIncrementor from "./SadIncrementor";

import { Route, Routes } from "react-router-dom";
import OrderListPage from "./OrderListPage";
import OrderDetailsPage from "./OderDetailPageWithRedux";
import ProductListPage from "./ProductListPage";

// import ProductListPage from "./ProductListPage";
function App() {
  // const [count, setCount] = useState(1);
  // const videoRef = useRef<HTMLVideoElement>(null);
  // console.log("App component count upadet", count);
  // function handleClick(e: MouseEvent<HTMLButtonElement>) {
  //   console.log(e.target);
  // }
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   console.log(e.target.value);
  // }
  return (
    <>
      {/* <Greeting name="Gaurav Monali" /> */}
      {/* {count < 3 && <Greeting2 name="Monali" />}
      <Greeting2 name="Gaurav" />
      <video ref={videoRef} src="/OshoVideo.mp4" controls></video>
      <Button
        onClick={() =>
          videoRef.current?.paused
            ? videoRef.current?.play()
            : videoRef.current?.pause()
        }
      >
        Increamnet({count})
      </Button> */}
      {/* <Button theme="primary">Signup</Button>
      <button onClick={handleClick}></button>
      <input onChange={handleChange}></input>
      <ProductDetail
        title="Oppo 30 pro"
        price={999}
        description="This is awesome mobile "
      ></ProductDetail> */}
      {/* <div className="p-2 space-y-2">
        <HappyTrackor />
        <SadTrackor />
        <HappyIncrementor />
        <SadIncrementor />
        <ProductListPage />
      </div> */}
      <div>
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/orders" element={<OrderListPage />}></Route>
          <Route path="/orders/:orderId" element={<OrderDetailsPage orderId={4} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

// type ProductProps = {
//   id: number;
//   title: string;
//   description: string;
// };
// const [product, setProduct] = useState<ProductProps>();
// const [product, setProduct] = useState(0); // default
// const [product, setProduct] = useState(""); // default

// const UserContext = createContext({ user: { id: 1, name: "gaurav" } }); default //
// type Usre = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserContextData =
//   | {
//       user: Usre;
//       setUser: (u: Usre) => void;
//     }
//   | undefined;
// const UserContext1 = createContext<UserContextData>(undefined);
