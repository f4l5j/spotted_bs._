function changeorientation() {
    document.body.requestFullscreen().then(res=>console.log(res).catch(err=>console.log(err)));
    screen.orientation.lock('landscape').then(res=>console.log(res)).catch(err=>console.log(err))
  }