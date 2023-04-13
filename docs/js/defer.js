/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {sidebar} from './modules/sidebar.js';
import {toggle} from '../../src/js/modules/toggle.js';

if (meta.title === '') {
    meta.title = `<h1>Rams</h1>`;
} else {
    meta.title = `<h1>${meta.title}</h1>`;
}

template.header = `
    <div id="header" data-wrapper="fit">
        ${meta.title}
    </div>
    `;

template.main = `
    <div data-wrapper="fit" data-grid="main">
        <aside id="aside"></aside>
        <article id="content"></article>
    </div>
    `;
if (template.type === 'fullPage') {
    template.main = `
    <div id="content" data-wrapper="fit" data-grid="main">
    </div>
    `;
}

// check and set template url for localhost or for public url
location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? (template.fetchURL =
          window.location.origin + '/templates/a.be13ff7e.html')
    : (template.fetchURL =
          window.location.origin + '/rams/templates/a.e67a1128.html');

// create main layout
template.body = `
    <nav data-navbar="top">
        <div id="nav"></div>
    </nav>
    <header data-section="header">
        ${template.header}
    </header>
    <main data-section="main">
        ${template.main}
    </main>
    <footer data-section="footer">
        <div id="footer" data-wrapper="fit">
        </div>
    </footer>`;

// parse everything together
template
    .fromString(template.body, 'body')
    .getAndSetTemplate('#headerTemplate', '#header')
    .getAndSetTemplate('#contentTemplate', '#content', sidebar)
    .fetchTemplate(template.fetchURL, '#nav', toggle)
    .fetchTemplate(template.fetchURL, '#footer');