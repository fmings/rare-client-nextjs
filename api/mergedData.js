import { getSinglePost } from './postsData';
import { getPostTags } from './tagData';

const viewPostDetails = (postId) => new Promise((resolve, reject) => {
  Promise.all([getSinglePost(postId), getPostTags(postId)]).then(([postObject, postTagsArray]) => {
    resolve({ ...postObject, tags: postTagsArray });
  }).catch((error) => reject(error));
});

export default viewPostDetails;
