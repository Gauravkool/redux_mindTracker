import React, { PureComponent } from "react";
import Button from "./Button/Button";
import Product from "./Models/Product";

type Greeting2Props = {
  name: string;
};
type Greeting2StateProps = {
  count: number;
  reviews: string[];
  loading: boolean;
  product: Product;
};
class Greeting2 extends PureComponent<Greeting2Props, Greeting2StateProps> {
  constructor(props: Greeting2Props) {
    super(props);
    this.state = {
      count: 0,
      reviews: ["Awesome product", "bed product"],
      loading: false,
    };
    this.handleIncreament = this.handleIncreament.bind(this);
    this.setLoading = this.setLoading.bind(this); // ab hum esko as a props pass kar sakte hai apne child component ko 
    console.log("constructor called", this.props.name);
  }

  setLoading(loading: boolean) {
    this.setState({ loading });
  } // es function ko hum props me de sakte hai. jaha par return wala code likha hua hai waha se

  handleIncreament() {
    this.setState({ count: this.state.count + 1 });
    // this.setState(() => this.state.count + 1);
  }
  componentDidMount() {
    console.log("componentDidMount called", this.props.name);
  }
  // shouldComponentUpdate(
  //   nextProps: Readonly<Greeting2Props>,
  //   nextState: Readonly<Greeting2StateProps>,
  //   nextContext: any
  // ): boolean {
  //   console.log("shouldComponentUpdate called", this.props.name);
  //   if (this.props.name === nextProps.name) {
  //     return false;
  //   }
  //   return true;
  // }
  componentDidUpdate(
    prevProps: Readonly<Greeting2Props>,
    prevState: Readonly<Greeting2StateProps>,
    snapshot?: any
  ) {}
  componentWillUnmount(): void {
    console.log("componentWillUnmount called", this.props.name);
  }
  render(): React.ReactNode {
    // console.log("this.state", this.state);
    console.log("render called", this.props.name);
    return (
      <>
        <h1 className="text-2xl text-red-700">
          Hello, {this.props.name} {this.state.count}
        </h1>
        {/* <Button onClick={this.handleIncreament}>Increment</Button> */}
      </>
    );
  }
}
export default Greeting2;
