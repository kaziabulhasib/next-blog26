import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] text-center px-4'>
      <h1 className='text-6xl font-extrabold mb-6'>404</h1>
      <h2 className='text-3xl font-semibold mb-6'>page not found </h2>
      <p className="text-muted-foreground text-lg mb-6">the page you trying to reach does not exist </p>
      <Button asChild>
        <Link href='/'>Back to home</Link>
      </Button>
    </div>
  );
}
