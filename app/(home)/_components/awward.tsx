import Image from "next/image";

const Awward = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 from-50% to-background to-50% px-4">
      <div className="container">
        <div className="mx-auto flex flex-col items-center gap-8 rounded-lg bg-primary px-4 py-8 text-center md:w-3/4 md:p-10">
          {/* # */}
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Ranked #1 with a 98% customer satisfaction score, millions of people
            use tawk.to to interact with billions of customers.
          </h2>

          {/* # */}
          <figure aria-hidden className="h-6 w-auto md:h-10">
            <Image
              src="/forbes-white.png"
              alt="Forbes"
              width={220}
              height={66}
              className="h-full w-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Awward;
