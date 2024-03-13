import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  Modal,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { useState } from 'react'
import { useLocalContext } from '../../contexts/LocalContext'
import { useRecipesContext } from '../../contexts/RecipeContext'
import styles from './RecipeCard.module.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const RecipeCard = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)
  const { isBookmarked, handleBookmarkRecipe } = useLocalContext()
  const { data } = useRecipesContext()

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index)
  }

  const handleCloseModal = () => {
    setOpenModalIndex(null)
  }

  return (
    <div className={styles.container}>
      <Grid container justifyContent='center' alignItems='center'>
        {data?.map((recipe, index) => (
          <Grid item key={recipe.recipe.uri} xs={12} sm={6} md={4} lg={2} mb={3}>
            <Card className={styles.card}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }}>
                    <img
                      width='100'
                      height='100'
                      alt={recipe.recipe.label}
                      src={recipe.recipe.image}></img>
                  </Avatar>
                }
                action={
                  <IconButton
                    onClick={() =>
                      handleBookmarkRecipe({
                        uri: recipe.recipe.uri,
                        label: recipe.recipe.label,
                        image: recipe.recipe.image,
                      })
                    }>
                    {isBookmarked(recipe.recipe.uri) ? (
                      <FavoriteIcon sx={{ color: red[500] }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: red[500] }} />
                    )}
                  </IconButton>
                }
                title={recipe.recipe.label}
                subheader={recipe.recipe.source}
              />
              <CardMedia
                component='img'
                height='200'
                image={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
              <CardContent className=''>
                <Typography align='left' variant='h6' mb={2}>
                  Recipe Information
                </Typography>
                <Typography align='left'>
                  Diet Labels: {recipe.recipe.dietLabels.join(', ')}{' '}
                </Typography>
                <Typography align='left'>Calories: {recipe.recipe.calories} </Typography>
                <Typography align='left'>Cuisine: {recipe.recipe.cuisineType} </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  variant='contained'
                  color='error'
                  sx={{ margin: '0 auto', display: 'flex' }}
                  onClick={() => handleOpenModal(index)}>
                  Read More
                </Button>
                <Modal
                  open={openModalIndex === index}
                  onClose={handleCloseModal}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'>
                  <Box sx={style}>
                    <IconButton
                      onClick={handleCloseModal}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                      }}>
                      <CloseIcon />
                    </IconButton>
                    <List>
                      <Typography variant='h6' align='center' mt={2}>
                        Ingredients
                      </Typography>
                      {recipe.recipe.ingredients.map((ingredient) => (
                        <ListItem key={ingredient.foodId}> {ingredient.text}</ListItem>
                      ))}
                      <Typography align='left' mt={2}>
                        Health Labels: {recipe.recipe.healthLabels.join(', ')}{' '}
                      </Typography>
                    </List>
                  </Box>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default RecipeCard
