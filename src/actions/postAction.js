import {FETCH_POST,NEW_POST} from './types'
import axios from 'axios'

export const fetchPosts = ()=> dispach=> {
        console.log('fetching..');
        
    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(res =>{ console.log(res.data);
        
            dispach({
                type:FETCH_POST,
                payload:res.data
            })}
        )
        .catch(err => console.log(err) );
    
}

export const createPosts = (postData)=> dispach=> {
    console.log('Posting..');
 

    axios.post('http://jsonplaceholder.typicode.com/todos',postData)
    .then(res=> {
        console.log(res);
        dispach({
            type:NEW_POST,
            payload:res.data
        })
        
    })
    .catch(err=>{console.log(err)
    })
}
// export function fetchPosts() {
//     return function(dispach){
//         axios.get('http://jsonplaceholder.typicode.com/todos')
//         .then(res => {
//             dispach({
//                 type:FETCH_POST,
//                 payload:res
//             })
//         })
//         .catch(err => console.log(err) );
        
        
//     }
    
// }