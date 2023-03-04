import SidebarMenu from 'react-bootstrap-sidebar-menu';

const Sidebar = () => {
    return (
        <SidebarMenu expand="sm" varient="dark" bg="dark">
            <SidebarMenu.collapse>
                <Sidebar.Header>
                    <Sidebar.Brand>Logo</Sidebar.Brand>
                    <Sidebar.Toggle />
                </Sidebar.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>1</SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>Menu Title</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
                    
            </SidebarMenu.collapse>
        
        </SidebarMenu>
    );
}
