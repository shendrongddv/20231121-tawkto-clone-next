import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:w-2/3">
          {/* # */}

          {/* # */}
          <h1 className="h1">
            Message your customers, they&apos;ll love you for it
          </h1>

          {/* # */}
          <p className="mt-2 text-center text-lg md:w-2/3">
            Monitor and chat with the visitors on your website, respond to
            support tickets, organize contacts and create a help center to
            empower customers to help themselves. <b>All 100% Free</b> -
            Don&apos;t believe us?&nbsp;
            <span className="text-primary">Read why</span>
          </p>

          {/* # */}
          <Button
            size="lg"
            className="my-4 font-semibold uppercase transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            Sign Up Free
          </Button>

          {/* # */}
          <span className="text-sm">
            Easy set-up • <b>Free Forever</b> • Secure​
          </span>

          {/* # */}
          <p className="text-lg">
            Live Chat • Ticketing • CRM • Knowledge Base • Chat Pages • Team
            Chat • + More
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
