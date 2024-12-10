import { Flowbite } from "flowbite-react";
import NavigationBar from "./Navbar";

const customTheme = {
  button: {
    color: {
      red: "text bg-red-400 hover:bg-red-600 text-white",
    },
  },
};

const Layout = ({ children }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <NavigationBar />
      {children}
    </Flowbite>
  );
};

export default Layout;
