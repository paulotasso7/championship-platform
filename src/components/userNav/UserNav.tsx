import React from "react";

export const USerNav: React.FC = (): JSX.Element => {
  return (
    <div style={{ position: "relative", right: "0", left: "" }}>
      <div>
        <p>Hello, Fulano de Tal</p>
      </div>
      <div>
        <ul>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};
