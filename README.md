UniWhales React Component Library
--------------




React components to be shared across UniWhales applications

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
### Use

#### Install the package
```
$ npm i @uniwhales/component-library
```

#### Import components
```
import { Button } from '@uniwhales/component-library';
```

### Develop

#### To install locally run

```
$ npm i
```

#### After installing all dependencies

```
$ npm run strorybook
```

### To publish

After all changes merge, and build are ready to be publish, change version of package.

```
major 
0.1.2 -> 1.1.2

minor 
0.0.2 -> 0.1.2

patch 
0.0.1 -> 0.0.2
```

```
1. you up the major version when you make incompatible API changes
2. you up the minor version when you add functionality in a backward-compatible manner
3. you up the patch version when you make backward-compatible bug fixes
```
