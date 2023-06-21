import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate} from 'react-router-dom';

//todo kendi JSON dosyamizi olusturuyoruz...
const internalLinks = [
    {
        title: "Dashboard",
        icon: <MailIcon/>,
        path: "/stock/"

    },
    {
        title: "Sale",
        icon: <MailIcon/>,
        path: "/stock/sales/"

    },
    {
        title: "Purchases",
        icon: <MailIcon/>,
        path: "/stock/purchases/"

    },
]

const MenuListItems = () => {
    const navigate = useNavigate()
  return (
    <List>
      {internalLinks.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={()=>navigate(item.path)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default MenuListItems