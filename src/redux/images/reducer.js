import actions from './actions'

const initialState = {
  images: [],
  loading: false
}

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_IMAGES:
      return {
        ...state,
        loading: true
      }
    case actions.GET_IMAGES_SUCCESS: {
      const {images} = action.payload
      return {
        ...state,
        images,
        loading: false
      }
    }
    case actions.GET_IMAGES_FAILURE:
      return {
        ...state,
        loading: false
      }

    case actions.LOAD_IMAGES:
      return {
        ...state,
        loading: true
      }
    case actions.LOAD_IMAGES_SUCCESS: {
      const { images } = action.payload
      return {
        ...state,
        images,
        loading: false
      }
    }
    case actions.LOAD_IMAGES_FAILURE:
      return {
        ...state,
        loading: false
      }      
    default:
      return state
  }
}
