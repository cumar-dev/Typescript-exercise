interface welcome {
    username: string;
    premium: boolean
}
const WelcomeComponent = (Welcome: welcome) => {
    if(Welcome.premium == true) {
        return <h1>welcome back premium User</h1>
    }else {
        return <h1>welcome guest</h1>
    }
  
}

export default WelcomeComponent;