import store from '../store';
export default ({ app }) => {
  app.router.afterEach((to, next) => {
    // to.path == '/' ?
    // store
    // .dispatch("setHeaderAdver",true) : '';
    console.log(store)
  })
}
