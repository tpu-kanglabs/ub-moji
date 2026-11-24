---
tag: Publication
title: A Research Paper Using ub-MOJI Has Been Published in IEEE Access
summary: A study using ub-MOJI that precisely estimates the boundaries of short fingerspelling actions with point supervision has been published in IEEE Access.
publishedAt: 2026-11-24
isPublished: true
---

[Paper Link](https://doi.org/10.1109/ACCESS.2026.3752863)

We are pleased to announce that research using ub-MOJI has been published in the journal *IEEE Access*.

The task addressed in this work, temporal action localization, is to simultaneously estimate the class, start time, and end time of each action in an untrimmed video. Training such models generally requires detailed annotations of action intervals, which is labor-intensive. To reduce this burden, we focused on point supervision, in which only a single timestamp is provided as the training signal for each action.

Existing point-supervised methods mainly detect actions based on features of the entire candidate interval. For short actions such as Japanese fingerspelling, however, a boundary error of just a few frames greatly affects detection accuracy, so it is important to capture features near the start and end in detail, in addition to evaluating the interval as a whole.

We therefore focused on how clearly the features of an action appear at each time point within an interval. Treating this certainty of discrimination as reliability, we proposed **ReGBoM (Reliability-Guided Boundary Modeling)**, which uses it for boundary estimation. The method acquires typical visual features of each class from highly reliable samples and refers to them to estimate the start and end times of an action.

In evaluation on ub-MOJI, using the same feature extractor and RGB-only input, mAP@0.7, a metric that requires strict temporal agreement, improved by 9.0 points over the previous method [HRCons](https://openaccess.thecvf.com/content/ICCV2025W/MSLR/html/Murai_Point-Supervised_Japanese_Fingerspelling_Localization_via_HR-Pro_and_Contrastive_Learning_ICCVW_2025_paper.html) (6.2 points on a five-seed mean). On the GTEA dataset, which records object manipulation from a first-person viewpoint, the method also achieved an average mAP of 59.4%, indicating its applicability to fine-grained actions beyond fingerspelling.

## Publication Details

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
