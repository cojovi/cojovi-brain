import { check } from "../assets";
import { websiteShowcase } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const borderColors = [
    "border-orange-500",
    "border-purple-500",
    "border-green-500"
  ];

  const titleColors = [
    "text-orange-400",
    "text-purple-400",
    "text-green-400"
  ];

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {websiteShowcase.map((item, index) => (
        <div
          key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border-2 rounded-[2rem] lg:w-auto py-8 my-4 ${borderColors[index]} hover:shadow-lg hover:shadow-${item.buttonColor}-500/20 transition-all duration-300`}
        >
          <h3 className={`h5 mb-4 font-bold tracking-wider ${titleColors[index]}`}>
            {item.title}
          </h3>

          <div className="relative mb-6 rounded-xl overflow-hidden border border-n-6 bg-n-7">
            <div className="aspect-[4/3] w-full bg-n-7 flex items-center justify-center">
              <img
                src={item.screenshotUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-n-3">
                    <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <span class="text-sm">${item.title}</span>
                  </div>`;
                }}
              />
            </div>
          </div>

          <p className="body-2 min-h-[3rem] mb-6 text-n-1/70 text-center font-medium">
            {item.tagline}
          </p>

          <Button
            className="w-full mb-6 text-sm font-bold tracking-wider"
            href={item.url}
            white
          >
            {item.buttonText}
          </Button>

          <ul>
            {item.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img src={check} width={20} height={20} alt="Check" className={`mt-0.5 filter brightness-150`} />
                <p className="body-2 ml-4 text-n-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
