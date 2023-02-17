const PostSummaryItem = (postsum) => {
    return (`
            <li class="list-group-item d-flex justify-content-between">
                <div class="col col-9 d-flex flex-column">
                    <span class="text-muted">${postsum.topic}</span>
                    <div>
                        ${postsum.userName}
                        <i class="fa fa-check-circle mx-1"></i><span class="text-muted small"> - ${postsum.time}</span>
                    </div>
                    <span class="text-truncate text-wrap grid-row" style="...">${postsum.title}</span>
                    <span class="text-muted small">${postsum.tuits}</span>
                </div>
                <div class="col col-2">
                    <img class="img-fluid rounded-2" src="${postsum.image}"/>
                </div>
            </li>
    `)
}
export default PostSummaryItem;