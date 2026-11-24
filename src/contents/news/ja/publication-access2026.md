---
tag: Publication
title: ub-MOJIを用いた研究論文がIEEE Accessに掲載されました
summary: ub-MOJIを用いて、短い指文字動作の境界を点教師あり学習で高精度に推定する研究が IEEE Access に掲載されました。
publishedAt: 2026-11-24
isPublished: true
---

[論文リンク](https://doi.org/10.1109/ACCESS.2026.3752863)

このたび、ub-MOJIを活用した研究成果が、学術誌 IEEE Accessに掲載されました。

本研究の対象である Temporal Action Localizationは、未編集の動画から各行動の種類と開始・終了時刻を同時に推定するタスクです。その学習には一般に行動区間の詳細なアノテーションが必要となりますが、これには多大な労力がかかります。この負担を軽減するため、本研究では、各行動に対して1点の時刻のみを教師信号として与える「点教師あり学習」に着目しました。

既存の点教師あり手法では、主に候補区間全体の特徴に基づいて行動を検出します。一方、日本語指文字のような短時間の動作では、わずか数フレームの境界のずれが検出精度を大きく左右するため、区間全体の評価に加え、開始・終了付近の特徴を詳細に捉えることが重要になります。

そこで本研究では、区間内の各時刻において、行動の特徴がどの程度明確に現れているかに着目しました。この識別の確かさを信頼度として捉え、境界推定に活用する **ReGBoM（Reliability-Guided Boundary Modeling）** を提案しました。信頼度の高いサンプルから各クラスの典型的な視覚特徴を獲得し、それらを参照しながら行動の開始・終了時刻を推定します。

ub-MOJI を用いた評価では、同一の特徴抽出器を使用し、RGB情報のみを入力とする条件下で、従来手法 [HRCons](https://openaccess.thecvf.com/content/ICCV2025W/MSLR/html/Murai_Point-Supervised_Japanese_Fingerspelling_Localization_via_HR-Pro_and_Contrastive_Learning_ICCVW_2025_paper.html) に対して、厳密な時間的一致を要求する評価指標である mAP@0.7 が9.0ポイント向上しました（5シード平均では6.2ポイント向上）。また、一人称視点での物体操作を収録した GTEA データセットでも平均 mAP 59.4% を達成し、指文字以外の細粒度動作への適用可能性を示しました。

## 論文情報

```bibtex
@ARTICLE{Murai_ReGBoM,
  author={Murai, Ryota and Shin, Duk and Kang, Yousun},
  journal={IEEE Access},
  title={ReGBoM: Reliability-Guided Boundary Modeling for Fine-Grained Temporal Action Localization},
  year={2026},
  volume={14},
  pages={177329-177347},
  doi={10.1109/ACCESS.2026.3752863}
}
```
