# vibe-git-demo

Git/GitHub学習用プロジェクト

## 📖 プロジェクト概要

このプロジェクトは、わどユニコスクール「第3回 Git/GitHub勉強会」のハンズオン用デモプロジェクトです。

## 🎯 学習目標

- Gitの基本操作を理解する
- GitHubとの連携方法を学ぶ
- AI駆動開発における履歴管理の重要性を体験する

## 🚀 使い方

```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/vibe-git-demo.git

# ディレクトリに移動
cd vibe-git-demo
```

## 📝 commitの意義

AI時代において、commitは単なるバージョン管理ではなく：
- **AIとの対話ログ**として機能
- **採用・不採用の判断記録**として残る
- **人とAIの共同開発ノートブック**になる

## Hello Vibe Coding!

This is a hands-on project for learning Git and GitHub in the age of AI-driven development.

Let's master version control together! 🎉

## 🌟 Introduction

このプロジェクトは、AI時代の開発における「安全基盤」としてのGit/GitHubの重要性を学ぶためのものです。

### なぜGit/GitHubが必要か？

1. **final_final地獄からの解放** - ファイル名でバージョン管理する必要がなくなります
2. **安心して壊せるセーフティネット** - いつでも前の状態に戻れます
3. **AIとの対話ログ** - commit = AI提案の採用記録として機能します

### AI駆動開発での活用法

- `git commit` → AIとの対話ログを残す
- `git branch` → 実験用の安全空間を作る
- `Pull Request` → 自分用の振り返りメモとして活用

## 💻 実践例

### 基本的なワークフロー

```bash
# 1. 状態確認
git status

# 2. ステージング
git add [ファイル名]

# 3. commit（AI対話ログとして記録）
git commit -m "feat: 〇〇機能を追加"

# 4. 履歴確認
git log --oneline --graph
```

### ブランチを使った安全な実験

```bash
# 新しい実験用ブランチを作成
git switch -c feature/experiment

# 作業・commit後、mainに戻る
git switch main

# 実験が成功したらmerge
git merge feature/experiment

# 不要なブランチを削除
git branch -d feature/experiment
```



いまgitの勉強してるよ〜〜