const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex justify-content-between">
            <img class="wd-avatar-img rounded-circle col col-2" src="${who.avatarIcon}">
            <div class="d-flex flex-column col col-7 ms-1">
                <div class="fw-bold">${who.userName}<i class="fa fa-check-circle ms-1"></i></div>
                <span>@${who.handle}</span>
            </div>
            <button class="btn btn-primary rounded-pill override-bs align-self-center col col-3" type="button">Follow</button>
        </li>
   `);
}
export default WhoToFollowListItem;

