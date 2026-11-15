# sasya. — Photography / Visual Creation

黒を基調にした写真・クリエイター向けの静的ポートフォリオサイトです。

## ファイル構成

- `index.html` — ページ本体
- `style.css` — レスポンシブデザイン
- `script.js` — 写真の拡大表示など
- `assets/` — 生成した写真素材

## ローカルで確認

`index.html` をブラウザで開いてください。Google Fontsの読み込みにはインターネット接続が必要です。

## GitHub Pagesで無料公開

1. GitHubにログインし、新しい **Public** repositoryを作成します。名前は `sasya-portfolio` などで構いません。
2. このフォルダ内のファイルと `assets` フォルダを、リポジトリの一番上（root）にアップロードします。ZIPファイルそのものではなく、展開した中身をアップロードしてください。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** の Source を **Deploy from a branch** にします。
5. Branch を `main`、folder を `/(root)` にして Save。
6. 数分待つと `https://YOUR-GITHUB-USERNAME.github.io/sasya-portfolio/` で公開されます。

GitHub Pagesの公式手順: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 公開前に変更する項目

- プロフィール文：`index.html` の ABOUT / PROFILE セクション
- 写真：`assets/` 内の画像を差し替え（同じファイル名にするとHTML変更不要）
- SNS：`index.html` の `social-links` のリンク先
- お問い合わせ：`index.html` の CONTACT セクション（現在は準備中表示）
- ページタイトル・説明：`index.html` の `<title>` と description

## 注意

このサイトは静的サイトです。フォーム送信、会員ログイン、データベース保存は実装していません。公開リポジトリに個人情報・非公開写真・秘密情報を置かないでください。GitHub Pagesの公開サイトはインターネット上で誰でも閲覧できます。
