import { Dropdown, Icon, Nav, Navbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './NavBar';

export default function Footer() {
  return (
    <Nav>
      <Nav.Item icon={<Icon icon="facebook-square" />}>facebook</Nav.Item>
      <Nav.Item icon={<Icon icon="github-alt" />}>github</Nav.Item>
      <Nav.Item icon={<Icon icon="circle" />}>amazon</Nav.Item>
      <Nav.Item icon={<Icon icon="chrome" />}>chrome</Nav.Item>
      <Dropdown icon={<Icon icon="ellipsis-h" />} title="more...">
        <Dropdown.Item icon={<Icon icon="dropbox" />}>dropbox</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="firefox" />}>firefox</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="gitlab" />}>gitlab</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="linux" />}>linux</Dropdown.Item>
      </Dropdown>
    </Nav>
  );
}
