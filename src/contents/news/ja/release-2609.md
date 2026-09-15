---
tag: Release
title: ub-MOJI v26.09：5,000本以上の動画サンプルを追加
summary: 新規参加者4名の追加によりサンプル数が約7倍に増加。データセットが構造化され、データ品質が向上
publishedAt: 2026-09-13
isPublished: true
---

ub-MOJI [バージョン 26.09](https://huggingface.co/datasets/kanglabs/ub-MOJI/tree/v26.09) を公開しました。

### 大幅なデータ拡充：新規参加者4名の追加でサンプル数が約7倍に

本リリースでは新たに **4名の参加者**（参加者ID `23`〜`26`）を追加しました。これにより、データセットの規模は大きく拡大しています。

| | v25.09 | v26.09 | 増加数 |
| --- | --- | --- | --- |
| 音節動画 サンプル数 | 765本 | 5,394本 | +4,629本 |
| 連続動画 サンプル数（系列＋単語） | 183本 | 1,295本 | +1,112本 |
| **動画サンプル総数** | **948本** | **6,689本** | **+5,741本** |

これは前バージョンに比べて **約7倍** の動画サンプル数にあたります。このうち **5,536本**（音節動画 4,469本、系列・単語の連続動画 1,067本）は、新たに追加された4名の参加者によるものです。残りの増加分は、既存の参加者について欠落していた動画の追加やアノテーション修正によるもの（後述）です。

### データセットの構造化

データセットを2つのサブセットに分割し、それぞれに専用のメタデータファイルを用意しました。

```
ub-MOJI/
├── isolated/                # 単一の指文字（かな1文字）
│   ├── metadata.parquet
│   └── videos/
└── continuous/               # 連続動画
    ├── metadata.parquet
    └── videos/
        ├── sequences/
        └── words/
```

これにより、全体を一度にダウンロードせずとも、`datasets` ライブラリから必要なサブセットだけを直接読み込めるようになりました。

```py
from datasets import load_dataset

isolated_dataset = load_dataset("kanglabs/ub-MOJI", "isolated", revision="v26.09")
continuous_dataset = load_dataset("kanglabs/ub-MOJI", "continuous", revision="v26.09")
```

### 各アノテーションセグメントへの安定した ID の付与

これまで、音節動画は元の撮影データに基づいた名前（例：`ka_018_202310_t001.mp4`）が付けられていました。

今回から、`annotations.toml` の各セグメントに一意な `annotation_id` を付与し、isolated のクリップもそれに合わせて `ann_08ef49579212.mp4` のような名前にリネームしました。この ID は、後から `label` や `segment` の範囲が修正されても変わらないため、バージョンをまたいで特定のクリップを確実に追跡できます。なお、元の参加者・撮影日・テイクの情報は、`isolated/metadata.parquet` の `annotation_id` および `source_video` カラムから引き続き確認できます。

### その他の修正

- **44件の連続系列サンプル** について、欠落していた動画を追加し、アノテーションを修正しました。これに合わせて、対応する isolated の動画クリップも再生成しました。
- 動画・アノテーション内の古いクラス名を修正しました。
- `zi` クラスの欠落していたメタデータを修正しました。
- 新規追加サンプルの `fps`・`duration` の値を修正し、BibTeX の引用情報も修正しました。

変更点の全リストは [CHANGELOG](https://huggingface.co/datasets/kanglabs/ub-MOJI/blob/main/CHANGELOG.md) をご参照ください。

### 謝辞

本データセットの撮影にあたり、以下の団体にご協力いただきました。心より御礼申し上げます。

- [中野区社会福祉協議会 中野ボランティアセンター](https://nakanoshakyo.com/service/volunteer/)
- 中野区聴覚障害者福祉協会

また、撮影にご協力いただいた参加者の皆様にも、心より感謝申し上げます。
