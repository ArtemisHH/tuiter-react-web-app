const PostItems = (post) => {
    return(`
           <div class="d-flex justify-content-between mt-2">
                <img class="wd-avatar-img col col-2" src="${post.avatarIcon}"/>
                <div class="flex-column ms-2">
                    <div class="d-flex justify-content-between">
                        <div class="col col-11">
                            ${post.userName}
                            <span class="fa-stack override-bs fa-fw">
                                <i class="fa-solid fa-stack-1x fa-certificate"></i>
                                <i class="fa fa-stack-1x fa-check fa-xs fa-inverse"></i>
                            </span>
                            <span class="text-muted small">@${post.handle}</span>
                            <span class="text-muted small">· ${post.time}</span>
                        </div>
                        <a href="#" class="text-muted"><i class="fa fa-ellipsis"></i></a>
                    </div>
                    ${post.topic}
                    <span class="text-primary">${post.mention}</span>
                    <span class="text-primary">${post.tuitLink}</span>
                    <div class="card rounded-5 mt-2">
                        <img class="wd-post-img" src="${post.image}">
                        <div class="card-body override-bs">
                            <h6>${post.title}</h6>
                            <span class="text-muted">${post.content}</span></br>
                            <span class="text-muted"><i class="fa fa-link"></i>${post.url}</a>
                        </div>
                    </div>
                    <div class="d-flex text-muted my-2">
                        <div class="flex-fill">
                            <i class="far fa-comment"></i>
                            <span class="mx-2">${post.commentNo}</span>
                        </div>
                        <div class="flex-fill">
                            <i class="fa fa-retweet"></i>
                            <span class="mx-2">${post.repostNo}</span>
                        </div>
                        <div class="flex-fill">
                            <i class="far fa-heart"></i>
                            <span class="mx-2">${post.likeNo}</span>
                        </div>
                        <div class="flex-fill">
                            <i class="fas fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
           </div>
    `)
}
export default PostItems;
