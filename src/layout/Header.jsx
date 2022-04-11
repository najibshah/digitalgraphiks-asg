import { MenuBar, TopBar, MobileBanner } from "./components";

export function Header() {
  return (
    <div>
      <MobileBanner />
      <TopBar />
      <MenuBar />
    </div>
  );
}
