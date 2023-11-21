import { fakerLogoClouds } from "@/config/faker";
import Image from "next/image";

const ClientClouds = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container">
        {/* Row */}
        <ul className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {fakerLogoClouds?.slice(0, 12)?.map((item) => (
            <li
              key={item.id}
              className="group grid place-content-center bg-slate-100 p-3 sm:p-4 md:p-6"
            >
              <figure className="h-8 w-auto transition duration-300 group-hover:scale-110 sm:h-8 md:h-10">
                <Image
                  src={`https://img.logoipsum.com/2${item.image}.svg`}
                  alt={item.image.toString()}
                  width={128}
                  height={128}
                  className="h-full w-auto grayscale transition duration-300 group-hover:grayscale-0"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientClouds;
