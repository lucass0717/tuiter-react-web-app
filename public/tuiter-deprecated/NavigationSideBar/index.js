const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fa-brands fa-twitter"></i></a>
     
     <a href="home.html" class="list-group-item pb-2 clearfix">
       <span><i class="fa-solid fa-house float-start"></i></span>
       <span class="ps-2 d-none d-xl-block float-start">Home</span>
    </a>
    <a href="explore.html" class="list-group-item pb-2 active">
                <span><i class="fa-solid fa-hashtag float-start"></i></span>
                <span class="ps-2 d-none d-xl-block float-start">Explore</span>
    </a>
    <a href="notifications.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-bell float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">Notifications</span>
    </a>
    <a href="messages.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-envelope float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">Messages</span>
    </a>
    <a href="bookmarks.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-bookmark float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">Bookmarks</span>
    </a>
    <a href="lists.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-list float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">Lists</span>
    </a>
    <a href="profile.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-user float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">Profile</span>
    </a>
    <a href="more.html" class="list-group-item pb-2">
        <span><i class="fa-solid fa-circle float-start"></i></span>
        <span class="ps-2 d-none d-xl-block float-start">More</span>
    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

