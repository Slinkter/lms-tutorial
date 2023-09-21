import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher">
        <Button>new Course</Button>
      </Link>
    </div>
  );
};

export default CoursePage;
