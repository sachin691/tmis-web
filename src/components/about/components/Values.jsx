const values = [
  {
    name: "Dependability",
    desc: "At TMIS Solutions, we embody trustworthiness as a cornerstone of our ethos. Our commitment to reliability ensures that your goals are met with the assurance of a steadfast and dependable team, dedicated to your success.",
  },
  {
    name: "Verified Expertise",
    desc: "TMIS Solutions brings vetted and proven talent to your international customer service platform. We understand the significance of having a skilled team, allowing you to concentrate on your core competencies while we elevate your service standards.",
  },
  {
    name: "Professional Excellence",
    desc: "Choose TMIS for a team of seasoned professionals who become the face of your company. With a focus on professionalism, we represent your brand with the highest standards, recognizing that your success hinges on the positive image we cultivate.",
  },
  {
    name: "Efficient Management",
    desc: "As your dedicated partner, TMIS Solutions takes on the responsibility of managing teams, allowing you to concentrate on results. Our streamlined approach ensures that the intricacies of team management are handled seamlessly.",
  },
  {
    name: "Collaboration with the Finest",
    desc: "With TMIS, you're in the company of excellence. We collaborate with the very best in the industry to deliver solutions that surpass expectations and drive success for your international customer service platform.",
  },
  {
    name: "Innovation and Adaptability",
    desc: "At TMIS Solutions, we thrive on innovation and adaptability. In the dynamic landscape of international customer service, we constantly seek new ways to enhance and refine our solutions. Our team is adept at embracing change, ensuring that we stay ahead of industry trends and technologies.",
  },
];

const Values = () => {
  return (
    <div className="px-[5rem] py-[5rem] flex flex-col items-center gap-[3rem]">
      <h1 className="text-[2.5rem] font-bold">Our Values</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {values.map((data, index) => (
          <div key={index} className="flex flex-col gap-[1rem] cursor-pointer shadows p-[1rem] duration-100">
            <h1 className="font-['rubik_doodle_shadow'] font-bold text-[1.5rem] text-center">{data.name}</h1>
            <p className="text-justify">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
