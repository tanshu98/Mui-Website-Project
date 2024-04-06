import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Box, Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import ProfileImage from '../../Images/AvatarImg.jpeg';

function Navbar() {
    const [open, setOpen] = useState(false);
    // Styling using Styled in MUI

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    const Search = styled("div")(({theme}) => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%'
    }))
    const Icons = styled(Box)(({theme}) => ({
        display: 'none',
        alignItems: 'center',
        gap: 12,
        [theme.breakpoints.up("sm")]: {
            display: 'flex'
        }
    }))
    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    }))
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>LAMA DEV</Typography>
          <Pets sx={{display: {xs: 'block', sm: 'none'}}} />
          <Search><InputBase placeholder='Search...' /></Search>
          <Icons>
            <Badge badgeContent={4} color='error'>
                <Mail />
            </Badge>
            <Badge badgeContent={3} color='error'>
                <Notifications />
            </Badge>
            <Avatar
                sx={{width: 30, height: 30}}
                src={ProfileImage}
                onClick={e=> setOpen(true)}
                />
                
          </Icons>
          <UserBox onClick={e=> setOpen(true)}>
          <Avatar
             sx={{width: 30, height: 30}}
               src={ProfileImage}
               
               />
            <Typography>John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar