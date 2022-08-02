import { Sidebar } from "../../components/sidebar/Sidebar";
import { USerNav } from "../../components/userNav/UserNav";

export const UserPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Sidebar />
      <p style={{ color: "yellow" }}>sdqd</p>
      <USerNav />
    </div>
  );
};
