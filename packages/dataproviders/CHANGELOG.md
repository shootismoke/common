# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.1](https://github.com/shootismoke/common/compare/v0.9.0...v0.9.1) (2022-10-03)

**Note:** Version bump only for package @shootismoke/dataproviders





# [0.9.0](https://github.com/shootismoke/common/compare/v0.8.10...v0.9.0) (2022-10-03)


* feat(ui)!: Remove usage of Algolia, use geoapify instead (#669) ([a593a9f](https://github.com/shootismoke/common/commit/a593a9f7678a5d85fbd5bff530312e3cd83594ca)), closes [#669](https://github.com/shootismoke/common/issues/669)


### BREAKING CHANGES

* The `fetchAlgolia` function has been removed from `@shootismoke/ui`, because Algolia Places reached end of life: https://www.algolia.com/ref/places/. Please use `geoapify` instead, which needs an API key: https://www.geoapify.com/.





## [0.8.10](https://github.com/shootismoke/common/compare/v0.8.9...v0.8.10) (2021-08-17)


### Bug Fixes

* Fix british columbia type from AQICN ([#519](https://github.com/shootismoke/common/issues/519)) ([06bf7a8](https://github.com/shootismoke/common/commit/06bf7a8fca65fadbffdf2f59f247be5c9bc7b5ed))





## [0.8.9](https://github.com/shootismoke/common/compare/v0.8.8...v0.8.9) (2021-03-06)


### Features

* **convert:** Add all parameters from OpenAQ v2 ([#432](https://github.com/shootismoke/common/issues/432)) ([89e9e59](https://github.com/shootismoke/common/commit/89e9e598953d6add9e84759ff7aba93bc574334e))





## [0.8.8](https://github.com/shootismoke/common/compare/v0.8.7...v0.8.8) (2021-03-06)


### Bug Fixes

* Add some more sanitazation in aqicn ([#431](https://github.com/shootismoke/common/issues/431)) ([ec8b865](https://github.com/shootismoke/common/commit/ec8b86519f1b8f67784654fb5cdf49a20b1628fc))





## [0.8.7](https://github.com/shootismoke/common/compare/v0.8.6...v0.8.7) (2021-03-01)


### Bug Fixes

* Fix AQICN date ISO normalization ([#430](https://github.com/shootismoke/common/issues/430)) ([5d9ad17](https://github.com/shootismoke/common/commit/5d9ad17484c88e0b26177a0f9e795cd34680bee6))





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

**Note:** Version bump only for package @shootismoke/dataproviders





# [0.8.0](https://github.com/shootismoke/common/compare/v0.7.2...v0.8.0) (2021-02-27)


### Features

* Switch to OpenAQ API v2 ([#420](https://github.com/shootismoke/common/issues/420)) ([8cc35a5](https://github.com/shootismoke/common/commit/8cc35a5423c65ed0b7e69c744d4e67bb827565e6))


### BREAKING CHANGES

* The `OpenAQFormat` type has been renamed to `OpenAQResult`, and follows the v2 schema.





# [0.7.0](https://github.com/shootismoke/common/compare/v0.6.4...v0.7.0) (2021-02-23)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.6.4](https://github.com/shootismoke/common/compare/v0.6.3...v0.6.4) (2021-01-14)


### Bug Fixes

* Rename raw to ugm3 in convert, better UI utils ([#387](https://github.com/shootismoke/common/issues/387)) ([39d499b](https://github.com/shootismoke/common/commit/39d499b12cd91cd66d7f0295d53e3701d2bea794))





## [0.6.3](https://github.com/shootismoke/common/compare/v0.6.2...v0.6.3) (2021-01-12)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.6.2](https://github.com/shootismoke/common/compare/v0.6.1...v0.6.2) (2020-10-31)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.6.1](https://github.com/shootismoke/common/compare/v0.6.0...v0.6.1) (2020-10-22)


### Bug Fixes

* **ui:** Remove negative values ([#328](https://github.com/shootismoke/common/issues/328)) ([b613992](https://github.com/shootismoke/common/commit/b6139926e0cbb153e386aaf4e52b54ba85c36fa3))





# [0.6.0](https://github.com/shootismoke/common/compare/v0.5.7...v0.6.0) (2020-10-22)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.5.7](https://github.com/shootismoke/common/compare/v0.5.6...v0.5.7) (2020-10-18)


### Bug Fixes

* **dataproviders:** Use https for AQICN ([#321](https://github.com/shootismoke/common/issues/321)) ([1028ee7](https://github.com/shootismoke/common/commit/1028ee7f0dbec5b2a3527859de45a772a7ce1f53))





## [0.5.6](https://github.com/shootismoke/common/compare/v0.5.5...v0.5.6) (2020-10-18)


### Bug Fixes

* **dataproviders:** Make sanitize work ([#320](https://github.com/shootismoke/common/issues/320)) ([b9dc81f](https://github.com/shootismoke/common/commit/b9dc81fcbaf4b67420f9be13d775c26869b473aa))





## [0.5.4](https://github.com/shootismoke/common/compare/v0.5.3...v0.5.4) (2020-10-16)


### Bug Fixes

* **ui:** Use promise in raceApi ([#318](https://github.com/shootismoke/common/issues/318)) ([50e6bfc](https://github.com/shootismoke/common/commit/50e6bfcaf67502b1f0c28b2bca3b519aa21c04ca))





## [0.5.1](https://github.com/shootismoke/common/compare/v0.5.0...v0.5.1) (2020-10-15)

**Note:** Version bump only for package @shootismoke/dataproviders





# [0.5.0](https://github.com/shootismoke/common/compare/v0.4.0...v0.5.0) (2020-10-15)

**Note:** Version bump only for package @shootismoke/dataproviders





# [0.4.0](https://github.com/shootismoke/common/compare/v0.3.1...v0.4.0) (2020-10-13)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.3.1](https://github.com/shootismoke/common/compare/v0.3.0...v0.3.1) (2020-10-11)


### Features

* Add Black Carbon pollutant ([#305](https://github.com/shootismoke/common/issues/305)) ([6a21aab](https://github.com/shootismoke/common/commit/6a21aab4f6f3b9174b26e5585b1e708b8c65f3c3))





# [0.3.0](https://github.com/shootismoke/common/compare/v0.2.32...v0.3.0) (2020-10-10)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.2.28](https://github.com/shootismoke/common/compare/v0.2.27...v0.2.28) (2020-06-05)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.2.27](https://github.com/shootismoke/common/compare/v0.2.26...v0.2.27) (2020-06-05)


### Features

* Add functions to ui, fix fetchByGps in dataproviders ([#183](https://github.com/shootismoke/common/issues/183)) ([6678714](https://github.com/shootismoke/common/commit/6678714d432d20b31e48e82ed07d12ce59dbcddc))





## [0.2.25](https://github.com/shootismoke/common/compare/v0.2.24...v0.2.25) (2020-06-02)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.2.24](https://github.com/shootismoke/common/compare/v0.2.23...v0.2.24) (2020-06-02)


### Features

* **ui:** Add a @shootismoke/ui package ([#179](https://github.com/shootismoke/common/issues/179)) ([07958c4](https://github.com/shootismoke/common/commit/07958c470a9290efb550db05784bf7e223cc77ff))





## [0.2.23](https://github.com/shootismoke/common/compare/v0.2.22...v0.2.23) (2020-03-21)


### Bug Fixes

* **dataproviders:** Sanitize aqicn response delhi to india ([#123](https://github.com/shootismoke/common/issues/123)) ([9f23ec7](https://github.com/shootismoke/common/commit/9f23ec7fa9a8ef1dd09db11ff2c68b6ae8d2e2db))





## [0.2.22](https://github.com/shootismoke/common/compare/v0.2.21...v0.2.22) (2020-03-21)


### Bug Fixes

* **dataproviders:** Handle case with empty response ([#122](https://github.com/shootismoke/common/issues/122)) ([d6f891a](https://github.com/shootismoke/common/commit/d6f891af59813e00403c7b6994f0d19be305a245))





## [0.2.17](https://github.com/shootismoke/common/compare/v0.2.16...v0.2.17) (2020-02-16)


### Bug Fixes

* **dataproviders:** Correct universalId for aqicn ([#95](https://github.com/shootismoke/common/issues/95)) ([d712991](https://github.com/shootismoke/common/commit/d7129911c4dbe4371b0a8e2c7ed874c5e96ff9ea))





## [0.2.15](https://github.com/shootismoke/common/compare/v0.2.14...v0.2.15) (2020-02-15)


### Bug Fixes

* **dataproviders:** Better error msg when 0 result ([#94](https://github.com/shootismoke/common/issues/94)) ([84934f4](https://github.com/shootismoke/common/commit/84934f444c36c72aa1c228c1e81a051348cfa6dd))





## [0.2.9](https://github.com/shootismoke/common/compare/v0.2.8...v0.2.9) (2020-02-07)


### Bug Fixes

* **dataproviders:** Add better error messages for openaq ([#70](https://github.com/shootismoke/common/issues/70)) ([bced690](https://github.com/shootismoke/common/commit/bced690f27fa7336da4db05fe2ac49f6a0a825e2))
* **graphql:** Update to latest graphql schema ([#81](https://github.com/shootismoke/common/issues/81)) ([6e054f8](https://github.com/shootismoke/common/commit/6e054f822ce69797feb74984cb707a982d285947))





## [0.2.8](https://github.com/shootismoke/common/compare/v0.2.7...v0.2.8) (2020-01-28)


### Bug Fixes

* **dataproviders:** Add correct options to openaq fetch ([#69](https://github.com/shootismoke/common/issues/69)) ([e2589eb](https://github.com/shootismoke/common/commit/e2589eb10cdea861384d0f55c2e05f439d1055d7))





## [0.2.7](https://github.com/shootismoke/common/compare/v0.2.6...v0.2.7) (2020-01-20)


### Bug Fixes

* **dataproviders:** Correct Pollutant Names when Normalizing Data ([#50](https://github.com/shootismoke/common/issues/50)) ([14c3aea](https://github.com/shootismoke/common/commit/14c3aeac5fce70dc8d1620aa13c88992320be0bf))





## [0.2.6](https://github.com/shootismoke/common/compare/v0.2.5...v0.2.6) (2020-01-05)


### Bug Fixes

* Export All{Providers, Pollutants, Units} ([#31](https://github.com/shootismoke/common/issues/31)) ([12a061b](https://github.com/shootismoke/common/commit/12a061ba0b892719efbf4fa66033ea61b4288bce))





## [0.2.5](https://github.com/shootismoke/common/compare/v0.2.4...v0.2.5) (2020-01-05)


### Bug Fixes

* **convert:** Export AllUnits from convert ([#26](https://github.com/shootismoke/common/issues/26)) ([31d787d](https://github.com/shootismoke/common/commit/31d787d0d2d9974a2f09076f9d0611dcfa2888eb))
* **dataproviders:** Make country always return the ISO 2-letter code ([#28](https://github.com/shootismoke/common/issues/28)) ([06dfa19](https://github.com/shootismoke/common/commit/06dfa19a71df0f0a58ac23a78a21f07de2699b0b))
* **graphql:** Re-export graphql schemas as frontend need them ([#27](https://github.com/shootismoke/common/issues/27)) ([64dfd6c](https://github.com/shootismoke/common/commit/64dfd6ccb3b8221a9d0f3a947f40245900469fde))





## [0.2.3](https://github.com/shootismoke/common/compare/v0.2.2...v0.2.3) (2019-12-25)


### Bug Fixes

* **dataproviders:** Fix dates for aqicn and waqi ([#21](https://github.com/shootismoke/common/issues/21)) ([48f54d6](https://github.com/shootismoke/common/commit/48f54d69a94866818ec2c54efaa769dcd9128120))





## [0.2.2](https://github.com/shootismoke/common/compare/v0.2.1...v0.2.2) (2019-12-25)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.2.1](https://github.com/shootismoke/common/compare/v0.2.0...v0.2.1) (2019-12-25)


### Features

* **dataproviders:** Add `getStationName` and `dominantPol` functions ([#20](https://github.com/shootismoke/common/issues/20)) ([66c4ba2](https://github.com/shootismoke/common/commit/66c4ba2873598e039cc49adbc0eb23b1afbc7453))





# [0.2.0](https://github.com/shootismoke/common/compare/v0.1.17...v0.2.0) (2019-12-22)


### chore

* Move all packages from backend to common ([734732e](https://github.com/shootismoke/common/commit/734732ee77a66017f5a51f010a1d17bcce547fbf))


### Code Refactoring

* **convert:** Move `aqi` to `convert` package ([#13](https://github.com/shootismoke/common/issues/13)) ([e6cbf0b](https://github.com/shootismoke/common/commit/e6cbf0bde8a551dc809448c8d8d292db81ce6e98))
* **dataproviders:** Use Open AQ format ([#17](https://github.com/shootismoke/common/issues/17)) ([9363a95](https://github.com/shootismoke/common/commit/9363a954f26f9e013fd3222aac305c6f664208e5))


### BREAKING CHANGES

* **dataproviders:** All data provider fetches return normalized results using the [`openaq-data-format`](https://github.com/openaq/openaq-data-format)
* **convert:** The `@shootismoke/aqi` package has been renamed to `@shootismoke/convert`
* `@shootismoke/aqi`, `@shootismoke/dataproviders` and `@shootismoke/graphql` have been moved from https://github.com/shootismoke/backend to this repo





## [0.1.17](https://github.com/shootismoke/backend/compare/v0.1.16...v0.1.17) (2019-11-16)


### Bug Fixes

* **dataproviders:** Use axios instead of fetch ([#37](https://github.com/shootismoke/backend/issues/37)) ([ff09a2d](https://github.com/shootismoke/backend/commit/ff09a2d828f079e988c8917126e09573fdbbeadb))





## [0.1.16](https://github.com/shootismoke/backend/compare/v0.1.15...v0.1.16) (2019-11-16)


### Bug Fixes

* **dataproviders:** Remove useless dependency ([#35](https://github.com/shootismoke/backend/issues/35)) ([d2a0dd4](https://github.com/shootismoke/backend/commit/d2a0dd4919259a51e629fc25404a69acbf839fc3))





## [0.1.15](https://github.com/shootismoke/backend/compare/v0.1.14...v0.1.15) (2019-11-16)


### Bug Fixes

* Fix TS import paths ([#33](https://github.com/shootismoke/backend/issues/33)) ([48fb2a6](https://github.com/shootismoke/backend/commit/48fb2a6af989a9295518383710f9b55661e7f401))





## [0.1.14](https://github.com/shootismoke/backend/compare/v0.1.13...v0.1.14) (2019-11-14)


### Bug Fixes

* Fix package.json main field ([#32](https://github.com/shootismoke/backend/issues/32)) ([f4be4c2](https://github.com/shootismoke/backend/commit/f4be4c25824c3256407bb309cb37a8dd8e51f1b5))





## [0.1.13](https://github.com/shootismoke/backend/compare/v0.1.12...v0.1.13) (2019-11-14)


### Bug Fixes

* Fix paths for imports ([#31](https://github.com/shootismoke/backend/issues/31)) ([ef702e7](https://github.com/shootismoke/backend/commit/ef702e7f195c6abfd2c402aad3736e6ab6145688))





## [0.1.12](https://github.com/shootismoke/backend/compare/v0.1.11...v0.1.12) (2019-11-14)


### Bug Fixes

* **dataproviders:** Add dominant pollutant ([#30](https://github.com/shootismoke/backend/issues/30)) ([f645ed6](https://github.com/shootismoke/backend/commit/f645ed6d35856293e065094a6ae0e5b3ddeeba9a))





## [0.1.11](https://github.com/shootismoke/backend/compare/v0.1.10...v0.1.11) (2019-11-14)


### Bug Fixes

* **dataproviders:** Change normalized format ([#29](https://github.com/shootismoke/backend/issues/29)) ([e8f50a5](https://github.com/shootismoke/backend/commit/e8f50a527ed1a84852c462fd1dfe14c9fe08e319))





## [0.1.10](https://github.com/shootismoke/backend/compare/v0.1.9...v0.1.10) (2019-11-13)


### Bug Fixes

* **dataproviders:** Add conversion to cigarettes ([#27](https://github.com/shootismoke/backend/issues/27)) ([af577be](https://github.com/shootismoke/backend/commit/af577befd72d35a530fa4516337e0f70bb9c2e40))
* **dataproviders:** Export types ([#26](https://github.com/shootismoke/backend/issues/26)) ([27c3165](https://github.com/shootismoke/backend/commit/27c31658b48f550ce72baa1e394fdec9ec65ebf7))





## [0.1.9](https://github.com/shootismoke/backend/compare/v0.1.8...v0.1.9) (2019-11-13)

**Note:** Version bump only for package @shootismoke/dataproviders





## [0.1.8](https://github.com/shootismoke/backend/compare/v0.1.7...v0.1.8) (2019-11-13)


### Features

* **dataproviders:** Add normalized data format ([#25](https://github.com/shootismoke/backend/issues/25)) ([a7bd857](https://github.com/shootismoke/backend/commit/a7bd857603c43171f761b0c9a1e61949a828c723))





## [0.1.7](https://github.com/shootismoke/backend/compare/v0.1.6...v0.1.7) (2019-11-12)


### Bug Fixes

* **dataproviders:** Add fetching from waqi ([#24](https://github.com/shootismoke/backend/issues/24)) ([a17f3f4](https://github.com/shootismoke/backend/commit/a17f3f4e7ffda5fab5e3a7a01d57a55eaa9740eb))





## [0.1.6](https://github.com/shootismoke/backend/compare/v0.1.5...v0.1.6) (2019-11-10)

**Note:** Version bump only for package @shootismoke/dataproviders
