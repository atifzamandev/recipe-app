import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { red } from '@mui/material/colors'

interface LocalStorageProp {
  uri: string
  label: string
  url: string
}
const Header = () => {
  const [drawerOpen, setDrawerClose] = useState(false)
  const [recipesList, setRcipiesList] = useState<Array<LocalStorageProp>>([])

  const toggleDrawer = () => {
    setDrawerClose(!drawerOpen)
    
  }

  useEffect(() => {
    const savedRecipes = localStorage.getItem('bookmarkedRecipes')
    if (savedRecipes) {
      const parsedRecipes: Array<{ uri: string; label: string; url: string }> =
        JSON.parse(savedRecipes)

      setRcipiesList(parsedRecipes)
    }
  }, [drawerOpen])

  const handleDeleteBookmark = (index: number) => {
    const updatedRecipesList = [...recipesList]
    updatedRecipesList.splice(index, 1)
    setRcipiesList(updatedRecipesList)
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedRecipesList))
  }
  const handleDeleteAll = () => {
    setRcipiesList([])
    localStorage.setItem('bookmarkedRecipes', JSON.stringify([]))
  }

  return (
    <>
      <div>
        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
          <Typography variant='h6' my={2} mx={12}>Recipes Bookmarked</Typography>
          <List>
            {recipesList.map((bookmark, index) => (
              <>
                <ListItem key={bookmark.uri}>
                  <ListItemAvatar>
                    <Avatar>
                      <img alt={bookmark.label} src={bookmark.url}></img>
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
          <Button
            color='error'
            variant='contained'
            sx={{ margin: '10px' }}
            onClick={handleDeleteAll}>
            Delete All
          </Button>
        </Drawer>
      </div>

      <Box component='div' sx={{ flexGrow: 1 }}>
        <AppBar position='relative' sx={{ bgcolor: red[900] }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Recipes Store
            </Typography>
            <Button
              sx={{
                color: red[900],
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'lightgray',
                }
              }}
              variant='outlined'
              onClick={toggleDrawer}>
              Bookmark
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
