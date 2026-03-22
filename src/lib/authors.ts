export type Author = {
  name: string;
  url?: string;
};

export type AuthorList = Author[];

export const authors: AuthorList = [
  {
    name: "Tamon Kondo",
    url: "https://www.kanglabs.net/members/tamon-kondo",
  },
  {
    name: "Ryota Murai",
    url: "https://www.kanglabs.net/members/rmurai",
  },
  {
    name: "Naoto Tsuta",
  },
  {
    name: "Yousun Kang",
    url: "https://www.kanglabs.net/members/yskang",
  },
];
