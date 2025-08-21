export type Paper = {
  title: string;
  authors: string;
  venue?: string;
  year?: number;
  url?: string;
};

// Add papers related to ub-MOJI here.
// Keep this list sorted by year (desc).
export const papers: Paper[] = [
  {
    title:
      "Point-Supervised Japanese Fingerspelling Localization via HR-Pro and Contrastive Learning",
    authors: "Ryota Murai, Naoto Tsuta, Duk Shin, Yousun Kang",
    venue:
      "2025 IEEE/CVF International Conference on Computer Vision Workshops",
    year: 2025,
  },
  {
    title:
      "Recognition of Japanese Finger-Spelled Characters Based on Finger Angle Features and Their Continuous Motion Analysis",
    authors: "Tamon Kondo, Ryota Murai, Zixun He, Duk Shin, Yousun Kang",
    venue: "Electronics 2025, 14(15), 3052",
    year: 2025,
    url: "https://doi.org/10.3390/electronics14153052",
  },
  {
    title:
      "Temporal Localization and Recognition of Japanese Fingerspelling Using Hierarchical Reliability Propagation",
    authors: "Ryota Murai, Duk Shin, Yousun Kang",
    venue:
      "The 40th International Technical Conference on Circuits/Systems, Computers, and Communications (ITC-CSCC 2025)",
    year: 2025,
  },
  {
    title:
      "Point-Supervised Temporal Localization for Sign Language Recognition using Hierarchical Reliability Propagation",
    authors: "Ryota Murai, Tamon Kondo, Duk Shin, Yousun Kang",
    venue:
      "International Conference on Electronics, Information, and Communication (ICEIC2025)",
    year: 2025,
    url: "https://doi.org/10.1109/iceic64972.2025.10879753",
  },
  {
    title:
      "Segmentation and Recognition of Japanese Sign Language Syllables Using Frame Clustering in Video",
    authors: "Tamon Kondo, Ryota Murai, Yousun Kang",
    venue:
      "International Conference on Electronics, Information, and Communication (ICEIC2025)",
    year: 2025,
    url: "https://doi.org/10.1109/iceic64972.2025.10879747",
  },
  {
    title:
      "Evaluating the Accuracy of Real-Time Japanese Sign Language Word Recognition with Vision Transformer Models Trained on Angular Features",
    authors: "Tamon Kondo, Ryota Murai, Duk Shin and Yousun Kang",
    venue:
      "39th International Technical Conference on Circuits/Systems, Computers, and Communications (ITC-CSCC 2024)",
    year: 2024,
    url: "https://doi.org/10.1109/itc-cscc62988.2024.10628332",
  },
  {
    title:
      "A Performance Comparison of Japanese Sign Language Recognition with ViT and CNN Using Angular Features",
    authors: "Tamon Kondo, Sakura Narumi, Zixun He, Duk Shin, Yousun Kang",
    venue: "Appl. Sci. 2024, 14(8), 3228",
    year: 2024,
    url: "https://doi.org/10.3390/app14083228",
  },
];
