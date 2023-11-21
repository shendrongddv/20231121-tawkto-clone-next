import { fakerHowItWork } from "@/config/faker";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HowItWork = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3">
          <h2 className="h2">How does it work?</h2>
          <p className="lead">
            Add a small JavaScript snippet to your site — it takes 30 seconds to
            get started
          </p>
        </div>

        {/* Row */}
        <div className="grid w-full gap-16">
          {fakerHowItWork?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between md:even:flex-row-reverse"
            >
              {/* Col */}
              <div
                className={cn(
                  "flex flex-col items-center gap-4 text-center md:w-5/12",
                  item.image.length > 1
                    ? "md:items-start md:text-start"
                    : "mx-auto",
                )}
              >
                {/* # */}
                <h3 className="h3 whitespace-normal md:w-4/5">
                  {item.title.start.length > 1 && <>{item.title.start}</>}

                  {item.title.accent.length > 1 && (
                    <>
                      <span className="text-primary">{item.title.accent}</span>
                    </>
                  )}

                  {item.title.end.length > 1 && <>{item.title.end}</>}
                </h3>

                {/* # */}
                <p className="opacity-80">{item.desc}</p>
              </div>

              {/* Col */}
              {item.image.length > 1 && (
                <div className="md:w-5/12">
                  <figure className="mx-auto w-3/4 md:w-full">
                    <Image
                      src={`/${item.image}`}
                      alt={`${item.title.start}${item.title.accent}${item.title.end}`}
                      width={1081}
                      height={607}
                      className="h-full w-auto"
                    />
                  </figure>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
