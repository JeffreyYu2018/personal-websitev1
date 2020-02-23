import React from 'react'
import BlogView from '../views/BlogView'
import ReactMarkdown from 'react-markdown'
import { IMGURL } from '../constants'

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
        let { title, date, image } = markdown.data
        this.setState(() => ({
          title,
          date,
          image,
          content: markdown.content,
          errors: result.data.errors,
        }))
      })
  }

  render() {
    const { title, date, image, content, errors } = this.state;
    if (errors) {
      return (
        <p>
          <strong> Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    }
    return (
      <BlogView>
        <post-image>
          <img
            src={`${IMGURL}${image}`} alt="Blog post" style={{objectFit:"cover"}} />
        </post-image>
        <blog-title>{title}</blog-title>
        <post-info></post-info>
        <post-body><ReactMarkdown source={content} /> </post-body>
      </BlogView>
    )
  }
}
