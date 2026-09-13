---
tag: Release
title: "ub-MOJI v26.09: Over 5,000 New Video Samples Added"
summary: 4 new participants bring roughly 7x more video samples. The dataset has been restructured and data quality improved.
publishedAt: 2026-09-13
isPublished: true
---

We are pleased to announce the release of the latest version of the ub-MOJI Dataset, [version 26.09](https://huggingface.co/datasets/kanglabs/ub-MOJI/tree/v26.09).

### A major expansion: 4 new participants bring ~7x more samples

This release welcomes **4 new participants** (participant IDs `23`–`26`), and with them the dataset has grown dramatically:

| | v25.09 | v26.09 | Change |
| --- | --- | --- | --- |
| Syllable video samples | 765 | 5,394 | +4,629 |
| Continuous video samples (sequences + words) | 183 | 1,295 | +1,112 |
| **Total video samples** | **948** | **6,689** | **+5,741** |

That's roughly **7x more video samples** than the previous release. The 4 new participants alone account for **5,536** of these new samples — **4,469 syllable video clips** and **1,067 continuous video recordings** (sequences/words). The remaining growth comes from filling in missing videos and correcting annotations for existing participants (see below).

### Dataset restructuring

The dataset is now split into two subsets, each with its own metadata file:

```
ub-MOJI/
├── isolated/                # single kana characters
│   ├── metadata.parquet
│   └── videos/
└── continuous/               # continuous videos
    ├── metadata.parquet
    └── videos/
        ├── sequences/
        └── words/
```

You can now load either one directly with the `datasets` library, instead of downloading everything at once:

```py
from datasets import load_dataset

isolated_dataset = load_dataset("kanglabs/ub-MOJI", "isolated", revision="v26.09")
continuous_dataset = load_dataset("kanglabs/ub-MOJI", "continuous", revision="v26.09")
```

### Stable IDs for every annotated segment

Previously, syllable video clips were named after the recording they came from, e.g. `ka_018_202310_t001.mp4`.

Each segment in `annotations.toml` now carries a unique `annotation_id`, and syllable clips are renamed to match, e.g. `ann_08ef49579212.mp4`. This ID stays the same even if its `label` or `segment` boundaries are corrected later, so you can reliably track a specific clip across dataset versions. The original participant, date, and take information is still available via the `annotation_id` and `source_video` columns in `isolated/metadata.parquet`.

### Other fixes

- Missing videos have been added and annotations corrected for **44 sequence samples**, and the corresponding isolated video clips have been regenerated to match.
- Outdated class names in videos and annotations have been corrected.
- Missing metadata for the `zi` class has been fixed.
- `fps` and `duration` values for newly added samples have been fixed, and the BibTeX citation entry has been corrected.

For the full list of changes, please refer to the [CHANGELOG](https://huggingface.co/datasets/kanglabs/ub-MOJI/blob/main/CHANGELOG.md).
