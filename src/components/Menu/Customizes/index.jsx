import React from "react";
import CusomizeMobile from "./CusomizeMobile";

const Customization = () => {
  const cards = [
    "Vegan / Vegetarian",
    "Gluten-Free / Lactose-Free",
    "Diabetic / Cardiac-Friendly",
    "Allergen-Aware Meal Prep",
    "Halal-Certified Ingredients (100%)",
  ];
  return (
    <section className="containers pt-8 md:pt-10 lg:pt-16">
      <div className="flex flex-col items-center gap-y-3 md:gpa-y-5 lg:gap-y-7">
        <h3 className="main-heading-2 text-center">Menu Customization</h3>
        <p className="description text-center !max-w-[780px]">
          We don’t believe in one-size-fits-all menus. Every event is different
          — and so is every menu. Our chefs work directly with you (and your
          event planner) to create a dining experience that reflects your
          vision, brand, and guests’ preferences.
        </p>
      </div>

      <div className="mt-6">
        <h4 className=" text-xl md:text-2xl lg:text-3xl text-center text-main font-americana font-medium leading-[146%] tracing-[0.9px]">
          Dietary Options Supported
        </h4>

        <div className=" gap-y-5 lg:gap-y-0 justify-center gap-x-5 flex-wrap lg:flex-nowrap lg:justify-between grid-  grid-cols-5 md:mt-6 lg:mt-10 hidden md:flex">
          {cards?.map((card, index) => {
            return (
              <div
                key={index}
                className="border col-span-1 border-[#EDCF95] p-10 xl:p-14 lg:max-w-[200px] xl:max-w-[250px] 2xl:max-w-[300px]"
              >
                <p className="text-main text-center font-selfModern text-lg font-medium leading-[150%] tracking-[0.54px] flex-grow-">
                  {card}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 md:hidden">
          <CusomizeMobile data={cards} />
        </div>
      </div>
    </section>
  );
};

export default Customization;
