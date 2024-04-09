import { Tab } from "@headlessui/react";
import { classNames } from "../../../utils/classes";
import {
  GeorgeGathoni,
  RehemaNdeda,
  LawrenceNderu,
  MwangiKaranja,
  WillMurithi,
  DaisyOndwari,
  IreneKimani,
  JohnKinyuru,
  CateMuraga,
  Noumbessy,
  Dominique,
  Kamochu,
  Priscilla,
  RoseNganga,
  WilsonGichuhi,
  Sonia,
  Derrick,
} from "../../../assets/images/team";
import TeamCard from "../../../components/About/TeamCard";

function Team() {
  const categories = {
    EXECUTIVE: [
      {
        memberImageUrl: LawrenceNderu,
        memberName: `Dr. Lawrence Nderu`,
        memberRole: `Project Lead`,
        description: `Project Lead with extensive experience as Chairman,
        Lecturer, and Researcher in AI/ML and Software Engineering.
        A Digital Ecosystem Builder and Founder of JKIAN Hub,
        serving as a Digital Africa Connector.`,
        twitterLink: `https://twitter.com/LawrenceNM`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: RehemaNdeda,
        memberName: `Dr. Rehema Ndeda`,
        memberRole: `Climate Smart Agriculture/ Automation Lead/JKUAT`,
        description: `Mechatronics Engineer with a specialization on automation, currently focusing on development and 
        testing of technologies related to precision agriculture`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/r-ndeda/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: MwangiKaranja,
        memberName: `Dr. Mwangi Karanja`,
        memberRole: `Innovative Technology and Data Science Lead`,
        description: `An Innovative technology diffusion expert with a background in computing, research and innovation management. 
        Have trained Small scale entrepreneurs on data management and research-driven approaches to growth`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://ke.linkedin.com/in/drmwangi-karanja`,
      },
      {
        memberImageUrl: WillMurithi,
        memberName: `Dr. William Murithi`,
        memberRole: `DIH Business Development/ Strategy Lead`,
        description: `An expert in business model innovation, digital entrepreneurship & innovation and design thinking. 
        Founder and Lead consultant at EMBC, a premier management consulting firm that offers bespoke and integrated solutions 
        for enterprises.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/william-murithi-ph-d-fhea-cmbe-8a169425`,
      },
      {
        memberImageUrl: DaisyOndwari,
        memberName: `Ms. Daisy Ondwari`,
        memberRole: `Product Development Fellow`,
        description: `Ms. Daisy Ondwari, as a Product Development Fellow, serves
        as the voice of the customer. Her role extends beyond user
        interface experience, questioning and shaping products to
        align with user needs.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/daisy-ondwari/`,
      },
      {
        memberImageUrl: IreneKimani,
        memberName: `Irene Kimani`,
        memberRole: `ICT Specialist & Data Manager, KALRO`,
        description: `Irene Kimani is an ICT Specialist and Data Manager at the Kenya Agriculture and Livestock Research Organization(KALRO).
        She has expertise in the ICT field, Data Science, Big Data, Artificial Intelligence, and research informatics. She is passionate about innovations and development, especially in the agricultural sector. Irene's proficiency in agricultural extension services and weather intel has
        been vital for for digitization of the food, and her role in the JHUB Africa team is valuable.`,
        twitterLink: `https://twitter.com/irenekimani14`,
        facebookLink: ``,
        linkedInLink: `https://ke.linkedin.com/in/irene-kimani-6a5b71b9`,
      },
      {
        memberImageUrl: JohnKinyuru,
        memberName: `Dr. John Kinyuru`,
        memberRole: `Research, and Innovation
        Development Lead, JKUAT`,
        description: `Dr John Kinyuru is an esteemed Food and Nutrition Scientist with great leadership and project management capabilities. Director of research and innovation at Jomo Kenyatta University of Agriculture and Technology(JKUAT), and researcher in Agriculture, food, and nutrition. A food systems and nutrition-sensitive agriculture expert, he is typically the insect hunter(specialist of edible insects), passionate about food security through research and implementation. Dr John Kinyuru is a key member of the JHUB Africa project whose role will transform the food and nutrition ecosystem.`,
        twitterLink: `https://twitter.com/jkinyuru`,
        facebookLink: ``,
        linkedInLink: "https://www.linkedin.com/in/dr-john-kinyuru-phd-rns-7a797120/",
      },
    ],
    "ADVISORY BOARD": [
      {
        memberImageUrl: CateMuraga,
        memberName: `Catherine Muraga`,
        memberRole: `Managing Director, Microsoft ADC`,
        description: `Catherine is a purpose-driven tech executive, presently holding the position of Managing Director 
        at Microsoft ADC. In this role, she spearheads a team dedicated to crafting impactful products and services on a 
        global scale. Catherine's particular focus lies in advancing STEM education in Africa, reflecting her commitment 
        to driving positive change through technology.`,
        twitterLink: `https://twitter.com/CMuraga`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/cmuraga/`,
      },
      {
        memberImageUrl: Noumbessy,
        memberName: `Noumbessy Ghislain`,
        memberRole: `Innovation Hub Leader, Bosch EA`,
        description: `Ghislain Noumbessy is a visionary professional who has been with BOSCH, working in different capacities. 
        His rich experience working across different regions in Africa make him one of the most knowledgeable individuals on the 
        problems  the continent encounters. Noumbessy believes that Africa can move beyond being a consumer of technologies to 
        being creators of it. Currently the Innovation Hub Leader at Bosch EA, he is passionate about nurturing innovations across 
        the region as a way to find suitable solutions to the unique problems we face.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/noumbessyghislain`,
      },
      {
        memberImageUrl: Dominique,
        memberName: `Dominique Kavuisya`,
        memberRole: `CEO & Co-founder, Taimba Limited`,
        description: `An accomplished IT practitioner with over 15 years of experience across US and sub-Saharan Africa, deploying transformational digital solutions. Interested in supply chains, route to market models, fintech & eCommerce.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/dominiquekavuisya/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: Kamochu,
        memberName: `Samuel Kamochu`,
        memberRole: `CEO & Co-founder, Meliora Technologies Limited`,
        description: `Passionate about Africa and the mission is to empower the next generation of software engineers in Kenya and in the continent of Africa.
        Shares about personal and professional experiences and opinions. Recently recognised by Business Daily Africa as Top 40 under 40 Men in Kenya in 2022. Happy to continue bringing hope to many!`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/kamochu?originalSubdomain=ke`,
      },
      {
        memberImageUrl: Priscilla,
        memberName: `Priscilla Muiruri`,
        memberRole: `Technical Advisor, Ministry of Agriculture & Livestock Development`,
        description: `Priscilla is a professional Technical Advisor, Ministry of Agriculture & Livestock Development, a Technical Advisor in the Cabinet Secretary's Office and coordinates the National Food Systems Transformation Working with innovative solutions.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/priscilla-muiruri-32825a44/?originalSubdomain=ke`,
      },
    ],
    SECRETARIAT: [
      {
        memberImageUrl: RoseNganga,
        memberName: `Rose Ng'ang'a`,
        memberRole: `Communications, Secretariat Team`,
        description: `Rose is a seasoned professional in the realm of communications, media, and secretariat. 
        She is passionate about the craft of storytelling, utilizing the power of multimedia and visual narratives. 
        With a background that spans newsrooms and multimedia studios, Rose brings a wealth of experience to navigate 
        and excel in the dynamic landscape of today's ever-evolving media industry. Her adaptability and thriving spirit 
        make her a valuable asset in the field.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: GeorgeGathoni,
        memberName: `George Gathoni`,
        memberRole: `Communications, Secretariat Team`,
        description: `George is a seasoned member of the communications, media, and secretariat department, boasting a 
        wealth of experience. His expertise lies in the art of storytelling, particularly through multimedia and visual narratives. 
        Having worked across diverse media environments, from newsrooms to multimedia studios, George has honed his skills to adapt 
        and flourish in the constantly changing landscape of today's media industry.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/george-gichuhi-gathoni-56aa4215b/`,
      },
    ],
    "DEV TEAM": [
      {
        memberImageUrl: WilsonGichuhi,
        memberName: `Wilson Gichuhi`,
        memberRole: `Fullstack Software Engineer`,
        description: `Wilson Gichuhi, a Fullstack Software Engineer, dedicated to web, cross-platform mobile solution,cloud-first
        development, and open-source contribution. He often finds joy in tinkering with various tools and technologies.`,
        twitterLink: `https://twitter.com/wilsonjugia/`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/wilson-gichuhi`,
      },
      {
        memberImageUrl: Sonia,
        memberName: `Sonia Lomo`,
        memberRole: `Software Engineer`,
        description: `Sonia is a passionate Software Developer with a Computer Science degree. Her journey began with lines of code and blossomed into a love for creating elegant solutions. Armed with years of experience, she thrives on building robust applications and contributing to the open-source community. When she’s not immersed in code, you’ll find him spending time with his feline friends, indulging in his slight obsession with cats.`,
        twitterLink: `https://twitter.com/sony_lomo`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/sonia-lomo/`,
      },
      {
        memberImageUrl: Derrick,
        memberName: `Derrick Obwatsa`,
        memberRole: `DevOps Engineer`,
        description: `For over 5 years i have created both small and (considerably) large web applications using JavaScript frameworks and runtimes like NodeJS and VueJS. I am especially skilled in VueJS as a front-end frameworkthat I use to add comprehensive dynamism in my web applications.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/obwatsamd/`,
      },
    ],
  };

  return (
    <div className="max-w-[85rem] mx-auto mt-8 md:mt-28">
      <h2 className="text-gray-500 text-4xl dark:bg-boxdark-2 dark:text-bodydark text-center font-semibold pb-3">
        Meet the team
      </h2>

      <div className="w-full flex justify-center items-center">
        <Tab.Group as="div" className="p-2 w-full">
          <Tab.List className="flex space-x-1 p-1 w-full overflow-x-auto">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-[40px] py-2 px-4 text-xl md:font-medium font-light leading-5 font-montserrat",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 outline-none focus:ring-2",
                    selected
                      ? "shadow bg-success text-white "
                      : " hover:bg-white/[0.12] hover:text-success"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            {Object.values(categories).map((teamMembers, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl w-full",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
                  {teamMembers.map((TeamMember) => (
                    <TeamCard key={crypto.randomUUID()} {...TeamMember} />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Team;
