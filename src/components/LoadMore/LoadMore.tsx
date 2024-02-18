import { Button } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

interface Prop {
  handleLoadMore: () => void
}

const LoadMore: React.FC<Prop> = ({ handleLoadMore }) => {
  return (
    <>
      <Button
        fullWidth
        data-cy-load='cy-loadMore'
        variant='outlined'
        color='error'
        sx={{
          border: '2px solid',
          backgroundColor: 'white',
          '&:hover': { color: 'white', backgroundColor: red[900] },
        }}
        onClick={handleLoadMore}>
        Load More
      </Button>
    </>
  )
}

export default LoadMore
