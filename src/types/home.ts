export type BlogPostProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
  authorImageSrc: string;
  authorName: string;
};

export type BlogCardProps = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  body: {
    _type: string;
    _key: string;
    style: string;
    children: [];
    markDefs: [];
  }[];
  publishedAt: string;
  name: string;
  authorImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  subHeading?: string;
  source?: string;
};

export type BlogPostType = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  categories: {
    title: string;
  }[];
  body?: {
    _type: string;
    _key: string;
    style: string;
    children: [];
    markDefs: [];
  }[];
  name: string;
  authorImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  subHeading?: string;
  source?: string;
};
