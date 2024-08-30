import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  About,
  Article,
  ArticlePage,
  Blog,
  Error404,
  Home,
  Privacy,
  Terms,
  Waitlist,
  WebApp,
} from "./pages";
import { useSelector } from "react-redux";
import { RootSate } from "./store/store";
import { bl1, bl2, bl3 } from "./assets";
import blog from "./utils/blog";

function App() {
  const navOpen = useSelector((state: RootSate) => state.ui.navOpen);

  console.log(navOpen);
  const blogs: blog[] = [
    {
      img: bl1,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Investment Strategies",
      date: "March 27, 2024",
    },
    {
      img: bl2,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Tag",
      date: "March 27, 2024",
    },
    {
      img: bl3,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Investment Strategies",
      date: "March 27, 2024",
    },
    {
      img: bl2,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Investment Strategies",
      date: "March 27, 2024",
    },
    {
      img: bl1,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Investment Strategies",
      date: "March 27, 2024",
    },
    {
      img: bl3,
      title: "Understanding the Role of CPAs in the Era of Digital Finance",
      post: `Example: "At Alongside, we believe in simplifying blockchain diversification, making it accessible to everyone. `,
      tag: "Investment Strategies",
      date: "March 27, 2024",
    },
  ];
  const tags: string[] = [
    "All",
    "teg",
    "teg",
    "DeFiTutorials",
    "DeFiTutorials",
    "Insights",
    "Updates",
    "Investment Strategies",
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog blogs={blogs} tags={tags} />} />
          <Route
            path="/blog/articles-news"
            index
            element={<Article blogs={blogs.slice(0, 3)} />}
          />
          <Route
            path="/blog/:title"
            element={<ArticlePage blogs={blogs} tags={tags} />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
