import BlogListSmall from 'src/components/BlogList/BlogListSmall';
import BlogListLarge from 'src/components/BlogList/BlogListLarge';
import BlogListMiddle from 'src/components/BlogList/BlogListMiddle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BlogListPage() {
  const selector = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate('/sign-in');
  };

  if (!selector.isLoggedIn && selector.user === undefined) {
    return (
      <>
        <p>
          Need to log in ! <b onClick={e => handleClick(e)}>Sign In Page</b>{' '}
        </p>
      </>
    );
  }

  return (
    <>
      <BlogListLarge />
      <BlogListMiddle />
      <BlogListSmall />
    </>
  );
}

export default BlogListPage;
