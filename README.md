# [Company](https://jacobxperez.github.io/company/)

A single page website template for your business marketing built with [RAMs](https://github.com/jacobxperez/rams)

## Build

Edit the [variables](https://github.com/jacobxperez/rams/blob/master/src/css/var.scss), add
[custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) modules and linked
them to [main.scss](https://github.com/jacobxperez/rams/blob/master/src/css/main.scss) for compiling.

-   [/css](https://github.com/jacobxperez/rams/tree/master/src/css/)
    -   [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) (important files for compiling)
    -   [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) (add custom modules here)
    -   [main.scss](https://github.com/jacobxperez/rams/blob/master/src/css/main.scss) (compile to produce the final CSS)
    -   [var.scss](https://github.com/jacobxperez/rams/blob/master/src/css/var.scss) (variables for font, colors, and more)

## Compile

On your terminal run these scripts to compile build

-   `npm run serve` serve current build on your default browser
-   `npm run watch` watch for changes but does not start server
-   `npm run build` make current build and exits
-   `npm run public` makes build and sets url to "/" can be changed on [package.json](https://github.com/jacobxperez/rams/blob/master/package.json)
-   `npm run docs` locally runs documentation on your default browser
-   `npm run js` to compile js files
-   `npm run css` to compile scss files
-   `npm run js-min` to compile and minify js
-   `npm run css-min` to compile and minify css

## LICENSE

Copyright (C) 2022 [Jacob Perez](https://github.com/jacobxperez)

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
