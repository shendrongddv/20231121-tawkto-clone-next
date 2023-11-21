import { fakerWhyUs } from "@/config/faker";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3">
          <h2 className="h2">Why tawk.to?</h2>
          <p className="lead">
            Because you need a <b>free</b> and <b>easy</b> way to communicate
            with your customers
          </p>
        </div>

        {/* Row */}
        <ul className="grid gap-12 md:grid-cols-3">
          {fakerWhyUs?.map((item) => (
            // Col
            <li
              key={item.id}
              className="flex flex-col items-center gap-2 text-center"
            >
              {/* # */}
              <figure className="mx-auto w-4/5">
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={842}
                  height={595}
                  className="h-full w-auto"
                />
              </figure>

              {/* # */}
              <h3 className="h3 mt-2">{item.title}</h3>

              {/* # */}
              <p className="opacity-80">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
