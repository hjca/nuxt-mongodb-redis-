export default ({ app,store }) => {
  app.router.afterEach((to, next) => {
    to.path == '/' ?
    store
    .commit("SET_HEADER_ADVER",true) : 
    store
    .commit("SET_HEADER_ADVER",false);
    // actions.setHeaderAdver(store,false)
  })
}
