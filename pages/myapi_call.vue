<template>
  <article>
    <section>
      <h1>Page Header</h1>
      <div class="container links">
         {{blogs}} 
        
         </div>
    </section>
  </article>
</template>

<script>
// import axios from '~/plugins/axios'

//   export default {
//     async asyncData () {
//       const {data} = await axios.get('/posts')
//       return {articles:data}
//     }
//   }

import articles from '~/data/myapi.json'
import axios from "axios";
// import PageBanner from '~/components/PageBanner';

export default {
  head: {
    title: 'Site Title: Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Site description' }
    ]
  },
  components: {
    // PageBanner
  },
  data () {
    return {
      blogs: articles, // Just set it here
      isLoading: true
    }
  },
}


// export default {
//   head: {
//     title: 'Site Title: Blog',
//     meta: [
//       { hid: 'description', name: 'description', content: 'Site description' }
//     ]
//   },
//   // components: {
//   //   PageBanner
//   // },
//   data () {
//     return {
//       blogs: [],
//       isLoading: true
//     }
//   },
//   created () {
//     this.axios.get("~/data/myapi.json").then((response) => {
//       this.blogs = response.data
//       this.isLoading = false
//     })
//   }
// }

//  const data = {};
//  export default {
//    authors = await axios.get('~/data/myapi.json').then(res => res.data)


    // data({  }) {      
    //   return axios.get('~/data/myapi.json')
    //     .then((res) => {
    //       return {
    //         authors: res.data
    //       }
    //     })
    // }

  // }


// export default {

//   data:function(){
//         return{
//             asyncData(callback) {
//             axios.get("~/data/myapi.json").then(res => {
//             callback(null, { breeds: res.data });
//               });
//             }
//         }
//     }

     

    // data:function(){
    //     return{
    //         breeds: articles
    //     }
    // }
}

// import axios from "axios";
// export default {
//   asyncData({ params }, callback) {
//     axios.get("~/data/myapi.json").then(res => {
//       callback(null, { breeds: res.data });
//     });
//   }
// };


// import axios from "axios";

// var customData = require('~/data/myapi.json');
// export function fetchUsers(){
//     return function(dispatch){
//         axios.get('~/data/myapi.json')
//             .then((response) => {
//                 dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
//             })
//             .catch((err) => {
//                 dispatch({type:'FETCH_USERS_REJECTED', payload:err});
//             })
//     }
// }

// const ax = axios.create({
//   baseURL: 'http://localhost:3000/data'
// })
// asyncData ({ params }) {
//   ax.get('myapi.json').then(res => {
//       callback(null, { breeds: res.data });
// });
// }

// export default {}


// import axios from "axios";

// export default {
//   asyncData({ params }, callback) {
//     axios.get("~/data/myapi.json").then(res => {
//       callback(null, { breeds: res.data });
//     });
//   }
// };

// export default {
//   asyncData ({ params }) {
//     return axios.get(`https://127.0.0.1:3003/todos/showplan`)
//       .then((res) => {
//         return { title: res.data }
//       })
//   }
// }
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

