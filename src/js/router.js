class Router {
  constructor() {
    this.routes = [];
    window.onhashchange = () => {
      this.reload();
    }
  }

  add(uri, callback) {
    if(!uri || !callback) throw new Error('uri or callback must be given');
    if(typeof uri !== "string") throw new TypeError('typeof uri must be a string');
    if(typeof callback !== "function") throw new TypeError('typeof callback must be a function');
    this.routes.forEach(route=>{
      if(route.uri === uri) throw new Error(`the uri ${route.uri} already exists`);
    });

    this.routes.push({uri, callback});
  }

  reload () {
    this.routes.some(route => {
      let regEx = new RegExp(`^${route.uri}$`);
      let path = window.location.hash.replace("#",'');
      if(path.match(regEx)){
        let req = { path }
        return route.callback.call(this, req);
      }
    });
  }
}

export default Router;