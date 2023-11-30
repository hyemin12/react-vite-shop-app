## 타입스크립트기반의 쇼핑몰 사이트

[사이트](https://react-shop-app-4692d.firebaseapp.com/)로 이동하기

### ☑️package

- React
- Vite
- Typescript
- redux
- redux-toolkit
- sass
- react-hook-form
- firebase (auth/hosting)

### 📂 디렉토리 구조

<details>
<summary>
    디렉토리 구조 전체보기
</summary>

```bash
├── 📁assets
│   │   ├── 📁fonts
├── 📁components
│   ├── 📁button
│   │   ├── AddToCartButton.tsx
│   │   └── MoveToCartButton.tsx
│   ├── 📁cart-empty
│   │   ├── CartEmpty.module.scss
│   │   └── CartEmpty.tsx
│   ├── 📁footer
│   │   ├── Footer.module.scss
│   │   └── Footer.tsx
│   ├── 📁form
│   │   ├── Form.module.scss
│   │   └── Form.tsx
│   ├── 📁header
│   │   ├── 📁Nav
│   │   │   ├── Nav.module.scss
│   │   │   └── Nav.tsx
│   │   ├── 📁Nav-cart-block
│   │   │   ├── NavCartBlock.module.scss
│   │   │   ├── NavCartBlock.tsx
│   │   │   ├── NavCartItem.module.scss
│   │   │   ├── NavCartItem.tsx
│   │   │   ├── NavCartList.module.scss
│   │   │   └── NavCartList.tsx
│   │   ├── Header.module.scss
│   │   └── Header.tsx
│   ├── 📁layout
│   │   ├── Layout.module.scss
│   │   └── Layout.tsx
│   ├── 📁loader
│   │   ├── Loader.module.scss
│   │   └── Loader.tsx
│   ├── 📁modal
│   │   ├── Modal.module.scss
│   │   └── SuccessOrderModal.tsx
│   └── NavBar.tsx
├── 📁pages
│   ├──📁CartPage
│   │   ├──📁cart-list
│   │   │   ├── CartItem.module.scss
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartList.module.scss
│   │   │   └── CartList.tsx
│   │   ├──📁checkout
│   │   │   ├── Checkout.module.scss
│   │   │   └── Checkout.tsx
│   │   └── index.tsx
│   ├──📁DetailPage
│   │   ├── DetailPage.module.scss
│   │   └── index.tsx
│   ├──📁HomePage
│   │   ├──📁card-item
│   │   │   ├── CardItem.module.scss
│   │   │   └── CardItem.tsx
│   │   ├──📁card-list
│   │   │   ├── CardList.module.scss
│   │   │   └── CardList.tsx
│   │   ├──📁card-skeleton
│   │   │   ├── CardSkeleton.module.scss
│   │   │   └── CardSkeleton.tsx
│   │   ├──📁count-product
│   │   │   ├── CountProduct.module.scss
│   │   │   └── CountProduct.tsx
│   │   ├──📁filter-category
│   │   │   ├── CategoryTab.module.scss
│   │   │   ├── CategoryTab.tsx
│   │   │   ├── FilterCategory.module.scss
│   │   │   └── FilterCategory.tsx
│   │   └── index.tsx
│   ├──📁LoginPage
│   │   ├──📁sign-in
│   │   │   ├── OrderList.module.scss
│   │   │   ├── OrderList.tsx
│   │   │   └── OrderItem.tsx
│   │   └── index.tsx
│   ├──📁NotFoundPage
│   │   └── index.tsx
│   ├──📁OrderPage
│   │   ├──📁order-list
│   │   │   └── .tsx
│   │   └── index.tsx
│   ├──📁RegisterPage
│   │   ├──📁sign-up
│   │   │   └── SignUp.tsx
│   │   └── index.tsx
├── 📁hooks
│   ├── redux.ts
│   └── useAuth.ts
├── 📁store
│   ├── 📁cart
│   │   └── cart.slice.ts
│   ├── 📁categories
│   │   ├── categories.slice.ts
│   │   └── categories.type.ts
│   ├── 📁modal
│   │   └── modal.slice.ts
│   ├── 📁order
│   │   ├── order.slice.ts
│   │   └── order.type.ts
│   ├── 📁products
│   │   ├── product.slice.ts
│   │   ├── products.slice.ts
│   │   └── products.type.ts
│   ├── 📁user
│   │   └── user.slice.ts
│   └── index.ts
├── 📁utils
│   ├── firebaseErrorHandler.ts
│   ├── price2decimal.ts
│   └── sessionStorageHandler.ts
├── App.tsx
├── firebase.ts
├── global.scss
└── main.tsx
```

</details>

### ☑️ 패키지 설치

- 패키지 모듈 설치

  ```bash
  $npm i
  ```

- 개발 서버 열기
  ```bash
  $npm run dev
  ```

### ☑️ 기능

- [x] firebase를 이용한 회원가입/로그인/로그아웃 기능 (이메일,비밀번호)
- [x] 장바구니 기능
- [x] 주문하기 기능 ([mockapi 사용](https://mockapi.io/projects))
- [x] 로그인 하지 않은 유저는 주문내역 페이지 접속하지 못하도록 막기

### ☑️ 시현 영상

#### ■ 장바구니에 상품 담고, 삭제하기 + 카테고리별로 상품 보기

![main](https://github.com/hyemin12/react-vite-shop-app/assets/66300732/5cf86933-7579-4e2f-9c81-4a6ec7f6c11c)

#### ■ 장바구니 페이지 (상품 수량 변경, 로그인하지 않았을 때 장바구니 페이지, 로그인했을 때 장바구니 페이지)

![order](https://github.com/hyemin12/react-vite-shop-app/assets/66300732/acfb9c0e-073a-4eb1-84ba-1ac6e8f0c589)

#### ■ 주문하기 (mock api 사용)

![successOrder](https://github.com/hyemin12/react-vite-shop-app/assets/66300732/14f5ef6a-5758-4214-a497-dabc60c41c14)
