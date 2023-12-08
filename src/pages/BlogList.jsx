import BlogListSmall from 'src/components/BlogList/BlogListSmall';
import BlogListLarge from 'src/components/BlogList/BlogListLarge';
import BlogListMiddle from 'src/components/BlogList/BlogListMiddle';

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
