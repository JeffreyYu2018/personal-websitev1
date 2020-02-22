import React from 'react'
import BlogView from '../views/BlogView'
import ReactMarkdown from 'react-markdown'

// axios content for GitHubGraphQL API blog posts
import axios from 'axios';
// Markdown frontmatter parser
import matter from 'gray-matter'

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const GET_BLOG = `
  {
    repository(owner:"JeffreyYu2018", name:"personal-websitev1") {
      object(expression:"master:source/_posts/my-first-post.md") {
        ... on Blob {
          text
        }
      }
    }
  }
  `;

export default class BlogController extends React.Component {
  state = {
    title: null,
    date: null,
    image: null,
    comments: null,
    content: null,
    errors: null,
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOG })
      .then(result => {
        let markdown = matter(result.data.data.repository.object.text)
        let { title, date, image, comments } = markdown.data
        this.setState(() => ({
          title,
          date,
          comments,
          image: `https://github.com/JeffreyYu2018/personal-websitev1/blob/master/${image}`,
          content: markdown.content,
          errors: result.data.errors,
        }))
      })
  }

  render() {
    const { title, date, image, comments, content } = this.state;
    console.log(date)
    return (
      <BlogView>
        <post-image><img src={image} alt="Blog post"/></post-image>
        <blog-title>{title}</blog-title>
        <post-info></post-info>
        <post-body><ReactMarkdown source={content} /> </post-body>
      </BlogView>
    )
  }
}
