# [Company](https://jacobxperez.github.io/company/)

A professional single page website template

## Table of Contents

* [Project Status](#project-status)
* [Getting Started](#getting-started)
	* [Default Build](#default-build)
	* [Custom Build](#custom-build)
* [Contributing](#contributing)
	* [Bug Reports](#bug-reports)
	* [Feature Requests](#feature-requests)
	* [Pull Requests](#pull-requests)
* [LICENSE](#license)

### Project Status

Project under active development. **NO** stable version has been released.

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/company/archive/master.zip)** the [repository](https://github.com/jacobxperez/company) or by cloning the project:

	$ git clone https://github.com/jacobxperez/company.git

*Keep in mind that this project is under active development and no stable version has been released.*

### Default Build

The easiest way to include [Company](https://jacobxperez.github.io/company/) in your projects is by copying the pre-compiled CSS file into your project folder and then link to it in HTML.

* [/css/style.css](https://github.com/jacobxperez/company/blob/master/css/style.css)

### Custom Build

[Company](https://jacobxperez.github.io/company/) is built on [LESS](http://lesscss.org/) which extends the capabilities of CSS. Use [style.less](https://github.com/jacobxperez/company/blob/master/css/style.less) for compiling all necessary modules for your website and the [variable files](https://github.com/jacobxperez/company/blob/master/css/less/variables) for adjusting the values of fonts, colors, padding and more.

* [/css/style.less](https://github.com/jacobxperez/company/blob/master/css/style.less) (for compiling all LESS modules)
* [/css/less/variables](https://github.com/jacobxperez/company/blob/master/css/less/variables) (for changing the settings)

All main components and dependencies can be found under folder [core](https://github.com/jacobxperez/company/tree/master/css/less/core).

* [/css/less/core](https://github.com/jacobxperez/company/tree/master/css/less/core)
	* [reset](https://github.com/jacobxperez/company/tree/master/css/less/core/reset)
	* [layout](https://github.com/jacobxperez/company/tree/master/css/less/core/layout)
	* [mixins](https://github.com/jacobxperez/company/tree/master/css/less/core/mixins)

We recommend to adding extra modules under folder [components](https://github.com/jacobxperez/company/tree/master/css/less/components) then link to them on file [style.less](https://github.com/jacobxperez/company/blob/master/css/style.less) for compiling.

* [/css/less/components](https://github.com/jacobxperez/company/tree/master/css/less/components)
	* [modules](https://github.com/jacobxperez/company/tree/master/css/less/components/modules)
	* [navigation](https://github.com/jacobxperez/company/tree/master/css/less/components/navigation)

## Contributing

Help us make [Company](https://jacobxperez.github.io/company/) better for everyone, any contribution will be considered. Use the [issue tracker](https://github.com/jacobxperez/company/issues) for bug reports, feature requests and submitting pull requests.

### Bug Reports

Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help us fix any potential bugs.

### Feature Requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

### Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. When contributing code to this project always ask yourself these questions.

* Is it essential?
* Will it add value?
* Is this change necessary?

## LICENSE

Copyright (C) 2020 [Jacob Perez](https://github.com/jacobxperez)

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
