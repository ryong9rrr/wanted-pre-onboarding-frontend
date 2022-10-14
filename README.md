# 2022 10월 원티드 프리온보딩 사전과제

> 기본 구현 사항 이외에도 몇 가지를 더 구현해보았습니다.

# 1. 로그인/회원가입

## Assignment1. 폼

> 여기에 로그인, 회원가입 관련 이미지

- [x] / 경로에 로그인 / 회원가입 기능을 개발해주세요.
- [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
- [x] 별도 경로로 분리해서 구현
- [x] 이메일에는 `@`가 포함되어야 한다.
- [x] 비밀번호는 8자리 이상이어야 한다.

### 추가적으로 구현한 부분

- [x] 필드를 입력하지 않고 "제출"하는 경우 필드 아래에 `~를 입력해주세요` 라는 문구를 띄운다.
- [x] 비밀번호 확인을 구현, 일어날 수 있는 시나리오도 모두 고려한다.

  - "비밀번호 확인" 필드 또한 `required`와 `validation`을 진행한다.
  - "비밀번호 확인" 필드를 입력하지 않고 넘어갔을 경우 경고 문구를 띄운다.
  - "비밀번호 확인" 의 유효성 검사는 단순히 "비밀번호"와 동일한지 아닌지의 여부이다.
  - 따라서 비밀번호가 바뀔 때 비밀번호 확인에 대한 유효성 검사도 진행한다.

- 로그인의 유효성 검사는 필드가 비어있는지에 대한 여부만 진행합니다. 로그인 필드의 유효성 검사는 단순히 필드가 비어있는지만 검사하고, 결과는 서버 요청의 결과로만 판단하는 것이 타당하다고 생각하여 **회원가입 폼**만큼의 상세한 유효성 검사를 진행하지 않았습니다.

## Assignment2. 네트워크 통신, 인증

> 여기에 로그인 시 이미지

- [ ] "로그인" 시 올바른 응답을 받았다면 `/todo` 경로로 이동
- [ ] "로그인" 시 서버에서 JWT를 받으면 로컬 스토리지에 저장한다.

### 추가적으로 구현한 부분

- [ ] "로그인" 시 올바르지 않은 요청이라면 모달을 통해 사용자에게 피드백을 한다.

## Assignment3. 인증과 리다이렉트

> 여기에 리다이렉트 시 이미지

- [ ] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요.
- [ ] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요.

### 추가적으로 구현한 부분

- [ ] 유효하지 않은 토큰(유저가 의도적으로 토큰을 바꾸는 경우)이라면 로그아웃 처리, `/`로 리다이렉트를 한다.

# 2. 투두 리스트

## Assignment4

- [ ] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [ ] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [ ] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

## Assignment5

- [ ] 투두 리스트의 수정, 삭제 기능을 구현해주세요
- [ ] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
- [ ] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
- [ ] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
