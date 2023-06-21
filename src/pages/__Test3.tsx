import Button from "../components/base/button";
import Input from "../components/base/input";

const Test3 = () => {
  return (
    <div className="pt-20 container mx-auto">
      <Button variant="danger" bg="solid" rounded="lg">
        Reusable Button
      </Button>
      <br />
      <Input placeholder="Email Address" type="email" name="email" />
    </div>
  );
};

export default Test3;
