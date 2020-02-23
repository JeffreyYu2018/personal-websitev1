import React from 'react'
import PostContentView from '../views/PostContentView'
// Markdown frontmatter parser
import matter from 'gray-matter';

// axios content for GitHubGraphQL API blog posts
import axios from 'axios';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const GET_BLOG_HEADERS = `
  {
    repository(owner:"JeffreyYu2018", name:"personal-websitev1") {
      object(expression:"master:source/_posts") {
        ... on Tree {
          entries {
            name,
            object {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  }
  `;

const posttitles = ['one', 'two', 'three']

export default class PostContentController extends React.Component {
  state = {
    posts: [],
    errors: null
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOG_HEADERS })
      .then(result =>
        this.setState(() => ({
          posts: result.data.data.repository.object.entries,
          errors: result.data.errors
        })),
      );
  }

  render() {
    let { posts } = this.state;
    posts.map((entry, index) => {
      console.log(entry.name)
    })
    return (
      <div>
        {posts.map((post, index) => {
          return (
            <PostContentView key={index}>
              <post-title>{post.name}</post-title>
              <post-thumbnail />
              <post-date />
              <post-content />
            </PostContentView>
          )
        })}
      </div>
    )
  }
}
