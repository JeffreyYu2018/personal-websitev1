import React from 'react';
import IndexView from '../views/IndexView'

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

const GET_BLOGS = `
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

export default class IndexController extends React.Component {
  state = {
    post_text: null,
    errors: null,
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOGS })
      .then(result =>
        this.setState(() => ({
          post_text: result.data.data.repository.object.text,
          errors: result.data.errors,
        })),
      )
  }

  render() {
    return <IndexView />
  }
}
