"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// react imports
const react_1 = require("react");
// styles imports
const LoginPage_styles_1 = require("./LoginPage.styles");
// utilities imports
const react_router_dom_1 = require("react-router-dom");
//data import
const users = require("/home/paulotasso/Projetos/championships-platform/src/data/users.json");
const LoginPage = () => {
    const [inputEmail, setInputEmail] = (0, react_1.useState)("");
    const [inputPassword, setInputPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const loggedUser = (0, react_1.useMemo)(() => users.find((userInfo) => userInfo.email === inputEmail && userInfo.password === inputPassword), [inputEmail, inputPassword]);
    function onEmailInputChange(event) {
        setInputEmail(event.target.value);
    }
    function onPasswordInputChange(event) {
        setInputPassword(event.target.value);
    }
    function onSubmitSignIn(event) {
        event.preventDefault();
        if (loggedUser) {
            navigate("/userpage");
            console.log(loggedUser);
            // return <UserPage />;
        }
        if (inputEmail === "" || inputPassword === "") {
            alert("preencha os dados");
        }
    }
    return ((0, jsx_runtime_1.jsx)(LoginPage_styles_1.LoginForm, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("fieldset", Object.assign({ id: "sign_up", style: {
                                padding: "100px",
                                borderRadius: "100%",
                                height: "200px",
                                width: "200px",
                                margin: "30px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            } }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email-address" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email-address", id: "email-address", onChange: onEmailInputChange, value: inputEmail })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", value: inputPassword, onChange: onPasswordInputChange })] }), (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox" }), " Remember me"] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onSubmitSignIn }, { children: "Sign In " }))] }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                fontSize: "14px",
                                alignItems: "center",
                            } }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#0" }, { children: "Sign Up" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#0" }, { children: "Forgot your password?" }))] }))] }) }) }) }));
};
exports.LoginPage = LoginPage;
