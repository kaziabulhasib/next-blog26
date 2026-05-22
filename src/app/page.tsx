import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    // make the content center vertically
    <div className="h-screen flex flex-col items-center justify-center  mx-auto">
      <h1>Home</h1>
      <Button variant={"destructive"}  className="bg-blue-600">click</Button>
    </div>
  );
}

export default HomePage;
