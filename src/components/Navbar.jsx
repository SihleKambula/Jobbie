import React from "react";
import { Dropdown, Navbar, Button } from "flowbite-react";
import { IoSettingsOutline } from "react-icons/io5";
function NavigationBar() {
  return (
    <div className='container mx-auto'>
      <Navbar fluid rounded>
        <Navbar.Brand href='https://flowbite-react.com'>
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white text-red-400'>
            Jobbie
          </span>
        </Navbar.Brand>

        <div className='flex md:order-2'>
          <Button className='Fmd:order-2 ' color='red'>
            Login
          </Button>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Button className='text-black border-transparent' color='light'>
                <IoSettingsOutline size={"20px"} />
              </Button>
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href='#' active className='active:text-red-400'>
            Home
          </Navbar.Link>
          <Navbar.Link href='#' className='text'>
            View Jobs
          </Navbar.Link>
          <Navbar.Link href='#'>Add Job</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
