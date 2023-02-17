function NavigationSidebar(highlight = '') {

    const navsb = [
        {navIcon: 'fab fa-twitter', label: '', href: '/',},
        {navIcon: 'fa fa-home', label: 'Home', href: '../HomeScreen/index.html',},
        {navIcon: 'fa fa-hashtag', label: 'Explore', href: '../ExploreScreen/index.html',},
        {navIcon: 'fa fa-bell', label: 'Notifications', href: '#',},
        {navIcon: 'far fa-envelope', label: 'Messages', href: '#',},
        {navIcon: 'fa fa-bookmark', label: 'Bookmarks', href: '#',},
        {navIcon: 'fa fa-list', label: 'Lists', href: '#',},
        {navIcon: 'fa fa-user', label: 'Profile', href: '#',},
        {navIcon: 'fa fa-ellipsis', label: 'More', href: '#',}
    ]

    return(`
        <div class="list-group">
        ${
        navsb.map(navsb =>
            `
                <a class="list-group-item d-inline-flex align-items-center ${navsb.label === highlight ? 'active' : ''}"
                href="${navsb.href}">
                    <i class="fa-fw ${navsb.navIcon}"></i>
                    <span class="d-none d-xl-block ms-3">${navsb.label}</span>
                </a>
           `
        ).join('')
        }
        </div>
        <div class="d-grid mt-2">
             <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
        </div>
    `)

    /*This was tuiter A5, which refactor with above*/
   /* return(`
        <div class="list-group">
            <a class="list-group-item" href="/"><i class="fab fa-twitter"></i>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-home fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Home</span></a>
            <a href="#" class="list-group-item active d-inline-flex align-items-center">
                <i class="fa fa-hashtag fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Explore</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-bell fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Notifications</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-envelope fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Messages</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-bookmark fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Bookmarks</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-list fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Lists</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <i class="fa fa-user fa-fw"></i>
                <span class="d-none d-xl-block ms-3">Profile</span></a>
            <a href="#" class="list-group-item d-inline-flex align-items-center">
                <span class="fa-stack override-bs fa-fw">
                    <i class="fa fa-stack-1x fa-circle"></i>
                    <i class="fa fa-stack-1x fa-ellipsis text-black"></i>
                </span>
                <span class="d-none d-xl-block ms-3">More</span></a>
        </div>
        <div class="d-grid mt-2">
             <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
        </div>
    `);*/
}
export default NavigationSidebar;

/*testing to NavigationSidebar/index.html*/
/*function NavigationSidebar() {
    $('#wd-navSB').append(`
         <div class="list-group">
            <a class="list-group-item" href="/"><i class="fab fa-twitter"></i>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-home fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Home</span></a>
                <a href="#" class="list-group-item active d-inline-flex align-items-center">
                    <i class="fa fa-hashtag fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Explore</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-bell fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Notifications</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-envelope fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Messages</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-bookmark fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Bookmarks</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-list fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Lists</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <i class="fa fa-user fa-fw"></i>
                    <span class="d-none d-xl-block ms-3">Profile</span></a>
                <a href="#" class="list-group-item d-inline-flex align-items-center">
                    <span class="fa-stack override-bs fa-fw">
                        <i class="fa fa-stack-1x fa-circle"></i>
                        <i class="fa fa-stack-1x fa-ellipsis text-black"></i>
                    </span>
                    <span class="d-none d-xl-block ms-3">More</span></a>
         </div>
         <div class="d-grid mt-2">
             <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
         </div>
     `);
}
$(NavigationSidebar);*/
