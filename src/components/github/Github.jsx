import React, { Component } from 'react';
import './Github.css';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default class Github extends Component {

   constructor() {
      super();
      this.state = {
         data: [],
         isLoading: true
      };

   }

   componentDidMount() {
      this.getGitHubData('mabdurahman')
   }

   getGitHubData(_searchTerm) {
      axios
         .get('https://api.github.com/search/users?q=' + _searchTerm)
         .then(res => {
            this.setState({
               isLoading: false,
               data: res.data.items
            })
            console.log(res.data.items);
         })
         .catch(err => console.error(err));
   }

   render() {
      return (
         <div className='github'>
            { this.state.isLoading &&
               <ReactLoading
               className='githubLoader'
                  type='spinningBubbles'
                  color='#444'
                  height='10%'
                  width='10%'
               />}
         </div>
      );
   };
};
