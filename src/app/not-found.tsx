import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-foreground-muted text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <Button variant={"destructive"}>Go Back Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
