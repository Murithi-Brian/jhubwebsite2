import { useEffect, useState } from "react";
import { sanityClient } from "../../utils/sanityClient";
// import { Document, Page } from "react-pdf";

type CareerType = {
  title: string;
  slug: string;
  body: {
    asset: {
      _id: string;
      url: string;
    };
  };
  publishedAt: string;
};

const Career = () => {
  const [CareerData, setCareerData] = useState<CareerType | null>(null);
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "request-for-expressions-of-interest-consulting-services-individual-selection"]{
          title,
          slug,
          body{
            asset->{
              _id,
              url
            }
          },
          publishedAt,
        }`
      )
      .then((data) => {
        setCareerData(data[0]);
        console.log("single post", data[0].body.asset.url);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 className="block text-3xl font-semibold sm:text-title-xxl dark:text-white">
          Job Opportunities
        </h1>
        <p className="mt-3 text-lg text-secondary-blue dark:text-white">
          Join our vision today!
        </p>
      </div>
      {CareerData && (
        <div className="w-full mx-auto py-10">
          <h2 className="text-2xl text-center mb-4">{CareerData.title}</h2>
          <iframe
            title={CareerData.title}
            src={CareerData.body.asset.url}
            width="100%"
            height="700px"
            frameBorder="0"
          ></iframe>
          {/* <Document
            // file={CareerData.body.asset.url}
            // file="https://cdn.sanity.io/files/mmlot90j/production/6be7989598dafd7478743f1769c91b393084d57a.pdf"
            file="../../docs/vacancy1.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </div>
      )}
    </div>
  );
};

export default Career;
