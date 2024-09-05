# Featuring FE Onboarding 1

## 🔍 목표

[Ring Design System](https://www.figma.com/design/rGUFhhJ8o1Em1kxTxP1q24/Ring-Design-System_v1.0?node-id=130-196&m=dev)을 사용하는 방법과 API를 효율적으로 관리하는 방법을 익힙니다.

## 📮 제출 방법

- [브랜치 컨벤션](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/318505340/Git+Branch)을 따라 브랜치를 생성합니다.
- [커밋 컨벤션](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/319029295/Commit)을 따라 커밋을 작성합니다.
- 작성한 코드를 각 `branch`에 푸시합니다.
- `main` 브랜치로 `Pull Request`를 생성합니다.

## 📌 폴더 구조

```bash
src
├── features
│   ├── {Feature}
│   │   ├── {Feature}.tsx
│   │   └── {Feature}.css.ts
├── pages
│   ├── api // !!DO NOT TOUCH!! - Next API 폴더
│   ├── api-doc // !!DO NOT TOUCH!! - Swagger 문서
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
├── styles // vanilla-extract 스타일 폴더
├── next-swagger-doc.json // !!DO NOT TOUCH!!
```

## 🚀 기능 요구 사항

- [ ] 디자인 및 기능요구사항 [Figma](https://www.figma.com/design/VHEECEVJglf3EXhbH1wEmD/FE-Intern_%EA%B3%BC%EC%A0%9C?node-id=0-1&t=IHX8JDnDc2xgBKkB-1) 참고
- [ ] API 엔드포인트 [Swagger 문서](https://featuring-front-onboarding-1.vercel.app/api-doc) 참고
- [ ] `Flow 1-1` 기능을 구현합니다.
- [ ] `Flow 1-2` 기능을 구현합니다.
- [ ] `Flow 1-3` 기능을 구현합니다.
- [ ] `Flow 1-4` 기능을 구현합니다.
- [ ] 그 외 필요한 기능이 있다면, 자유롭게 추가합니다.

## 🎯 프로그래밍 요구 사항

### 필수 요구사항

- `Ring Design System`을 사용합니다.
- CSS Library는 `vanilla-extract`를 사용합니다.
- API Library는 `Axios`를 사용합니다.
- 서버 상태 관리는 `tanstack-query`를 사용합니다.
- 폴더 구조는 [Featuring Co 문서](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/346587137/FC) 또는 [DataEffect 문서](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/346554369/DAEF)를 참고합니다.
- 그 외 컨벤션은 [컨벤션 문서](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/290455899)를 참고합니다.

### 선택 요구사항

- 자주사용하는 vanilla-extract의 스타일을 `utils`로 분리합니다. (선택)
  - 필요한 sprinkles들이 더 있다면, 자유롭게 추가합니다.
- `orval`을 사용하여 API를 효율적으로 관리합니다. (선택)
  - [openapi 문서](https://featuring-front-onboarding-1.vercel.app/swagger.json)를 사용합니다
- 테스트를 적용시켜 봅니다.
  - `Jest`를 사용하여 테스트를 작성합니다. (선택)
  - `Playwright`를 사용하여 E2E 테스트를 작성합니다. (선택)
- `Adapter` 패턴을 사용하여 로직을 분리합니다. (선택)
- `react-hook-form`을 사용하여 Form을 구현합니다. (선택)

## ✏️ 과제 진행 요구 사항

최종 제출 시 자신이 생각했던 모든 것들에 대한 `README.md` 작성이 필요합니다. <br />
어떠한 형식이든 상관 없으며, **트러블 슈팅**, **고민했던 점**, **구현한 기능에 대한 설명**, **더 발전시키고 싶은 점** 등을 작성해주시면 됩니다.

## 참고 자료

- [Ring Design System Storybook](http://front-core.dataeffect.ai/)
- [Design System 개발 문서](https://featuring-corp.atlassian.net/wiki/spaces/Frontend/pages/290455997)
