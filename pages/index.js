import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Leo' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
