import Image from "next/image";

const FounderWork = () => {
  return (
    <section className="bg-slate-100 px-4">
      <div className="container">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3"></div>

        {/* Row */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-start">
              <h2 className="text-4xl font-black">
                &quot;You shouldn&apos;t have to pay to chat with the visitors
                on your website. They&apos;re your visitors!&quot;
              </h2>
              <p className="text-3xl text-primary">
                Forever Free. It&apos;s that simple.
              </p>
              <span className="text-xl font-semibold text-muted-foreground">
                Robert, founder.
              </span>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure className="">
              <Image
                src="/robert-tawk-sm.png"
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
