import { Button } from "@headlessui/react";
import Link from "next/link";
import { routes } from "@/lib/route";
import CourseList from "../components/courseList";

function MyCourse() {
  return (
      <>
        <section className="grid gap-5">
        <div className="capitalize grid gap-4 grid-cols-3 max-w-sm">
          <Button className="text-sm py-2 px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
            <Link href={routes.explore}> explore</Link>
          </Button>
          <Button className="text-sm py-2 px-5 text-[#A8C789] border-[#3B3B3A] border bg-transparent hover:text-white hover:bg-transparent rounded capitalize">
            <Link href={routes.myCourse}> my course</Link>
          </Button>
          <Button className="text-sm py-2 px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
            <Link href={routes.wishList}> wish list</Link>
          </Button>
          </div>
        </section>
        <CourseList/>
      </>
  );
}
export default MyCourse;
