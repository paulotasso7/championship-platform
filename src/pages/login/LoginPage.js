var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const react_1 = __importDefault(require("react"));
const LoginPage_styles_1 = require("./LoginPage.styles");
const LoginPage = ({ email, password }) => {
  return react_1.default.createElement(
    LoginPage_styles_1.LoginForm,
    null,
    react_1.default.createElement(
      "div",
      null,
      react_1.default.createElement(
        "main",
        null,
        react_1.default.createElement(
          "form",
          null,
          react_1.default.createElement(
            "fieldset",
            {
              id: "sign_up",
              style: {
                padding: "100px",
                borderRadius: "100%",
                height: "200px",
                width: "200px",
                margin: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            react_1.default.createElement(
              "div",
              null,
              react_1.default.createElement(
                "label",
                { htmlFor: "email-address" },
                "Email"
              ),
              react_1.default.createElement("input", {
                type: "email",
                name: "email-address",
                id: "email-address",
                email: email,
              })
            ),
            react_1.default.createElement(
              "div",
              null,
              react_1.default.createElement(
                "label",
                { className: "db fw6 lh-copy f6", htmlFor: "password" },
                "Password"
              ),
              react_1.default.createElement("input", {
                type: "password",
                name: "password",
                id: "password",
              })
            ),
            react_1.default.createElement(
              "label",
              null,
              react_1.default.createElement("input", { type: "checkbox" }),
              " Remember me"
            ),
            react_1.default.createElement("input", {
              type: "submit",
              value: "Sign in",
            })
          ),
          react_1.default.createElement("div", null),
          react_1.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "14px",
                alignItems: "center",
              },
            },
            react_1.default.createElement("a", { href: "#0" }, "Sign Up"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(
              "a",
              { href: "#0" },
              "Forgot your password?"
            )
          )
        )
      )
    )
  );
};
exports.LoginPage = LoginPage;
