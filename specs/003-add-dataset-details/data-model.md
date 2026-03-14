# Data Model: データセット詳細説明セクション追加

## Entities

### Dataset Section
- **Purpose**: ub-MOJI の構造と利用条件を説明するページ内セクション
- **Fields**:
  - `title` (string): セクション見出し
  - `overview` (string): 全体概要の説明文
  - `tables` (list): 表示順に並ぶ表の集合

### Subset
- **Purpose**: `syllables` / `sequences` / `words` の各データ単位
- **Fields**:
  - `name` (enum): syllables | sequences | words
  - `unit_description` (string): 単位の説明
  - `example_count` (string or number): 代表的な件数表示

### Video/Annotation Relation
- **Purpose**: 動画データと注釈ファイルの関係
- **Fields**:
  - `video_format` (string): RGB .mp4
  - `annotation_format` (string): .toml
  - `naming_rule` (string): {content}_{participantID}_{yyyymm}_{take}.mp4

### Metadata File
- **Purpose**: メタデータ情報の提供
- **Fields**:
  - `file_name` (enum): metadata.csv | participants.csv
  - `scope` (string): サンプル単位 / 参加者単位
  - `key_fields` (list): 代表項目
  - `missing_value_note` (string): 欠損値の意味（例: -1 の意味）

### License/Usage
- **Purpose**: 利用条件の明示
- **Fields**:
  - `academic_only` (boolean)
  - `non_commercial` (boolean)
  - `no_redistribution` (boolean)

## Relationships
- Dataset Section contains ordered tables.
- Subset table is presented before Video/Annotation and Metadata tables.
- Metadata table includes missing value note annotation.
