import React from "react";
import { SidebarContainer } from "./Sidebar.styles";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <SidebarContainer>
        <ul>
          <li>DashBoard</li>
          <li>Campeonatos</li>
          <li>Settings</li>
          <li>About</li>
        </ul>
      </SidebarContainer>
    </>
  );
};
