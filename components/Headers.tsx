import {
  Header,
  NavBrand,
  Box,
  NavToggle,
  NavMenu,
  NavItem,
  OutlineButton,
} from "tailwind-react-ui";

export default function Headers() {
  return (
    <>
      <Header>
        <NavBrand is="a" href="#header" font="semibold" text={["black", "xl"]}>
          <Box
            is="svg"
            fill="current"
            h={8}
            w={8}
            m={{ r: 2 }}
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </Box>
          <Box className="text-black" inlineBlock>
            Tailwind React UI
          </Box>
        </NavBrand>
        <NavToggle />
        <NavMenu className="text-black">
          <NavItem is="a" href="#header" active>
            Docs
          </NavItem>
          <NavItem is="a" href="#header" active>
            Examples
          </NavItem>
          <NavItem is="a" href="#header" active>
            Blog
          </NavItem>
          <OutlineButton border="white" text="white" text-hocus="black">
            Download
          </OutlineButton>
        </NavMenu>
      </Header>
    </>
  );
}
