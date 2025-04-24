'use strict';

var jsxRuntime = require('react/jsx-runtime');

const PageComponent = ({ title, children }) => {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("h1", { children: [title, " - this is my text"] }), children] }));
};

exports.PageComponent = PageComponent;
//# sourceMappingURL=index.js.map
