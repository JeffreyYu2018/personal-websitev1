import React from 'react'
import PostsListView from '../views/PostsListView'
import { IMGURL } from '../constants'
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

export const makeDateIntoString = date => {
    const t = date.split(/[-]/);
    const d = new Date(t[0], t[1] - 1, t[2]);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

export default class PostsListController extends React.Component {
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
    let { posts, errors } = this.state;
    if (errors) {
      return (
        <p>
          <strong> Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    } else if (!posts) {
      return (
        <p>
          <strong>Loading posts...</strong>
        </p>
      )
    }
    return (
      <div>
        {posts.map((post, index) => {
          console.log(post)
          let { data, content } = matter(post.object.text)
          let { title, date, image } = data
          let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
          return (
            <PostsListView key={index}>
              <post-title>{title}</post-title>
              <post-thumbnail
                src={`${IMGURL}${image}`}
                alt="Blog post"
                style={{objectFit:"cover"}}
              />
              <post-date>{date.toLocaleDateString(undefined, dateOptions)}</post-date>
              <post-summary>{content}</post-summary>
            </PostsListView>
          )
        })}
      </div>
    )
  }
}
