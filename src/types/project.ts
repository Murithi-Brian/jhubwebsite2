export type ProjectItemType = {
  tags: string[];
  title: string;
  description: string;
  href: string;
  mainImage: { asset: { _id: string; url: string } };
};


export type ModelType = {
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  description: string;
  categories: {
    title: string;
    description: {
      _type: string;
      _key: string;
      style: string;
      children: [];
      markDefs: [];
    }[];
    mainImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }[];
  tags: string[];
  website: string;
};

export type ModelTitleType = {
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  description: string;
};