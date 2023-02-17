import PostSummaryItem from "./PostSummaryItem.js";
import postsum from "./postsums.js";

const PostSummaryList = () => {
    return(`
            <ul class="list-group">
                ${postsum.map(postsum => {
                    return (PostSummaryItem(postsum))
                }).join('')
                }
            </ul>
    `)
}
export default PostSummaryList;