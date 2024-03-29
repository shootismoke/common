# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.10.0](https://github.com/shootismoke/common/compare/v0.9.3...v0.10.0) (2023-02-18)


* refactor!: Remove fp-ts (#729) ([ce170c2](https://github.com/shootismoke/common/commit/ce170c2ceed85c58bc52af1f4c2ffb5c793f2f46)), closes [#729](https://github.com/shootismoke/common/issues/729)


### BREAKING CHANGES

* Usage of `fp-ts` has been removed across all packaged. Functions that
used to return a `TaskEither` now return a simple `Promise`.





## [0.9.1](https://github.com/shootismoke/common/compare/v0.9.0...v0.9.1) (2022-10-03)

**Note:** Version bump only for package @shootismoke/ui





# [0.9.0](https://github.com/shootismoke/common/compare/v0.8.10...v0.9.0) (2022-10-03)


* feat(ui)!: Remove usage of Algolia, use geoapify instead (#669) ([a593a9f](https://github.com/shootismoke/common/commit/a593a9f7678a5d85fbd5bff530312e3cd83594ca)), closes [#669](https://github.com/shootismoke/common/issues/669)


### BREAKING CHANGES

* The `fetchAlgolia` function has been removed from `@shootismoke/ui`, because Algolia Places reached end of life: https://www.algolia.com/ref/places/. Please use `geoapify` instead, which needs an API key: https://www.geoapify.com/.





## [0.8.10](https://github.com/shootismoke/common/compare/v0.8.9...v0.8.10) (2021-08-17)

**Note:** Version bump only for package @shootismoke/ui





## [0.8.9](https://github.com/shootismoke/common/compare/v0.8.8...v0.8.9) (2021-03-06)


### Features

* **convert:** Add all parameters from OpenAQ v2 ([#432](https://github.com/shootismoke/common/issues/432)) ([89e9e59](https://github.com/shootismoke/common/commit/89e9e598953d6add9e84759ff7aba93bc574334e))





## [0.8.8](https://github.com/shootismoke/common/compare/v0.8.7...v0.8.8) (2021-03-06)

**Note:** Version bump only for package @shootismoke/ui





## [0.8.7](https://github.com/shootismoke/common/compare/v0.8.6...v0.8.7) (2021-03-01)


### Bug Fixes

* Fix AQICN date ISO normalization ([#430](https://github.com/shootismoke/common/issues/430)) ([5d9ad17](https://github.com/shootismoke/common/commit/5d9ad17484c88e0b26177a0f9e795cd34680bee6))





## [0.8.6](https://github.com/shootismoke/common/compare/v0.8.5...v0.8.6) (2021-02-28)


### Bug Fixes

* **ui:** Update Algolia return type validation ([#424](https://github.com/shootismoke/common/issues/424)) ([efb8263](https://github.com/shootismoke/common/commit/efb8263572febefba22da5425603ec5029c943b1))





## [0.8.5](https://github.com/shootismoke/common/compare/v0.8.4...v0.8.5) (2021-02-28)


### Bug Fixes

* **ui:** Rename fetchStation to fetchStationId ([#423](https://github.com/shootismoke/common/issues/423)) ([8649044](https://github.com/shootismoke/common/commit/8649044a8129104f5aad1f594b1a08a5d70b976f))





## [0.8.4](https://github.com/shootismoke/common/compare/v0.8.3...v0.8.4) (2021-02-28)


### Bug Fixes

* Fix getSortedOpenAQResults function ([8186c9f](https://github.com/shootismoke/common/commit/8186c9f08bd3f767d9f169a6f85231e349d783ab))





## [0.8.3](https://github.com/shootismoke/common/compare/v0.8.2...v0.8.3) (2021-02-28)


### Bug Fixes

* Fix getDominantPol filter ([#422](https://github.com/shootismoke/common/issues/422)) ([f358c19](https://github.com/shootismoke/common/commit/f358c1952273896b7da300fa777fce102379e7de))





## [0.8.2](https://github.com/shootismoke/common/compare/v0.8.1...v0.8.2) (2021-02-27)


### Bug Fixes

* Add some exports, remove react-native stuff from default exports ([#421](https://github.com/shootismoke/common/issues/421)) ([9b6fec1](https://github.com/shootismoke/common/commit/9b6fec1e1c7e8f642b6c5cd6d4300b2d71bf0086))





## [0.8.1](https://github.com/shootismoke/common/compare/v0.8.0...v0.8.1) (2021-02-27)

**Note:** Version bump only for package @shootismoke/ui





# [0.8.0](https://github.com/shootismoke/common/compare/v0.7.2...v0.8.0) (2021-02-27)


### Features

* Switch to OpenAQ API v2 ([#420](https://github.com/shootismoke/common/issues/420)) ([8cc35a5](https://github.com/shootismoke/common/commit/8cc35a5423c65ed0b7e69c744d4e67bb827565e6))


### BREAKING CHANGES

* The `OpenAQFormat` type has been renamed to `OpenAQResult`, and follows the v2 schema.





## [0.7.2](https://github.com/shootismoke/common/compare/v0.7.1...v0.7.2) (2021-02-24)


### Bug Fixes

* **ui:** Fix cigarette image import link ([#419](https://github.com/shootismoke/common/issues/419)) ([a06547e](https://github.com/shootismoke/common/commit/a06547ef6ed3cc8489b89d06592a45b5c1ede6f0))





## [0.7.1](https://github.com/shootismoke/common/compare/v0.7.0...v0.7.1) (2021-02-23)


### Bug Fixes

* **ui:** Fix `IUser` type by removing _id ([#418](https://github.com/shootismoke/common/issues/418)) ([80622c4](https://github.com/shootismoke/common/commit/80622c4f2c2f8075373f155daec4304dbf40863b))





# [0.7.0](https://github.com/shootismoke/common/compare/v0.6.4...v0.7.0) (2021-02-23)


### Features

* Add various utilities to ui package ([#417](https://github.com/shootismoke/common/issues/417)) ([373e4ed](https://github.com/shootismoke/common/commit/373e4ed5840f89c01bee07882a4cbc3915722ae7))





## [0.6.4](https://github.com/shootismoke/common/compare/v0.6.3...v0.6.4) (2021-01-14)


### Bug Fixes

* Rename raw to ugm3 in convert, better UI utils ([#387](https://github.com/shootismoke/common/issues/387)) ([39d499b](https://github.com/shootismoke/common/commit/39d499b12cd91cd66d7f0295d53e3701d2bea794))





## [0.6.3](https://github.com/shootismoke/common/compare/v0.6.2...v0.6.3) (2021-01-12)


### Bug Fixes

* **ui:** Remove expo dependencies ([#386](https://github.com/shootismoke/common/issues/386)) ([ef578d0](https://github.com/shootismoke/common/commit/ef578d0e74c00713e21e66b1f00a6eb5a5453bd3))





## [0.6.2](https://github.com/shootismoke/common/compare/v0.6.1...v0.6.2) (2020-10-31)


### Features

* **ui:** Export `slugify` function ([#336](https://github.com/shootismoke/common/issues/336)) ([d1eeab4](https://github.com/shootismoke/common/commit/d1eeab4cf73d74ed84c58f2210ff731f9c7f4103))





## [0.6.1](https://github.com/shootismoke/common/compare/v0.6.0...v0.6.1) (2020-10-22)


### Bug Fixes

* **ui:** Remove negative values ([#328](https://github.com/shootismoke/common/issues/328)) ([b613992](https://github.com/shootismoke/common/commit/b6139926e0cbb153e386aaf4e52b54ba85c36fa3))





# [0.6.0](https://github.com/shootismoke/common/compare/v0.5.7...v0.6.0) (2020-10-22)


### Bug Fixes

* **ui:** Remove CigarettesBlock, CigarettesText and ConversionBox  ([#313](https://github.com/shootismoke/common/issues/313)) ([6631fae](https://github.com/shootismoke/common/commit/6631faee3317e8ad797db6556cbb7943f676e500))
* **ui:** Remove measurements with negative value ([#327](https://github.com/shootismoke/common/issues/327)) ([8ed2f95](https://github.com/shootismoke/common/commit/8ed2f95f90b924ee4e536c0cc7c1c006096f63ed))


### BREAKING CHANGES

* **ui:** The component `CigarettesBlock`, `CigarettesText` and `ConversionBox` have been removed from the ui package.





## [0.5.7](https://github.com/shootismoke/common/compare/v0.5.6...v0.5.7) (2020-10-18)


### Bug Fixes

* **dataproviders:** Use https for AQICN ([#321](https://github.com/shootismoke/common/issues/321)) ([1028ee7](https://github.com/shootismoke/common/commit/1028ee7f0dbec5b2a3527859de45a772a7ce1f53))





## [0.5.6](https://github.com/shootismoke/common/compare/v0.5.5...v0.5.6) (2020-10-18)

**Note:** Version bump only for package @shootismoke/ui





## [0.5.5](https://github.com/shootismoke/common/compare/v0.5.4...v0.5.5) (2020-10-17)


### Bug Fixes

* **ui:** Filter out old data in Normalized ([#319](https://github.com/shootismoke/common/issues/319)) ([385fac3](https://github.com/shootismoke/common/commit/385fac33f83b18760299ad0b45bd2a5ab5c41e05))





## [0.5.4](https://github.com/shootismoke/common/compare/v0.5.3...v0.5.4) (2020-10-16)


### Bug Fixes

* **ui:** Use promise in raceApi ([#318](https://github.com/shootismoke/common/issues/318)) ([50e6bfc](https://github.com/shootismoke/common/commit/50e6bfcaf67502b1f0c28b2bca3b519aa21c04ca))





## [0.5.3](https://github.com/shootismoke/common/compare/v0.5.2...v0.5.3) (2020-10-16)


### Bug Fixes

* **ui:** Difference in hours absolute should be smaller than 6 ([#317](https://github.com/shootismoke/common/issues/317)) ([f09b36f](https://github.com/shootismoke/common/commit/f09b36fdee3704ce298ea45656628b8bec6ecc3b))





## [0.5.2](https://github.com/shootismoke/common/compare/v0.5.1...v0.5.2) (2020-10-16)


### Bug Fixes

* **ui:** raceApiPromise only return recent results ([#316](https://github.com/shootismoke/common/issues/316)) ([1176a83](https://github.com/shootismoke/common/commit/1176a83e51ed3b701b3ccdf7ee3dc2d490e673c4))





## [0.5.1](https://github.com/shootismoke/common/compare/v0.5.0...v0.5.1) (2020-10-15)

**Note:** Version bump only for package @shootismoke/ui





# [0.5.0](https://github.com/shootismoke/common/compare/v0.4.0...v0.5.0) (2020-10-15)


### Features

* Add isAccurate field on API ([#315](https://github.com/shootismoke/common/issues/315)) ([e35acd7](https://github.com/shootismoke/common/commit/e35acd7df05bb5b6ec33b4d490c777d39ff69ca0))


### BREAKING CHANGES

* `isStationToFar` and `distanceToStation` now take a PM2.5 measurement `OpenAQFormat` object, instead of the Api object.





# [0.4.0](https://github.com/shootismoke/common/compare/v0.3.1...v0.4.0) (2020-10-13)


### Bug Fixes

* **ui:** Allow aqicn & openaq options in race ([#314](https://github.com/shootismoke/common/issues/314)) ([6226962](https://github.com/shootismoke/common/commit/62269629559fc3db6fc76cde16a9570cb645d81d))


### BREAKING CHANGES

* **ui:** The raceApiPromise function's 2nd argument, RaceApiOptions, now is an object with 2 optional fields: aqicn and openaq, where each field represents the options to pass down to the respective dataprovider.





## [0.3.1](https://github.com/shootismoke/common/compare/v0.3.0...v0.3.1) (2020-10-11)

**Note:** Version bump only for package @shootismoke/ui





# [0.3.0](https://github.com/shootismoke/common/compare/v0.2.32...v0.3.0) (2020-10-10)


### Features

* Update icons and remove Gotham ([#304](https://github.com/shootismoke/common/issues/304)) ([d3f804e](https://github.com/shootismoke/common/commit/d3f804e65ed2b796614282bf2fe6e9aa5b05fc9b))





## [0.2.32](https://github.com/shootismoke/common/compare/v0.2.31...v0.2.32) (2020-10-04)


### Features

* Add custom styling of inner button ([#296](https://github.com/shootismoke/common/issues/296)) ([ef57322](https://github.com/shootismoke/common/commit/ef573225edbf24b47637ae906e8d45804e171d74))





## [0.2.30](https://github.com/shootismoke/common/compare/v0.2.29...v0.2.30) (2020-06-09)


### Bug Fixes

* **ui:** Fix styles TS typings ([baa7021](https://github.com/shootismoke/common/commit/baa70219ef6d14889c7b26ccc1f87488ad56887b))





## [0.2.29](https://github.com/shootismoke/common/compare/v0.2.28...v0.2.29) (2020-06-09)


### Bug Fixes

* **ui:** Add cigarettes customization ([#194](https://github.com/shootismoke/common/issues/194)) ([3eb4693](https://github.com/shootismoke/common/commit/3eb469301707b7ceef8f50a86c84b6df58690029))





## [0.2.28](https://github.com/shootismoke/common/compare/v0.2.27...v0.2.28) (2020-06-05)

**Note:** Version bump only for package @shootismoke/ui





## [0.2.27](https://github.com/shootismoke/common/compare/v0.2.26...v0.2.27) (2020-06-05)


### Features

* Add functions to ui, fix fetchByGps in dataproviders ([#183](https://github.com/shootismoke/common/issues/183)) ([6678714](https://github.com/shootismoke/common/commit/6678714d432d20b31e48e82ed07d12ce59dbcddc))





## [0.2.26](https://github.com/shootismoke/common/compare/v0.2.25...v0.2.26) (2020-06-03)


### Bug Fixes

* **ui:** Add better props for Cigarettes ([#182](https://github.com/shootismoke/common/issues/182)) ([834b1a8](https://github.com/shootismoke/common/commit/834b1a8d310148ec56c9e4c41ae8173b2f805018))


### Features

* **ui:** Add more functions to ui ([#181](https://github.com/shootismoke/common/issues/181)) ([29821f9](https://github.com/shootismoke/common/commit/29821f917313c491b92b655bb84120f2dd48f8ac))





## [0.2.25](https://github.com/shootismoke/common/compare/v0.2.24...v0.2.25) (2020-06-02)

**Note:** Version bump only for package @shootismoke/ui





## [0.2.24](https://github.com/shootismoke/common/compare/v0.2.23...v0.2.24) (2020-06-02)


### Features

* **ui:** Add a @shootismoke/ui package ([#179](https://github.com/shootismoke/common/issues/179)) ([07958c4](https://github.com/shootismoke/common/commit/07958c470a9290efb550db05784bf7e223cc77ff))
