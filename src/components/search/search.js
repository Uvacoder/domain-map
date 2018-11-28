import React from 'react';
import SearchInput, { createFilter } from 'react-search-input';
// import emails from '../domains';

import { Container } from './search.css';
import emails from '../../domain-test.json';

// import emails from './mails'

const KEYS_TO_FILTERS = ['domain', 'type'];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const filteredEmails = emails.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <Container>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <div className="resultsContainer">
          {filteredEmails.length !== 0 ? (
            filteredEmails.map(email => {
              return (
                <div className="domain-item" key={email.domain}>
                  <div className="domain-name">{email.domain}</div>
                  <div className="organisation">{email.organisation}</div>
                </div>
              );
            })
          ) : (
            <p>no results :(</p>
          )}
        </div>
      </Container>
    );
  }
}
export default Search;
