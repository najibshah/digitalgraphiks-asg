import { MenuBar, TopBar, MobileBanner } from "./components";
// Header is the main App Bar component that comprises of following components

export function Header() {
  return (
    <div>
      <MobileBanner />
      <TopBar />
      <MenuBar />
    </div>
  );
}
