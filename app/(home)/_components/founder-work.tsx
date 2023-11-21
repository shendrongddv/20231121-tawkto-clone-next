import Image from "next/image";

const FounderWork = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container">
        {/* Row */}
        <div className="flex flex-col-reverse items-center gap-8 md:mx-auto md:w-4/5 md:flex-row md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
              <h2 className="text-2xl font-black md:text-4xl">
                &quot;You shouldn&apos;t have to pay to chat with the visitors
                on your website. They&apos;re your visitors!&quot;
              </h2>
              <p className="text-xl font-medium text-primary md:text-2xl">
                Forever Free. It&apos;s that simple.
              </p>
              <span className="text-base text-muted-foreground md:text-lg">
                Robert, founder.
              </span>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <figure className="mx-auto w-1/3 md:w-full">
              <Image
                src="/robert.webp"
                alt="Robert"
                width={480}
                height={480}
                className="h-full w-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderWork;
