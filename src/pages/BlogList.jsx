import BlogListSmall from '../components/BlogListSmall';
import BlogListLarge from '../components/BlogListLarge';
import BlogListMiddle from '../components/BlogListMiddle';

function BlogList() {
  return (
    <>
      <BlogListLarge/>
      <BlogListMiddle/>
      <BlogListSmall />
    </>
  );
}

export default BlogList;
