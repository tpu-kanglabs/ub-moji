---
title: 'Release of version 25.07'
pubDate: 2025-07-07
description: 'New participants, classes.csv, and dataset library support in version 25.07.'
tags: ["Release"]
locale: en
---

We are pleased to announce the release of [version 25.07](https://huggingface.co/datasets/kanglabs/ub-MOJI/tree/v25.07).

This update includes the following additions:

- 12 new participants have been added.  
- A new file `classes.csv` has been included.  
- Support for the Hugging Face dataset format has been added.  

With these updates, you can now access data from more participants.  
In addition, starting from this version, the dataset is available through the Hugging Face Datasets library.

```py
from datasets import load_dataset

dataset = load_dataset("kanglabs/ub-MOJI", revision="25.07")
```