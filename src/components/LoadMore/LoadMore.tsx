import { Button, Grid } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

interface Prop {
  handleLoadMore: () => void
}

const LoadMore: React.FC<Prop> = ({ handleLoadMore }) => {
  return (
    <div>
      <Grid item xs={5}>
        <Button
          variant='outlined'
          color='error'
          sx={{
            maxWidth: '380px',
            minWidth: '380px',
            border: '2px solid',
            backgroundColor: 'white',
            '&:hover': { color: 'white', backgroundColor: red[900] },
          }}
          onClick={handleLoadMore}>
          Load More
        </Button>
      </Grid>
    </div>
  )
}

export default LoadMore
