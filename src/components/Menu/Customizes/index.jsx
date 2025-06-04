import React from "react";

const Customization = () => {
  const cards = [
    "Vegan / Vegetarian",
    "Gluten-Free / Lactose-Free",
    "Diabetic / Cardiac-Friendly",
    "Allergen-Aware Meal Prep",
    "Halal-Certified Ingredients (100%)",
  ];
  return (
    <section className="containers pt-16">
      <div className="flex flex-col items-center gap-y-7">
        <h3 className="main-heading-2 text-center">Menu Customization</h3>
        <p className="description text-center !max-w-[780px]">
          We don’t believe in one-size-fits-all menus. Every event is different
          — and so is every menu. Our chefs work directly with you (and your
          event planner) to create a dining experience that reflects your
          vision, brand, and guests’ preferences.
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-3xl text-center text-main font-americana font-medium leading-[146%] tracing-[0.9px]">
          Dietary Options Supported
        </h4>

        <div className="flex gap-x-5 justify-between mt-10">
          {cards?.map((card, index) => {
            return (
              <div
                key={index}
                className="border border-[#EDCF95] p-14 max-w-[250px] 2xl:max-w-[300px]"
              >
                <p className="text-main text-center font-selfModern text-lg font-medium leading-[150%] tracking-[0.54px] flex-grow-">
                  {card}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Customization;
