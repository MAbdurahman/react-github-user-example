import React, { Component } from 'react';
import './Github.css';
import axios from 'axios';


export default class Github extends Component {

   constructor() {
      super();
      // this.getGitHubData('greg');
   }

   getGitHubData(_searchTerm) {
      axios
         .get('https://api.github.com/search/users?q=' + _searchTerm)
         .then(res => {
            console.log(res.data.items);
         })
         .catch(err => console.error(err));
   }

   componentDidMount() {
      this.getGitHubData('mabdurahman')
   }

   render() {
      return (
         <div className='github'>
            <h1>Github Component</h1>
         </div>
      );
   };
};
