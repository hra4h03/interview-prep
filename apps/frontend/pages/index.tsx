import Blog from '../app/blog/blog';
import Navbar from '../app/navbar/navbar';

export function Index() {
  /*
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <Navbar user={undefined}></Navbar>
      <Blog></Blog>
    </>
  );
}

export default Index;
