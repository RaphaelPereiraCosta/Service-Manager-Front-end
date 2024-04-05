import * as React from "react";
import Sidebar, { SidebarType } from "@/Components/Sidebar";
import Styles from "./styles.module.css";
import Navbar from "@/Components/navbar";
import { useRouter } from "next/router";
import TableInfo, { typeTable } from "@/Components/tableInfo";
import Graphs from "@/Components/graphs";

function Funcionario() {
  const router = useRouter();

  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("user_id");
    if (!loggedInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={Styles.containerPage}>
      <Sidebar title="Funcionarios" type={SidebarType.funcionario} />
      <div style={{ width: "100%" }}>
        <Navbar />
        <TableInfo type={typeTable.funcionario} />
        <Graphs />
      </div>
    </div>
  );
}

export default Funcionario;
