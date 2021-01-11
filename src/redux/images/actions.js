const actions = {
  GET_IMAGES: 'GET_IMAGES',
  GET_IMAGES_SUCCESS: 'GET_IMAGES_SUCCESS',
  GET_IMAGES_FAILURE: 'GET_IMAGES_FAILURE',

  LOAD_IMAGES: 'LOAD_IMAGES',
  LOAD_IMAGES_SUCCESS: 'LOAD_IMAGES_SUCCESS',
  LOAD_IMAGES_FAILURE: 'LOAD_IMAGES_FAILURE',
}

export default actions

export const getImages = () => {
  return {
    type: actions.GET_IMAGES    
  }
}

export const loadImages = () => {
  return {
    type: actions.LOAD_IMAGES    
  }
}
