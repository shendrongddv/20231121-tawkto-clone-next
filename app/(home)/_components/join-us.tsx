import { Button } from "@/components/ui/button";
import { CheckCircle, ThumbsUp } from "lucide-react";

const fakerLists = [
  {
    id: 1,
    title: "Easy set-up",
  },
  {
    id: 2,
    title: "Free Forever",
  },
  {
    id: 3,
    title: "Secure",
  },
];

const JoinUs = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-1/2">
          <h2 className="h2">People prefer to message</h2>
          <p className="lead">
            Your customers have spoken loud and clear. Messaging is their
            channel of choice — and you need to be where your customers are,
            when they need you the most.
          </p>
        </div>

        {/* Row */}
        <ul className="flex items-center justify-center gap-4 md:gap-12">
          {fakerLists?.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-4 w-4 text-primary md:h-5 md:w-5" />
              <span className="text-sm font-semibold opacity-80 md:text-lg">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Row */}
        <Button
          size="lg"
          className="mt-4 uppercase transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Sign Up Free
        </Button>
      </div>
    </section>
  );
};

export default JoinUs;
