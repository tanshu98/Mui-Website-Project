
import { Box } from '@mui/material'
import React from 'react'
import Posts from '../Posts/Posts'

function Feed() {
  return (
    <Box p={3} flex={4}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      </Box>
  )
}

export default Feed