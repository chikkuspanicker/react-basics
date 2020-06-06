import React, { useState } from 'react';

// export default class Main extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: 0
//         }
//         this.increment = this.increment.bind(this)
//     }
//     increment() {
//         this.setState({
//             counter : this.state.counter + 1
//         })
//     }
//     render() {
//         return (
//             <main>
//                 <div className="container" style={{ height: "1300px" }}>
//                     <div className="row mt-5 pt-5">
//                         <div className="col text-center">
//                             <h2>
//                                 Counter :
//                                 {this.state.counter}
//                             </h2>
//                             <button
//                                 onClick={this.increment}
//                                 type="button" className="btn btn-primary">Increment</button>
//                             <h4>
//                                 This is
//                                 {
//                                     this.props.content
//                                 }
//                                 Page
//                         </h4>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         )
//     }
// }
export default function Main({ content }) {
    const [count, setCount] = useState(0);
    // function increment() {
    //     setCount(count + 1)
    // }
    const increment = () => { 
        setCount(count + 1)
    }
    return (
        <main>
            <div className="container" style={{ height: "1300px" }}>
                <div className="row mt-5 pt-5">
                    <div className="col text-center">
                        <h2>{count}</h2>
                        <button
                            onClick={increment}
                            type="button" className="btn btn-primary">Primary</button>
                        <h4>
                            This is
                            {
                                content
                            }
                            Page
                        </h4>
                    </div>
                </div>
            </div>
        </main>
    )
}