import { Menubar } from "primereact/menubar";

export default function Header() {
  const items = [
    {
      label: "Catalogue",
      icon: "pi pi-fw pi-list",
      url: "#",
    },
  ];
  return (
    <>
      <div className="card">
        <Menubar model={items} />
      </div>
    </>
  );
}
