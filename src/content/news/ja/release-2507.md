---
title: 'バージョン 25.07のリリース'
pubDate: 2025-07-07
description: 'バージョン 25.07 では、12名の新規参加者データ、classes.csv の追加、Hugging Face データセット形式への対応を行いました。'
tags: ["Release"]
---

[バージョン 25.07](https://huggingface.co/datasets/kanglabs/ub-MOJI/tree/v25.07) をリリースしました。  

今回のアップデート内容は以下のとおりです：

- 新たに 12 名の参加者データを追加しました。  
- `classes.csv` を追加しました。  
- Hugging Face データセット形式に対応しました。  

これにより、より多くの参加者データを利用できるようになりました。  
また、このバージョンから Hugging Face Datasets ライブラリを利用してデータを取得することが可能になりました。  

```py
from datasets import load_dataset

dataset = load_dataset("kanglabs/ub-MOJI", revision="25.07")
```