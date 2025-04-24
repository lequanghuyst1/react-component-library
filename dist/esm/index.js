import { jsxs } from 'react/jsx-runtime';

const PageComponent = ({ title, children }) => {
    return (jsxs("div", { children: [jsxs("h1", { children: [title, " - this is my text"] }), children] }));
};

export { PageComponent };
//# sourceMappingURL=index.js.map
