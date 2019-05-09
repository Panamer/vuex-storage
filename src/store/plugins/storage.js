export const SESSION_KEY = 'store-test'

export const getState = () =>{
  const state = sessionStorage.getItem(SESSION_KEY)
  try {
    return JSON.parse(state)
  } catch (e) {
    return null
  }
}

export const setState = (store) => {
  store.subscribe((mutation, state) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state))
  })
}
