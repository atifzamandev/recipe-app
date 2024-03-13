import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { useState } from 'react'
import { useLocalContext } from '../../contexts/LocalContext'

const Header = () => {
  const { bookmarkedRecipes, handleDeleteAll, handleDeleteBookmark } = useLocalContext()
  const [drawerOpen, setDrawerClose] = useState(false)

  const toggleDrawer = () => {
    setDrawerClose(!drawerOpen)
  }

  return (
    <>
      <Box component='div' sx={{ flexGrow: 1 }}>
        <AppBar position='relative' sx={{ bgcolor: red[900] }}>
          <Toolbar>
            <Typography
              data-cy-header='cy-header'
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}>
              Recipes Information
            </Typography>
            <Button
              sx={{
                color: red[900],
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
              data-cy-bookmrk='cy-bookmark'
              variant='outlined'
              onClick={toggleDrawer}>
              {bookmarkedRecipes.length < 1
                ? 'Book Mark'
                : `Book Marked ${bookmarkedRecipes.length}`}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
          <Typography variant='h6' my={2} mx={12}>
            {bookmarkedRecipes.length < 1 ? 'No Recipes Bookmarked' : `Recipes Bookmarked`}
          </Typography>
          <IconButton
            onClick={toggleDrawer}
            data-cy-bookmrk-close='cy-bookmark-close'
            sx={{
              position: 'absolute',
              right: 12,
              top: 8,
            }}>
            <CloseIcon />
          </IconButton>
          <List>
            {bookmarkedRecipes.map((bookmark, index) => (
              <>
                <ListItem key={bookmark.uri}>
                  <ListItemAvatar>
                    <Avatar>
                      <img alt={bookmark.label} src={bookmark.image}></img>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>{bookmark.label}</ListItemText>
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => handleDeleteBookmark(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </>
            ))}
          </List>
          {bookmarkedRecipes.length > 0 && (
            <Button
              color='error'
              variant='contained'
              sx={{ margin: '10px' }}
              onClick={handleDeleteAll}>
              Delete All
            </Button>
          )}
        </Drawer>
      </div>
    </>
  )
}

export default Header
