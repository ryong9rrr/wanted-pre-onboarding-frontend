# 2022 10월 원티드 프리온보딩 사전과제 체크리스트

# 1. 로그인/회원가입

## Assignment1. 폼

> 여기에 로그인, 회원가입 관련 이미지

- [x] / 경로에 로그인 / 회원가입 기능을 개발해주세요.
- [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
- [x] 별도 경로로 분리해서 구현
- [x] 이메일에는 `@`가 포함되어야 한다.
- [x] 비밀번호는 8자리 이상이어야 한다.

### 추가적으로 구현한 부분

- [x] 필드가 유효하지 않다면 필드 아래에 에러 메세지를 띄운다.
- [x] 로그인은 간단히 HTML 속성을 사용하고, 제출하기 직전에 비어있는 값인지 아닌지만 확인한다.

## Assignment2. 네트워크 통신, 인증

> 여기에 로그인 시 이미지

- [x] "로그인" 시 올바른 응답을 받았다면 `/todo` 경로로 이동
- [x] "로그인" 시 서버에서 JWT를 받으면 로컬 스토리지에 저장한다.

### 추가적으로 구현한 부분

- [x] 로그인, 회원가입 시 200번대가 아닌 응답이 발생하면 사용자에게 피드백을 한다.

## Assignment3. 인증과 리다이렉트

> 여기에 리다이렉트 시 이미지

- [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요.
- [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요.

### 추가적으로 구현한 부분

- [x] 로그아웃 기능

# 2. 투두 리스트

## Assignment4

- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

## Assignment5

- [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
- [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
- [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
- [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
