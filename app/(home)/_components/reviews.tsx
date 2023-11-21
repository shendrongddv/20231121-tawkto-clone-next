import { Button } from "@/components/ui/button";
import { Videotape } from "lucide-react";

const Reviews = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3">
          <h2 className="text-4xl font-black">
            Don&apos;t take our word for it though ...
          </h2>
          <p className="text-xl">
            See how <b>5+ MILLION</b> people use tawk.to to get closer to their
            customers
          </p>
        </div>

        {/* Row */}
        <Button
          size="lg"
          className="mt-4 uppercase transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Videotape className="mr-2 h-4 w-4" />
          More Customer Stories
        </Button>
      </div>
    </section>
  );
};

export default Reviews;
