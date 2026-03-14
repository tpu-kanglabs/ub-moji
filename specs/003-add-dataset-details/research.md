# Research: データセット詳細説明セクション追加

## Decision 1: UI 実装の基盤
- **Decision**: Astro ベースで静的レンダリングし、必要箇所のみ React islands を使用する
- **Rationale**: 既存プロジェクト構成と一致し、性能要件（Lighthouse/CLS/INP）を満たしやすい
- **Alternatives considered**: すべてを React で実装（JS 増加とパフォーマンスリスク）

## Decision 2: 可視化の手段
- **Decision**: 動画は使用せず、表を主軸に図解とテキストで説明する
- **Rationale**: 利用条件・プライバシーリスクを避けつつ、構造理解に必要な情報を整理できる
- **Alternatives considered**: サムネイルや動画クリップの埋め込み

## Decision 3: shadcn/ui コンポーネント選定方針
- **Decision**: 表示は shadcn/ui の Table/Card/Badge/Separator を中心に構成する
- **Rationale**: 既存デザインに整合しつつ、情報密度の高い構造説明に適合
- **Alternatives considered**: カスタム HTML テーブルのみ（デザイン一貫性低下）
