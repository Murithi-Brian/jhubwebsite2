import { IconSearch, IconExternalLink, IconHelpHexagon } from "@tabler/icons-react";
import Tooltip from "../../components/common/Tooltip";
import { useState, useEffect } from "react";
import { sanityClient } from "../../utils/sanityClient";
import { CoursePropsType } from "../../types/course";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper";
import './TrainingProgram.css';


// type CourseProps = {
//   program: string;
//   SKU: number;
//   description: string;
//   quantity: number;
//   cost: number;
//   costPerLearner: string;
//   category: string;
//   href: string;
// };

// const courses: CourseProps[] = [
  // {
  //   program: "Rapid Tech Skills Training",
  //   SKU: 0,
  //   description:
  //     "Offers wide array of topics essential for navigating the current tech landscape",
  //   quantity: 1,
  //   cost: 0,
  //   costPerLearner: "0",
  //   category: "SKIES",
  //   href: "https://fabulous-galette-239.notion.site/Rapid-Tech-Skills-Training-4e53210ee97a481d8eb3de72d3d9cd43?pvs=4",
  // },
  // {
  //   program: "Swift 1",
  //   SKU: 1108610,
  //   description:
  //     "(Pointful Ed) Swift App Development ecourse, 250-user (Gmetrix platform)",
  //   quantity: 1,
  //   cost: 1482,
  //   costPerLearner:
  //     "$57.70 approx. KES 9,520.00 for 200 learner's single exam each",
  //   category: "swift 1",
  //   href: "https://certiport.pearsonvue.com/Certifications/Apple/App-Dev-With-Swift/Overview",
  // },
  // {
  //   program: "Swift 1",
  //   SKU: 1106258,
  //   description: "Apple Swift Exam Voucher with Retake and Practice Test HED",
  //   quantity: 200,
  //   cost: 13520,
  //   costPerLearner:
  //     "$57.70 approx. KES 9,520.00 for 200 learner's single exam each",
  //   category: "swift 1",
  //   href: "https://certiport.pearsonvue.com/Certifications/Apple/App-Dev-With-Swift/Overview",
  // },
  // {
  //   program: "Cisco Certified Support Technician (CCST)",
  //   SKU: 1108335,
  //   description:
  //     "(LearnKey) Cisco Certified Support Technician ecourses up to 100 User License Int'l (Gmetrix platform)",
  //   quantity: 1,
  //   cost: 741,
  //   costPerLearner:
  //     "$25.50 approx. KES 4,235.00 for 100 learner's single exam or $40.50 approx. KES 6,725.00 for two exam tracks",
  //   category: "cisco certified support technician (ccst)",
  //   href: "https://certiport.pearsonvue.com/Certifications/Cisco/Certified-Support-Technician/Overview",
  // },
  // {
  //   program: "Cisco Certified Support Technician (CCST)",
  //   SKU: 1108324,
  //   description:
  //     "(CertPrep) Cisco Certified Support Practice Tests, up to 100 Users Int'l (Gmetrix platform)",
  //   quantity: 1,
  //   cost: 624,
  //   costPerLearner:
  //     "$25.50 approx. KES 4,235.00 for 100 learner's single exam or $40.50 approx. KES 6,725.00 for two exam tracks",
  //   category: "cisco certified support technician (ccst)",
  //   href: "https://certiport.pearsonvue.com/Certifications/Cisco/Certified-Support-Technician/Overview",
  // },
  // {
  //   program: "Entrepreneurship and Small Business (ESB)",
  //   SKU: 1105368,
  //   description:
  //     "(LearnKey) ESB and D4D Courseware, 30 seat License – 300 user Int'l Academic (GMetrix platform)",
  //   quantity: 1,
  //   cost: 468,
  //   costPerLearner: "$21.10 approx. KES 3,505.00 for 200 learner's single exam",
  //   category: "entrepreneurship and small business (esb)",
  //   href: "https://certiport.pearsonvue.com/Certifications/ESB/Certification/Overview",
  // },
  // {
  //   program: "Entrepreneurship and Small Business (ESB)",
  //   SKU: 1106058,
  //   description:
  //     "(CertPREP) ESB 30-Seat/300-User Practice Test License Int'l (GMetrix platform)",
  //   quantity: 1,
  //   cost: 371,
  //   costPerLearner: "$21.10 approx. KES 3,505.00 for 200 learner's single exam",
  //   category: "entrepreneurship and small business (esb)",
  //   href: "https://certiport.pearsonvue.com/Certifications/ESB/Certification/Overview",
  // },
  // {
  //   program: "IC3 Digital Literacy Certification",
  //   SKU: 1105365,
  //   description:
  //     "(LearnKey) IC3 30 Seat License - 300 User Int'l Academic (GMetrix Platform)",
  //   quantity: 1,
  //   cost: 975,
  //   costPerLearner:
  //     "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
  //   category: "Digital Literacy",
  //   href: "https://certiport.pearsonvue.com/Certifications/IC3/Digital-Literacy-Certification/Overview",
  // },
  // {
  //   program: "IC3 Digital Literacy Certification",
  //   SKU: 1104630,
  //   description:
  //     "(CertPREP) IC3 Practice Test 30 Seat/300 User License (Full Suite) - Int'l (GMetrix platform)",
  //   quantity: 1,
  //   cost: 975,
  //   costPerLearner:
  //     "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
  //   category: "Digital Literacy",
  //   href: "https://certiport.pearsonvue.com/Certifications/IC3/Digital-Literacy-Certification/Overview",
  // },
  // {
  //   program: "IC3 Digital Literacy Certification",
  //   SKU: 1106516,
  //   description: "IC3 Digital Literacy Universal Voucher + Retake ",
  //   quantity: 600,
  //   cost: 10920,
  //   costPerLearner:
  //     "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
  //   category: "Digital Literacy",
  //   href: "https://certiport.pearsonvue.com/Certifications/IC3/Digital-Literacy-Certification/Overview",
  // },
  // {
  //   program: "Intuit Certifications",
  //   SKU: 1108822,
  //   description:
  //     "(CertPREP) Intuit Practice Tests, Individual User License – Single Title (GMetrix platform)",
  //   quantity: 100,
  //   cost: 3120,
  //   costPerLearner:
  //     "$39.00 approx. KES 6,475.00 for 100 learner's single exam track of any of the available",
  //   category: "Intuit Certifications",
  //   href: "https://certiport.pearsonvue.com/Certifications/Intuit/Certifications/Certify/QuickBooks-Certified-User",
  // },
  // {
  //   program: "IT Specialist (ITS)",
  //   SKU: 1107359,
  //   description:
  //     "(LearnKey) IT Specialist ecourse 10 Seat/100 User License Int'l (GMetrix Platform)",
  //   quantity: 1,
  //   cost: 618,
  //   costPerLearner:
  //     "$23.50 approx. KES 3,905.00 for 100 learner's single exam or $53.50 approx. KES 8,885.00 for three exam tracks",
  //   category: "IT Specialist",
  //   href: "https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Overview",
  // },
  // {
  //   program: "IT Specialist (ITS)",
  //   SKU: 1107366,
  //   description:
  //     "(CertPREP) IT Specialist Practice Tests 10 Seat/100 User License Int'l Academic (GMetrix platform)",
  //   quantity: 1,
  //   cost: 488,
  //   costPerLearner:
  //     "$23.50 approx. KES 3,905.00 for 100 learner's single exam or $53.50 approx. KES 8,885.00 for three exam tracks",
  //   category: "IT Specialist",
  //   href: "https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Overview",
  // },
  // {
  //   program: "Meta Digital Marketing Associate (Meta 3)",
  //   SKU: 1109002,
  //   description:
  //     "(CertPREP) Meta Practice Tests, up to 300 User License HED (GMetrix Platform)",
  //   quantity: 1,
  //   cost: 1326,
  //   costPerLearner: "$18.40 approx. KES 3,055.00 for 300 learner's single exam",
  //   category: "Meta 3",
  //   href: "https://certiport.pearsonvue.com/Certifications/Meta/Certification/Overview",
  // },
  // {
  //   program: "Microsoft Office Specialist (MOS)",
  //   SKU: 1105358,
  //   description:
  //     "(LearnKey) MOS 10 Seat License Suite - 100 User Int'l Academic (GMetrix Platform)",
  //   quantity: 1,
  //   cost: 618,
  //   costPerLearner:
  //     "$24.15 approx. KES 4,010.00 for 100 learner's single exam or $54.15 approx. KES 8,985.00 for three exam tracks",
  //   category: "Microsoft Office Specialist",
  //   href: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview",
  // },
  // {
  //   program: "Microsoft Office Specialist (MOS)",
  //   SKU: 1104611,
  //   description:
  //     "(CertPREP) MOS 10-Seat/100 User Practice Test License, Full Suite - Int'l (GMetrix platform)",
  //   quantity: 1,
  //   cost: 572,
  //   costPerLearner:
  //     "$24.15 approx. KES 4,010.00 for 100 learner's single exam or $54.15 approx. KES 8,985.00 for three exam tracks",
  //   category: "Microsoft Office Specialist",
  //   href: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview",
  // },
  // {
  //   program: "Microsoft Certified Fundamentals (MCF)",
  //   SKU: 1106731,
  //   description:
  //     "(CertPREP) Microsoft Fundamentals Practice Test 10 Seat/100 User License - Int'l (GMetrix Platform)",
  //   quantity: 1,
  //   cost: 488,
  //   costPerLearner:
  //     "$18.75 approx. KES 3,115.00 for 100 learner's single exam or $48.75 approx. KES 8,095.00 for three exam tracks",
  //   category: "Microsoft Certified Fundamentals",
  //   href: "https://certiport.pearsonvue.com/Certifications/Microsoft/MCF/Overview",
  // },
  // {
  //   program: "Communication Skills for Business",
  //   SKU: 1106963,
  //   description:
  //     "(LearnKey) CSB ecourse 10 Seat License - 100 User Int'l Academic (Gmetrix platform)",
  //   quantity: 1,
  //   cost: 468,
  //   costPerLearner: "$23.40 approx. KES 3,885.00 for 100 learner's single exam",
  //   category: "communication skills for business",
  //   href: "",
  // },
  // {
  //   program: "Communication Skills for Business",
  //   SKU: 1108219,
  //   description:
  //     "(CertPREP) CSB Practice Tests, up to 100 User License Int'l (Gmetrix Platform)",
  //   quantity: 1,
  //   cost: 624,
  //   costPerLearner: "$23.40 approx. KES 3,885.00 for 100 learner's single exam",
  //   category: "communication skills for business",
  //   href: "",
  // },
  // {
  //   program: "Microsoft Certified Educator (MCE)",
  //   SKU: 1104616,
  //   description:
  //     "(CertPREP) MCE Practice Test Individual User License (GMetrix Platform)",
  //   quantity: 100,
  //   cost: 624,
  //   costPerLearner: "$19.80 approx. KES 3,290.00 for 100 learner's single exam",
  //   category: "Microsoft Certified Educator",
  //   href: "",
  // },
  // {
  //   program: "All certifications",
  //   SKU: 1108303,
  //   description: "Certiport Portfolio Voucher + Retake",
  //   quantity: 1800,
  //   cost: 35100,
  //   costPerLearner:
  //     "$15.00 per exam approx. KES 2,490.00 voucher with retake for 2,000 vouchers that may be used for the following Certiport programs: Adobe, Apple, Autodesk, Cisco, CSB, ESB, IC3, IT Specialist, Intuit, Meta, Microsoft Office Specialist, MCE, Microsoft Certified Fundamentals, PMR, and Unity certification programs.",
  //   category: "All Certifications",
  //   href: "",
  // },
// ];

export default function TrainingProgram() {
  const [allCourses, setAllCourses] = useState<CoursePropsType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "course"] {
          title,
          description,
          cost,
          costPerLearner,
          link,
          sku
        }`
      )
      .then((data: CoursePropsType[]) => {
        setAllCourses(data);
      })
      .catch(console.error);
  }, []);

  // Filter courses by search query
  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto h-fit pb-14 px-4">
      
      {/* Slideshow */}
      <div className="relative mb-8 rounded-[10px]">      
<Swiper
  modules={[Navigation]}
  navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
  loop={true}
  className="mb-8"
>
  <SwiperSlide>
    <div className="relative h-[450px]">
      <img
        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
        alt="Students studying"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          "Unlock Your Potential with Knowledge"
        </h2>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative h-[450px]">
      <img
        src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
        alt="Diverse professionals"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          "Your Career, Your Growth"
        </h2>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative h-[450px]">
      <img
        src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        alt="IT professionals working"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          "Learn Today, Lead Tomorrow"
        </h2>
      </div>
    </div>
  </SwiperSlide>
</Swiper>


        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 prev-btn text-white bg-gray-700 bg-opacity-60 hover:bg-opacity-100 p-2 rounded-full cursor-pointer">
          &#9664;
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 next-btn text-white bg-gray-700 bg-opacity-60 hover:bg-opacity-100 p-2 rounded-full cursor-pointer">
          &#9654;
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
        />
        <IconSearch
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          size={24}
        />
      </div>


      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(
          ({
            title,
            cost,
            description,
            link,
            sku,
            costPerLearner,
          }) => (
            <div
              key={sku}
              className="w-full p-6 rounded-lg shadow-card flex flex-col justify-between transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-4 text-lg text-gray">{description}</p>
                <div className="text-lg font-bold flex items-center gap-2 w-full">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "KES",
                  }).format(cost)}{" "}
                  <Tooltip message={`✨ ${costPerLearner}`}>
                    <IconHelpHexagon />
                  </Tooltip>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKb9wCLCow9cq1OI9S65n6drWI-4SHIayeyDHPPTcq-bZgAA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg bg-success hover:bg-transparent font-semibold text-white hover:text-success border-success border-2 py-2 px-2 rounded-lg flex gap-2 items-center justify-end"
                >
                  Join Waitlist
                </a>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold no-underline hover:underline flex gap-2 items-center justify-end"
                  >
                    View Course <IconExternalLink />
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}