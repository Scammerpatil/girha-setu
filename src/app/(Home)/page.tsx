"use client";
import Link from "next/link";
import TypeWriter from "./TypeWriter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const propertyTypes = ["Apartment", "House", "Villa", "Penthouse", "Studio"];
  const locations = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"];
  const router = useRouter();
  const [filters, setFilters] = useState({
    keyword: "",
    propertyType: "",
    location: "",
  });
  const text = [
    "घर की तलाश ? अब हुई आसान ! 🏡",
    "सही घर, सही दाम, सही समय ! ⏳",
    "आपका सपना... हमारी जिम्मेदारी ! ✨",
    "खोजें, पसंद करें, और बस जाएँ ! 🚪",
    "GrihaSetu - घर खोजने का नया तरीका ! 🔍",
  ];
  const propertyType = [
    {
      name: "Apartment",
      image: "img/icon-apartment.png",
      count: 123,
    },
    {
      name: "Villa",
      image: "img/icon-villa.png",
      count: 123,
    },
    {
      name: "Home",
      image: "img/icon-house.png",
      count: 123,
    },
    {
      name: "Office",
      image: "img/icon-housing.png",
      count: 123,
    },
    {
      name: "Building",
      image: "img/icon-building.png",
      count: 123,
    },
    {
      name: "Townhouse",
      image: "img/icon-neighborhood.png",
    },
    {
      name: "Shop",
      image: "img/icon-condominium.png",
      count: 123,
    },
    {
      name: "Garage",
      image: "img/icon-luxury.png",
      count: 123,
    },
  ];
  const handleChange = (e: any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    router.push(`/listings?${query}`);
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-base-300 flex items-center justify-center h-[calc(100vh-4rem)]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-base-content sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  <TypeWriter text={text} />
                </h1>
                <p className="mb-12 text-base !leading-relaxed font-extralight text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  GrihaSetu is your one-stop destination for finding the perfect
                  home. With AI-powered recommendations, real-time availability,
                  and seamless in-app chat, we bridge the gap (Setu) between
                  property owners and seekers. Explore verified listings,
                  interact with agents, and book your dream space effortlessly.
                  Whether you're searching for a cozy flat or a luxury
                  apartment, GrihaSetu makes house hunting easier, smarter, and
                  more intuitive.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-primary-content duration-300 ease-in-out hover:bg-primary/80"
                    onClick={() => {
                      (
                        document.getElementById("login") as HTMLDialogElement
                      ).showModal();
                    }}
                  >
                    🚗 Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop
                  offset="0.145833"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop
                  offset="0.145833"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
      <section>
        <div className="bg-base-200 py-5 w-full">
          <div className="">
            <form
              onSubmit={handleSearch}
              className="w-full px-10 py-4 flex flex-wrap justify-between items-center gap-4"
            >
              {/* Search Keyword */}
              <input
                type="text"
                name="keyword"
                value={filters.keyword}
                onChange={handleChange}
                className="input w-1/4 h-16 py-4 px-6 bg-base-content text-base-300 text-lg placeholder:text-base-300"
                placeholder="Search Keyword"
              />

              {/* Property Type Dropdown */}
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleChange}
                className="input w-1/4 h-16 py-4 px-6 bg-base-content text-base-300 text-lg placeholder:text-base-300"
              >
                <option value="">What type of property?</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Location Dropdown */}
              <select
                name="location"
                value={filters.location}
                onChange={handleChange}
                className="input w-1/4 h-16 py-4 px-6 bg-base-content text-base-300 text-lg placeholder:text-base-300"
              >
                <option value="">Where do you want?</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              {/* Search Button */}
              <button
                type="submit"
                className="btn btn-primary w-1/5 h-16 text-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="pt-24 px-10">
        <div className="max-w-screen-md flex items-center justify-center flex-col gap-2 mx-auto mb-5">
          <h1 className="text-3xl text-center font-bold">Property Types</h1>
          <p className="text-center text-base text-base-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            similique commodi consectetur repellat, eos iure soluta veniam non.
            Atque nihil expedita possimus earum est aliquid veritatis esse
            delectus obcaecati omnis.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {propertyType.map((type, index) => (
            <div
              className="hover:bg-base-200 h-56 flex items-center justify-center rounded-md border border-base-content"
              key={index}
            >
              <a className="block text-center rounded p-3" href="">
                <div className="rounded p-4">
                  <div className="mb-3 ">
                    <Image
                      width={80}
                      height={80}
                      src={`/${type.image}`}
                      className="mx-auto rounded-full border border-dotted p-2"
                      alt="Icon"
                    />
                  </div>
                  <p className="text-lg">{type.name}</p>
                  <span className="text-base">{type.count} Properties</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
