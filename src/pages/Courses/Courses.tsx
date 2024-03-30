import { IconExternalLink, IconHelpHexagon } from "@tabler/icons-react";
import Tooltip from "../../components/common/Tooltip";

type CourseProps = {
  program: string;
  SKU: number;
  description: string;
  quantity: number;
  cost: number;
  costPerLearner: string;
  category: string;
  href: string;
};

const courses: CourseProps[] = [
  {
    program: "Swift 1",
    SKU: 1108610,
    description:
      "(Pointful Ed) Swift App Development ecourse, 250-user (Gmetrix platform)",
    quantity: 1,
    cost: 1482,
    costPerLearner:
      "$57.70 approx. KES 9,520.00 for 200 learner's single exam each",
    category: "swift 1",
    href: "https://certiport.pearsonvue.com/Certifications/Apple/App-Dev-With-Swift/Overview",
  },
  {
    program: "Swift 1",
    SKU: 1106258,
    description: "Apple Swift Exam Voucher with Retake and Practice Test HED",
    quantity: 200,
    cost: 13520,
    costPerLearner:
      "$57.70 approx. KES 9,520.00 for 200 learner's single exam each",
    category: "swift 1",
    href: "https://certiport.pearsonvue.com/Certifications/Apple/App-Dev-With-Swift/Overview",
  },
  {
    program: "Cisco Certified Support Technician (CCST)",
    SKU: 1108335,
    description:
      "(LearnKey) Cisco Certified Support Technician ecourses up to 100 User License Int'l (Gmetrix platform)",
    quantity: 1,
    cost: 741,
    costPerLearner:
      "$25.50 approx. KES 4,235.00 for 100 learner's single exam or $40.50 approx. KES 6,725.00 for two exam tracks",
    category: "cisco certified support technician (ccst)",
    href: "",
  },
  {
    program: "Cisco Certified Support Technician (CCST)",
    SKU: 1108324,
    description:
      "(CertPrep) Cisco Certified Support Practice Tests, up to 100 Users Int'l (Gmetrix platform)",
    quantity: 1,
    cost: 624,
    costPerLearner:
      "$25.50 approx. KES 4,235.00 for 100 learner's single exam or $40.50 approx. KES 6,725.00 for two exam tracks",
    category: "cisco certified support technician (ccst)",
    href: "",
  },
  {
    program: "Communication Skills for Business",
    SKU: 1106963,
    description:
      "(LearnKey) CSB ecourse 10 Seat License - 100 User Int'l Academic (Gmetrix platform)",
    quantity: 1,
    cost: 468,
    costPerLearner: "$23.40 approx. KES 3,885.00 for 100 learner's single exam",
    category: "communication skills for business",
    href: "",
  },
  {
    program: "Communication Skills for Business",
    SKU: 1108219,
    description:
      "(CertPREP) CSB Practice Tests, up to 100 User License Int'l (Gmetrix Platform)",
    quantity: 1,
    cost: 624,
    costPerLearner: "$23.40 approx. KES 3,885.00 for 100 learner's single exam",
    category: "communication skills for business",
    href: "",
  },
  {
    program: "Entrepreneurship and Small Business (ESB)",
    SKU: 1105368,
    description:
      "(LearnKey) ESB and D4D Courseware, 30 seat License – 300 user Int'l Academic (GMetrix platform)",
    quantity: 1,
    cost: 468,
    costPerLearner: "$21.10 approx. KES 3,505.00 for 200 learner's single exam",
    category: "entrepreneurship and small business (esb)",
    href: "",
  },
  {
    program: "Entrepreneurship and Small Business (ESB)",
    SKU: 1106058,
    description:
      "(CertPREP) ESB 30-Seat/300-User Practice Test License Int'l (GMetrix platform)",
    quantity: 1,
    cost: 371,
    costPerLearner: "$21.10 approx. KES 3,505.00 for 200 learner's single exam",
    category: "entrepreneurship and small business (esb)",
    href: "",
  },
  {
    program: "IC3 Digital Literacy Certification",
    SKU: 1105365,
    description:
      "(LearnKey) IC3 30 Seat License - 300 User Int'l Academic (GMetrix Platform)",
    quantity: 1,
    cost: 975,
    costPerLearner:
      "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
    category: "Digital Literacy",
    href: "",
  },
  {
    program: "IC3 Digital Literacy Certification",
    SKU: 1104630,
    description:
      "(CertPREP) IC3 Practice Test 30 Seat/300 User License (Full Suite) - Int'l (GMetrix platform)",
    quantity: 1,
    cost: 975,
    costPerLearner:
      "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
    category: "Digital Literacy",
    href: "",
  },
  {
    program: "IC3 Digital Literacy Certification",
    SKU: 1106516,
    description: "IC3 Digital Literacy Universal Voucher + Retake ",
    quantity: 600,
    cost: 10920,
    costPerLearner:
      "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks",
    category: "Digital Literacy",
    href: "",
  },
  {
    program: "Intuit Certifications",
    SKU: 1108822,
    description:
      "(CertPREP) Intuit Practice Tests, Individual User License – Single Title (GMetrix platform)",
    quantity: 100,
    cost: 3120,
    costPerLearner:
      "$39.00 approx. KES 6,475.00 for 100 learner's single exam track of any of the available",
    category: "Intuit Certifications",
    href: "",
  },
  {
    program: "IT Specialist (ITS)",
    SKU: 1107359,
    description:
      "(LearnKey) IT Specialist ecourse 10 Seat/100 User License Int'l (GMetrix Platform)",
    quantity: 1,
    cost: 618,
    costPerLearner:
      "$23.50 approx. KES 3,905.00 for 100 learner's single exam or $53.50 approx. KES 8,885.00 for three exam tracks",
    category: "IT Specialist",
    href: "",
  },
  {
    program: "IT Specialist (ITS)",
    SKU: 1107366,
    description:
      "(CertPREP) IT Specialist Practice Tests 10 Seat/100 User License Int'l Academic (GMetrix platform)",
    quantity: 1,
    cost: 488,
    costPerLearner:
      "$23.50 approx. KES 3,905.00 for 100 learner's single exam or $53.50 approx. KES 8,885.00 for three exam tracks",
    category: "IT Specialist",
    href: "",
  },
  {
    program: "Meta 3",
    SKU: 1109002,
    description:
      "(CertPREP) Meta Practice Tests, up to 300 User License HED (GMetrix Platform)",
    quantity: 1,
    cost: 1326,
    costPerLearner: "$18.40 approx. KES 3,055.00 for 300 learner's single exam",
    category: "Meta 3",
    href: "",
  },
  {
    program: "Microsoft Office Specialist (MOS)",
    SKU: 1105358,
    description:
      "(LearnKey) MOS 10 Seat License Suite - 100 User Int'l Academic (GMetrix Platform)",
    quantity: 1,
    cost: 618,
    costPerLearner:
      "$24.15 approx. KES 4,010.00 for 100 learner's single exam or $54.15 approx. KES 8,985.00 for three exam tracks",
    category: "Microsoft Office Specialist",
    href: "",
  },
  {
    program: "Microsoft Office Specialist (MOS)",
    SKU: 1104611,
    description:
      "(CertPREP) MOS 10-Seat/100 User Practice Test License, Full Suite - Int'l (GMetrix platform)",
    quantity: 1,
    cost: 572,
    costPerLearner:
      "$24.15 approx. KES 4,010.00 for 100 learner's single exam or $54.15 approx. KES 8,985.00 for three exam tracks",
    category: "Microsoft Office Specialist",
    href: "",
  },
  {
    program: "Microsoft Certified Fundamentals (MCF)",
    SKU: 1106731,
    description:
      "(CertPREP) Microsoft Fundamentals Practice Test 10 Seat/100 User License - Int'l (GMetrix Platform)",
    quantity: 1,
    cost: 488,
    costPerLearner:
      "$18.75 approx. KES 3,115.00 for 100 learner's single exam or $48.75 approx. KES 8,095.00 for three exam tracks",
    category: "Microsoft Certified Fundamentals",
    href: "",
  },
  {
    program: "Microsoft Certified Educator (MCE)",
    SKU: 1104616,
    description:
      "(CertPREP) MCE Practice Test Individual User License (GMetrix Platform)",
    quantity: 100,
    cost: 624,
    costPerLearner: "$19.80 approx. KES 3,290.00 for 100 learner's single exam",
    category: "Microsoft Certified Educator",
    href: "",
  },
  {
    program: "All certifications",
    SKU: 1108303,
    description: "Certiport Portfolio Voucher + Retake",
    quantity: 1800,
    cost: 35100,
    costPerLearner:
      "$15.00 per exam approx. KES 2,490.00 voucher with retake for 2,000 vouchers that may be used for the following Certiport programs: Adobe, Apple, Autodesk, Cisco, CSB, ESB, IC3, IT Specialist, Intuit, Meta, Microsoft Office Specialist, MCE, Microsoft Certified Fundamentals, PMR, and Unity certification programs.",
    category: "All Certifications",
    href: "",
  },
];

// const courses = [
//   {
//     'Certification Program': 'Swift 1',
//     SKU: 1108610,
//     'Product Description':
//       '(Pointful Ed) Swift App Development ecourse, 250-user (Gmetrix platform)',
//     Quantity: 1,
//     Cost: 1482,
//     'Estimate/Average Cost per Learner':
//       "$57.70 approx. KES 9,520.00 for 200 learner's single exam each"
//  href:"",},
//   {
//     SKU: 1106258,
//     'Product Description':
//       'Apple Swift Exam Voucher with Retake and Practice Test HED',
//     Quantity: 200,
//     Cost: 13520
//  href:"",},
//   {
//     'Certification Program': 'Cisco Certified Support Technician (CCST)',
//     SKU: 1108335,
//     'Product Description':
//       "(LearnKey) Cisco Certified Support Technician ecourses up to 100 User License Int'l (Gmetrix platform)",
//     Quantity: 1,
//     Cost: 741,
//     'Estimate/Average Cost per Learner':
//       "$25.50 approx. KES 4,235.00 for 100 learner's single exam or $40.50 approx. KES 6,725.00 for two exam tracks"
//  href:"",},
//   {
//     SKU: 1108324,
//     'Product Description':
//       "(CertPrep) Cisco Certified Support Practice Tests, up to 100 Users Int'l (Gmetrix platform)",
//     Quantity: 1,
//     Cost: 624
//  href:"",},
//   {
//     'Certification Program': 'Communication Skills for Business',
//     SKU: 1106963,
//     'Product Description':
//       "(LearnKey) CSB ecourse 10 Seat License - 100 User Int'l Academic (Gmetrix platform)",
//     Quantity: 1,
//     Cost: 468,
//     'Estimate/Average Cost per Learner':
//       "$23.40 approx. KES 3,885.00 for 100 learner's single exam"
//  href:"",},
//   {
//     SKU: 1108219,
//     'Product Description':
//       "(CertPREP) CSB Practice Tests, up to 100 User License Int'l (Gmetrix Platform)",
//     Quantity: 1,
//     Cost: 624
//  href:"",},
//   {
//     'Certification Program': 'Entrepreneurship and Small Business (ESB)',
//     SKU: 1105368,
//     'Product Description':
//       "(LearnKey) ESB and D4D Courseware, 30 seat License – 300 user Int'l Academic (GMetrix platform)",
//     Quantity: 1,
//     Cost: 468,
//     'Estimate/Average Cost per Learner':
//       "$21.10 approx. KES 3,505.00 for 200 learner's single exam"
//  href:"",},
//   {
//     SKU: 1106058,
//     'Product Description':
//       "(CertPREP) ESB 30-Seat/300-User Practice Test License Int'l (GMetrix platform)",
//     Quantity: 1,
//     Cost: 371
//  href:"",},
//   {
//     'Certification Program': 'IC3 Digital Literacy Certification',
//     SKU: 1105365,
//     'Product Description':
//       "(LearnKey) IC3 30 Seat License - 300 User Int'l Academic (GMetrix Platform)",
//     Quantity: 1,
//     Cost: 975,
//     'Estimate/Average Cost per Learner':
//       "$49.50 approx. KES 8,220.00 for 200 learner's three exam tracks"
//  href:"",},
//   {
//     SKU: 1104630,
//     'Product Description':
//       "(CertPREP) IC3 Practice Test 30 Seat/300 User License (Full Suite) - Int'l (GMetrix platform)",
//     Quantity: 1,
//     Cost: 975
//  href:"",},
//   {
//     SKU: 1106516,
//     'Product Description': 'IC3 Digital Literacy Universal Voucher + Retake ',
//     Quantity: 600,
//     Cost: 10920
//  href:"",},
//   {
//     'Certification Program': 'Intuit Certifications',
//     SKU: 1108822,
//     'Product Description':
//       '(CertPREP) Intuit Practice Tests, Individual User License – Single Title (GMetrix platform)',
//     Quantity: 100,
//     Cost: 3120,
//     'Estimate/Average Cost per Learner':
//       "$39.00 approx. KES 6,475.00 for 100 learner's single exam track of any of the available"
//  href:"",},
//   {
//     'Certification Program': 'IT Specialist (ITS)',
//     SKU: 1107359,
//     'Product Description':
//       "(LearnKey) IT Specialist ecourse 10 Seat/100 User License Int'l (GMetrix Platform)",
//     Quantity: 1,
//     Cost: 618,
//     'Estimate/Average Cost per Learner':
//       "$23.50 approx. KES 3,905.00 for 100 learner's single exam or $53.50 approx. KES 8,885.00 for three exam tracks"
//  href:"",},
//   {
//     SKU: 1107366,
//     'Product Description':
//       "(CertPREP) IT Specialist Practice Tests 10 Seat/100 User License Int'l Academic (GMetrix platform)",
//     Quantity: 1,
//     Cost: 488
//  href:"",},
//   {
//     'Certification Program': 'Meta 3',
//     SKU: 1109002,
//     'Product Description':
//       '(CertPREP) Meta Practice Tests, up to 300 User License HED (GMetrix Platform)',
//     Quantity: 1,
//     Cost: 1326,
//     'Estimate/Average Cost per Learner':
//       "$18.40 approx. KES 3,055.00 for 300 learner's single exam"
//  href:"",},
//   {
//     'Certification Program': 'Microsoft Office Specialist (MOS)',
//     SKU: 1105358,
//     'Product Description':
//       "(LearnKey) MOS 10 Seat License Suite - 100 User Int'l Academic (GMetrix Platform)",
//     Quantity: 1,
//     Cost: 618,
//     'Estimate/Average Cost per Learner':
//       "$24.15 approx. KES 4,010.00 for 100 learner's single exam or $54.15 approx. KES 8,985.00 for three exam tracks"
//  href:"",},
//   {
//     SKU: 1104611,
//     'Product Description':
//       "(CertPREP) MOS 10-Seat/100 User Practice Test License, Full Suite - Int'l (GMetrix platform)",
//     Quantity: 1,
//     Cost: 572
//  href:"",},
//   {
//     'Certification Program': 'Microsoft Certified Fundamentals (MCF)',
//     SKU: 1106731,
//     'Product Description':
//       "(CertPREP) Microsoft Fundamentals Practice Test 10 Seat/100 User License - Int'l (GMetrix Platform)",
//     Quantity: 1,
//     Cost: 488,
//     'Estimate/Average Cost per Learner':
//       "$18.75 approx. KES 3,115.00 for 100 learner's single exam or $48.75 approx. KES 8,095.00 for three exam tracks"
//  href:"",},
//   {
//     'Certification Program': 'Microsoft Certified Educator (MCE)',
//     SKU: 1104616,
//     'Product Description':
//       '(CertPREP) MCE Practice Test Individual User License (GMetrix Platform)',
//     Quantity: 100,
//     Cost: 624,
//     'Estimate/Average Cost per Learner':
//       "$19.80 approx. KES 3,290.00 for 100 learner's single exam"
//  href:"",},
//   {
//     'Certification Program': 'All certifications',
//     SKU: 1108303,
//     'Product Description': 'Certiport Portfolio Voucher + Retake',
//     Quantity: 1800,
//     Cost: 35100,
//     'Estimate/Average Cost per Learner':
//       '$15.00 per exam approx. KES 2,490.00 voucher with retake for 2,000 vouchers that may be used for the following Certiport programs: Adobe, Apple, Autodesk, Cisco, CSB, ESB, IC3, IT Specialist, Intuit, Meta, Microsoft Office Specialist, MCE, Microsoft Certified Fundamentals, PMR, and Unity certification programs.'
//   }
// ];

// function CourseCategory({ title, children }) {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow-lg">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="mt-4 text-gray-600">{description}</p>
//     </div>
//   );
// }

export default function TrainingProgram() {
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <h1 className="text-title-xxl sm:text-3xl font-bold mb-6 text-center">
        Grow your skillset with our amazing <br />
        courses{" "}
      </h1>
      <p className="text-lg mb-4 text-center">
        We have carefully curated courses that cover diverse topics, ensuring
        there&apos;s something for everyone&apos;s professional development
        <br />
        journey.
      </p>
      <h3 className="text-title-xl sm:text-2xl font-semibold my-8">
        All Courses
      </h3>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(
          ({
            program,
            cost,
            description,
            href,
            // SKU,
            // quantity,
            costPerLearner,
            // category,
          }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={crypto.randomUUID()}
              className="w-full p-6 rounded-lg hover:cursor-pointer hover:border-2 shadow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-bold">{program}</h2>
                <p className="mt-4 text-lg text-gray-600">{description}</p>
                <div className="text-lg font-bold flex items-center gap-2 w-full">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(cost)}{" "}
                  <Tooltip message={`✨ ${costPerLearner}`}>
                    <IconHelpHexagon />
                  </Tooltip>
                </div>
              </div>
              <p className="text-lg font-semibold text-success no-underline hover:underline flex gap-2 items-center justify-end">
                View Course <IconExternalLink />
              </p>
            </a>
          )
        )}
      </div>
    </div>
  );
}
