# Fib API

指定した **n 番目（1-indexed）のフィボナッチ数**を返す REST API です。  
保守運用性・変更容易性を意識し、ルーティング／ビジネスロジック／バリデーション／エラーハンドリングを分離した最小構成の Express アプリとして実装しています。

---

# ソースコード構成

```text
fib-api/
  src/
    app.js                 # Expressアプリ本体（middleware/routeの組み立て）
    server.js              # 起動用エントリーポイント（PORTでlisten）
    routes/
      fib.js               # ルーティング（HTTP層：入出力とサービス呼び出し）
    services/
      fibonacci.js         # フィボナッチ計算ロジック（ドメイン層）
    middleware/
      validate.js          # 入力バリデーション（nの検証・正規化）
      error.js             # エラーハンドリング（統一形式で返却）
    lib/
      httpError.js         # HTTPエラー用の共通クラス/生成関数
  test/
    fib.test.js            # APIテスト（正常系/異常系）
  package.json

---

# 概要
Express で 単一のエンドポイントを提供する API です。
入力値 n は クエリパラメータで受け取り、バリデーションを通した上で計算します。
フィボナッチ数は値が大きくなるため、レスポンスでは result を 文字列で返します（BigInt を toString() してJSON化）。


# 実際に動いている環境のエンドポイントURL
## Base URL（Production）
https://fib-api-bst7.onrender.com

## Base URL（Local）
http://localhost:3000

# API仕様
## GET /fib?n={integer}
### 説明
・n 番目（1-indexed）のフィボナッチ数を返します

### クエリパラメータ
・n（必須）: 正の整数

## 

## 動作確認（Local）
curl "https://fib-api-bst7.onrender.com/fib?n=10"


# エラー仕様（例）
入力が不正な場合は 4xx を返します（例：n が未指定、数値でない、0以下など）。
※エラーレスポンス形式は middleware/error.js にて統一しています。

# セットアップ（ローカル起動）
npm install
npm start
起動後
http://localhost:3000/fib?n=10


# テスト
npm test
