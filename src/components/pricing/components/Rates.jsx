// Dependencies
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/react";

// Local Files
import "./Pricing.css";

const cardData = [
  {
    name: "Website Development",
    desc: "Empower your online presence with our custom website development services. From sleek, user-friendly designs to robust functionality, we create websites that leave a lasting impression.",
    services: [
      {
        name: "Website",
        basic: "Responsive Website Design",
        standard: "Custom Design and Development",
        premium: "Bespoke Design and Functionality",
      },
      {
        name: "Pages",
        basic: "Up to 5 Pages",
        standard: "Up to 10 Pages",
        premium: "Unlimited Pages",
      },
      {
        name: "SEO",
        basic: "Basic SEO Optimization",
        standard: "Enhanced SEO Features",
        premium: "Advanced SEO Strategies",
      },
      {
        name: "Functionality",
        basic: "Contact Form Integration",
        standard: "CMS Integration",
        premium: "E-commerce Functionality",
      },
    ],
  },
  {
    name: "SEO Services",
    desc: "Boost your visibility and outrank the competition with our SEO services. We optimize your online content to ensure it's not just seen but also prominently placed on search engine results.  ",
    services: [
      {
        name: "Strategy",
        basic: "Website Audit",
        standard: "Comprehensive SEO Strategy",
        premium: "Advanced Analytics and Reporting",
      },
      {
        name: "Feature",
        basic: "Keyword Research",
        standard: "Backlink Building",
        premium: "Local SEO Optimization",
      },
      {
        name: "Support",
        basic: "On-Page Optimization",
        standard: "Monthly Analytics Report",
        premium: "Social Media Integration",
      },
    ],
  },
  {
    name: "Promotional Booking Service",
    desc: "Maximize your reach and engagement with our promotional booking service. We connect your brand with the right audience, ensuring your message reaches its full potential.",
    services: [
      {
        name: "Social Media",
        basic: "Social Media Promotion",
        standard: "Extended Social Media Coverage",
        premium: "Comprehensive Campaign Strategy",
      },
      {
        name: "Content",
        basic: "Basic Content Creation",
        standard: "Engaging Content Creation",
        premium: "Influencer Collaborations",
      },
      {
        name: "Campaign",
        basic: "One-time Promotional Campaign",
        standard: "Continuous Promotion Across Platforms",
        premium: "Extended Promotion Period",
      },
    ],
  },
  {
    name: "Software Solutions",
    desc: "Empower your business with tailor-made software solutions. From efficient workflow management to innovative applications, we provide software that meets your unique needs.",
    services: [
      {
        name: "Customization",
        basic: "Tailored Software Development",
        standard: "Customized Software Solutions",
        premium: "Scalable and Robust Software",
      },
      {
        name: "Functionality",
        basic: "Basic Features and Functionality",
        standard: "Advanced Features and Integrations",
        premium: "Dedicated Support and Maintenance",
      },
    ],
  },
];

const Rates = () => {
  return (
    <div className="rates py-[5rem] flex flex-col gap-[4rem] items-center px-[1rem]">
      <div className="flex justify-center">
        <p className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
          Rates Starting As Low As . . .
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[3rem] ">
        {cardData.map((data, index) => (
          <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[2rem]" key={index}>
            <div className="text-white max-w-[25rem] bg-[#18181B] flex flex-col justify-center gap-2 p-[2rem] rounded-2xl">
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-default-400">{data.desc}</p>
            </div>
            <Table className="dark max-w-[42rem]">
              <TableHeader>
                <TableColumn className="text-center font-['DM_Serif_Display'] text-lg sm:text-[1.5rem] py-[1.5rem] text-default-800">
                  Services
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#7EE7FC] text-lg sm:text-[1.5rem]">Basic</h1>
                    <div>
                      <p>$500 USD / ₹36,500 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#17C964] text-lg sm:text-[1.5rem]">Standard</h1>
                    <div>
                      <p>$750 USD / ₹54,750 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#F31260] text-lg sm:text-[1.5rem]">Premium</h1>
                    <div>
                      <p>$999 USD / ₹72,729 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
              </TableHeader>
              <TableBody>
                {data.services.map((service, index) => (
                  <TableRow key={index} className="text-white font-mono">
                    <TableCell className="text-center text-xs sm:text-sm text-white font-mono">
                      {service.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.basic}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.standard}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.premium}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
