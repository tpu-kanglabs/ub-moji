import type { Locale } from "@/lib/i18n";

export type DatasetTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export type NamingRule = {
  title: string;
  pattern: string;
  columns: string[];
  rows: string[][];
};

export type UsageBlock = {
  title: string;
  items: string[];
  note: string;
};

export type DatasetDetails = {
  title: string;
  intro: string;
  consentNote: string;
  tables: DatasetTable[];
  naming: NamingRule;
  usage: UsageBlock;
};

const DETAILS_BY_LOCALE: Record<Locale, DatasetDetails> = {
  en: {
    title: "Dataset Details",
    intro:
      "A structured overview of ub-MOJI. Tables summarize subsets, files, and metadata in the order: subsets, video/annotations, metadata.",
    consentNote:
      "Note: a portion of samples is not publicly released due to participant consent.",
    tables: [
      {
        title: "Subsets",
        description:
          "Three linguistic units are provided, each organized differently on disk.",
        columns: ["Subset", "Unit", "Storage", "Annotation"],
        rows: [
          [
            "syllables",
            "Single kana characters",
            "Subdirectories by kana",
            "No .toml",
          ],
          [
            "sequences",
            "Five-kana sequences",
            "Flat files",
            ".toml for each sample",
          ],
          [
            "words",
            "Full Japanese words",
            "Flat files",
            ".toml for each sample",
          ],
        ],
      },
      {
        title: "Video & Annotations",
        description:
          "Samples are RGB videos, with temporal annotations for sequences and words.",
        columns: ["Item", "Format", "Applies to", "Notes"],
        rows: [
          ["Video", ".mp4 (RGB)", "All subsets", "One file per sample"],
          [
            "annotations.toml",
            ".toml",
            "sequences / words",
            "Frame-level timing",
          ],
        ],
      },
      {
        title: "Metadata Files",
        description:
          "CSV files summarize sample-level and participant-level information.",
        columns: ["File", "Scope", "Key fields"],
        rows: [
          [
            "metadata.csv",
            "Per sample",
            "file_name, classes, category, participant_id, recording_date, fps",
          ],
          [
            "participants.csv",
            "Per participant",
            "participant_id, age_group, gender, dominant_hand, experience_years, hearing_level, face_visibility",
          ],
        ],
        note: "Missing values may appear as -1 for unspecified fields.",
      },
    ],
    naming: {
      title: "File Naming Convention",
      pattern: "{content}_{participantID}_{yyyymm}_{take}.mp4",
      columns: ["Token", "Meaning", "Example"],
      rows: [
        ["content", "Kana / sequence / word", "a, aiueo, kamakura"],
        ["participantID", "Participant ID", "001"],
        ["yyyymm", "Year + month", "202403"],
        ["take", "Take number", "t001"],
      ],
    },
    usage: {
      title: "Usage Constraints",
      items: [
        "Academic research only",
        "Non-commercial use",
        "No redistribution",
      ],
      note: "Access is gated on Hugging Face. Agree to the terms, avoid privacy-invasive use, and cite the dataset in publications.",
    },
  },
  ja: {
    title: "データセット詳細",
    intro:
      "ub-MOJI の構造を表で整理した概要です。順序は「サブセット → 動画/注釈 → メタデータ」。",
    consentNote: "注: 一部のサンプルは参加者同意の都合で非公開です。",
    tables: [
      {
        title: "サブセット",
        description: "言語単位ごとに3種類のサブセットが整理されています。",
        columns: ["サブセット", "単位", "保存形式", "注釈"],
        rows: [
          ["syllables", "単独の仮名", "仮名ごとのサブディレクトリ", "なし"],
          ["sequences", "5文字の仮名列", "フラット構成", ".toml あり"],
          ["words", "単語", "フラット構成", ".toml あり"],
        ],
      },
      {
        title: "動画と注釈",
        description:
          "すべてのサンプルが RGB の mp4 動画で、sequences / words には時間注釈が付きます。",
        columns: ["項目", "形式", "対象", "補足"],
        rows: [
          ["動画", ".mp4 (RGB)", "全サブセット", "サンプルごと"],
          ["annotations.toml", ".toml", "sequences / words", "フレーム時刻"],
        ],
      },
      {
        title: "メタデータ",
        description: "サンプル単位・参加者単位の CSV が提供されます。",
        columns: ["ファイル", "単位", "代表項目"],
        rows: [
          [
            "metadata.csv",
            "サンプル",
            "file_name, classes, category, participant_id, recording_date, fps",
          ],
          [
            "participants.csv",
            "参加者",
            "participant_id, age_group, gender, dominant_hand, experience_years, hearing_level, face_visibility",
          ],
        ],
        note: "未提供項目は -1 で表記されます。",
      },
    ],
    naming: {
      title: "ファイル命名規則",
      pattern: "{content}_{participantID}_{yyyymm}_{take}.mp4",
      columns: ["要素", "意味", "例"],
      rows: [
        ["content", "仮名 / 連続仮名 / 単語", "a, aiueo, kamakura"],
        ["participantID", "参加者ID", "001"],
        ["yyyymm", "年+月", "202403"],
        ["take", "テイク番号", "t001"],
      ],
    },
    usage: {
      title: "利用条件",
      items: ["学術目的のみ", "商用不可", "再配布不可"],
      note: "利用には Hugging Face の規約への同意が必要です。個人識別・プライバシー侵害目的の使用は禁止され、論文等では適切に引用してください。",
    },
  },
};

export function getUbMojiDatasetDetails(locale: Locale): DatasetDetails {
  return DETAILS_BY_LOCALE[locale] ?? DETAILS_BY_LOCALE.en;
}
