import {useState} from "react";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import {Dropdown} from "react-bootstrap";
import {CgMenu} from "react-icons/cg";
import {IoColorPalette, IoGameController, IoTerminal} from "react-icons/io5";
import {MdCreateNewFolder} from "react-icons/md";
import {FaTimeline} from "react-icons/fa6";
import {FaServer} from "react-icons/fa";
import {BiSolidTerminal} from "react-icons/bi";
import {SiSpringCreators , SiAmazonsimpleemailservice, SiMailtrap   } from "react-icons/si";

/*
<Dropdown.Item
title="Programming timeline"
className="dropdown-item"
href="/#/timeline"
>
<FaTimeline 
    style={{marginBottom: "2px"}}
/>{" "}
Timeline
</Dropdown.Item>
*/
function NavDropdown() {
    const [show, setShow] = useState(false);

    return (
        <Dropdown title="Other sites/smaller projects" as={NavItem}>
            <Dropdown.Toggle
                as={NavLink}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                bsPrefix
            >
                <CgMenu style={{marginBottom: "2px"}}/> Other
            </Dropdown.Toggle>
            <Dropdown.Menu
                className="dropdown-container"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                show={show}
            >
                <Dropdown.Item
                    title="Cloud host"
                    className="dropdown-item"
                    href="https://cloud.ai-krieger.de"
                    target="_blank"
                >
                    <FaServer style={{marginBottom: "2px"}}/> Cloud host
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item
                    title="League of Legends Dynamic Banner Creator"
                    className="dropdown-item"
                    href="https://lolbannercreator.ai-krieger.de/"
                    target="_blank"
                >
                    <SiSpringCreators style={{marginBottom: "2px"}}/> LOL Banner Creator
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item
                    title="Webmail Snappy"
                    className="dropdown-item"
                    href="https://webmail.ai-krieger.de/"
                    target="_blank"
                >
                    <SiMailtrap  style={{marginBottom: "2px"}}/> Webmail Snappy
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item
                    title="Postfix Mail Server"
                    className="dropdown-item"
                    href="https://postfixadmin.ai-krieger.de/"
                    target="_blank"
                >
                    <SiAmazonsimpleemailservice  style={{marginBottom: "2px"}}/> Postfix Mail Server
                </Dropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NavDropdown;
