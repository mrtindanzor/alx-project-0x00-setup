import { Button } from "@/alx-project-0x00/components/Button";
import Card from "@/alx-project-0x00/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button size="sm" shape="sm" />
      <Button size="md" shape="md" />
      <Button size="lg" shape="full" />
    </div>
  );
};
export default Landing;
