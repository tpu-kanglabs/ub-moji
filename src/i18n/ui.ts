export const languages = {
  en: "English",
  ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "site.title": "ub-MOJI | AI Vision Lab",
    "site.description":
      "ub-MOJI is a Japanese fingerspelling video dataset designed to advance research in sign language recognition.",
    "nav.papers": "Papers",
    "nav.news": "News",
    "papers.title": "Related Papers",
    "papers.description": "Publications using this dataset",
    "hero.title": "ub-MOJI: A Japanese Fingerspelling Video Dataset",
    "hero.description":
      "ub-MOJI is a Japanese fingerspelling video dataset designed to advance research in sign language recognition",
    "hero.cta": "View Dataset",
    "features.title": "ub-MOJI Features",
    "features.fingerspelling.title": "Japanese Fingerspelling Coverage",
    "features.fingerspelling.description":
      "Supports syllables, 5-character sequences, and full words",
    "features.temporal.title": "Temporal Annotation",
    "features.temporal.description":
      "Precise start-end timing for every fingerspelled unit",
    "features.metadata.title": "Rich Participant Metadata",
    "features.metadata.description":
      "Includes detailed demographic and consent metadata for participant-aware modeling and analysis.",
    "features.license.title": "Academic-Only License",
    "features.license.description":
      "Available under terms restricting use to non-commercial academic research",
    "metadata.title": "Metadata Overview",
    "metadata.caption":
      "An overview of the basic information and participant information included in this dataset. Provided as CSV files.",
    "datasetTable.caption":
      "Basic information such as the video file path, category, and recording conditions.",
    "datasetTable.field": "Field Name",
    "datasetTable.type": "Type",
    "datasetTable.description": "Description",
    "datasetTable.descriptions.fileName": "File path of the video sample",
    "datasetTable.descriptions.classes":
      'Fingerspelled unit (e.g., `["a"]`, `["ka", "ma", "ku", "ra"]`)',
    "datasetTable.descriptions.category":
      "Linguistic unit category: `0=syllable`, `1=sequence`, or `2=word`",
    "datasetTable.descriptions.participantId":
      "Participant identifier (e.g., `18`)",
    "datasetTable.descriptions.recordingDate":
      "Year and month of recording (e.g., `202403`)",
    "datasetTable.descriptions.fps": "Frames per second (e.g., `30`)",
    "participantsTable.caption":
      "Anonymized attribute information of participants who cooperated in data collection.",
    "participantsTable.descriptions.participantId":
      "Participant identifier (e.g., `18`)",
    "participantsTable.descriptions.ageGroup":
      "Age decade group (e.g., `40` for age 40-49; `-1` if not provided)",
    "participantsTable.descriptions.gender":
      "Gender category: `0=female`, `1=male`, `-1` if unspecified",
    "participantsTable.descriptions.dominantHand":
      "Dominant hand: `0=right`, `1=left`, `-1` if unspecified",
    "participantsTable.descriptions.experienceYears":
      "Years of sign language experience: one of `1-3`, `4-6`, ..., `51+` or `-1`",
    "participantsTable.descriptions.hearingLevel":
      "Self-reported hearing ability: `0` (no issue) to `4` (severe), or `-1`(unknown)`",
    "participantsTable.descriptions.faceVisibility":
      "Face visibility consent: `1=agreed`, `0=declined`",
    "temporalAnnotation.title": "Temporal Annotation",
    "temporalAnnotation.caption":
      "ub-MOJI supports temporal action detection tasks. It provides annotations in TOML files indicating the start and end positions of finger-spelling classes for each video sample. Each top-level TOML table represents a single video identified by a unique video ID. All annotations were manually performed by authors or contributors.",
    "authors.title": "Authors",
    "footer.copyright": "All rights reserved.",
    "footer.website": "Website",
    "footer.github": "GitHub",
    "footer.huggingface": "Hugging Face",
    "news.title": "News",
    "news.description": "Latest updates and announcements",
    "news.empty": "No news published yet.",
    "news.backToList": "Back to list",
  },
  ja: {
    "site.title": "ub-MOJI | AI Vision Lab",
    "site.description":
      "ub-MOJIは手話認識研究のための日本語指文字映像データセットです。",
    "nav.papers": "Papers",
    "nav.news": "News",
    "papers.title": "関連論文",
    "papers.description": "本データセットを用いた研究成果",
    "hero.title": "ub-MOJI: 日本語指文字映像データセット",
    "hero.description":
      "ub-MOJIは手話認識研究のための日本語指文字映像データセットです。",
    "hero.cta": "データセットを見る",
    "features.title": "ub-MOJIの特徴",
    "features.fingerspelling.title": "日本語指文字カバレッジ",
    "features.fingerspelling.description":
      "音節、5文字シーケンス、完全な単語をサポート",
    "features.temporal.title": "時間的アノテーション",
    "features.temporal.description":
      "指文字ユニットごとの正確な開始終了タイミング",
    "features.metadata.title": "豊富な参加者メタデータ",
    "features.metadata.description":
      "参加者認識モデリングと分析のための詳細な人口統計学的および同意メタデータを含む",
    "features.license.title": "学術専用ライセンス",
    "features.license.description":
      "非商用学術研究での使用に制限される条件の下で利用可能",
    "metadata.title": "メタデータ概要",
    "metadata.caption":
      "本データセットに含まれる基本情報と参加者情報の一覧。csvファイルで提供されます。",
    "datasetTable.caption":
      "動画ファイルのパス、カテゴリ、収録条件などの基本情報。",
    "datasetTable.field": "フィールド名",
    "datasetTable.type": "型",
    "datasetTable.description": "説明",
    "datasetTable.descriptions.fileName": "ビデオサンプルのファイルパス",
    "datasetTable.descriptions.classes":
      '指文字の単位 (例: `["a"]`, `["ka", "ma", "ku", "ra"]`)',
    "datasetTable.descriptions.category":
      "言語単位のカテゴリ: `0=音節`, `1=シーケンス`, `2=単語`",
    "datasetTable.descriptions.participantId": "参加者識別子 (例: `18`)",
    "datasetTable.descriptions.recordingDate": "記録年月 (例: `202403`)",
    "datasetTable.descriptions.fps": "フレームレート (例: `30`)",
    "participantsTable.caption":
      "データ収集に協力した参加者の匿名化された属性情報。",
    "participantsTable.descriptions.participantId": "参加者識別子 (例: `18`)",
    "participantsTable.descriptions.ageGroup":
      "年齢層 (例: `40` は40-49歳; `-1` は提供なし)",
    "participantsTable.descriptions.gender":
      "性別カテゴリ: `0=女性`, `1=男性`, `-1` は不特定",
    "participantsTable.descriptions.dominantHand":
      "利き手: `0=右`, `1=左`, `-1` は不特定",
    "participantsTable.descriptions.experienceYears":
      "手話経験年数: `1-3`, `4-6`, ..., `51+` または `-1` のいずれか",
    "participantsTable.descriptions.hearingLevel":
      "自己申告による聴力レベル: `0` (問題なし) から `4` (重度), または `-1` (不明)",
    "participantsTable.descriptions.faceVisibility":
      "顔の可視性に関する同意: `1=同意`, `0=拒否`",
    "temporalAnnotation.title": "時間的アノテーション",
    "temporalAnnotation.caption":
      "ub-MOJIは時系列行動検出タスクに対応しています。各ビデオサンプルに対する指文字クラスの開始および終了位置を示すアノテーションをTOMLファイルで提供します。各最上位のTOMLテーブルは、一意の動画IDで識別される単一の動画を表します。すべてのアノテーションは著者または貢献者によって手動で行われました。",
    "authors.title": "著者",
    "footer.copyright": "All rights reserved.",
    "footer.website": "ウェブサイト",
    "footer.github": "GitHub",
    "footer.huggingface": "Hugging Face",
    "news.title": "ニュース",
    "news.description": "最新のお知らせと更新情報",
    "news.empty": "ニュースはまだ公開されていません。",
    "news.backToList": "一覧に戻る",
  },
} as const;
