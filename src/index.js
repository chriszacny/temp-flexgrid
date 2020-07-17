import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
    let data = [
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-2.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-3.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-2.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-3.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-2.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Testing 123",
            photoUrl: "http://clipart-library.com/newimages/owl-clip-art-3.jpg",
            tags: ["tag1", "tag2", "tag3"]
        }];

    return(
        <div>
            <div className="flexContainer">
                {data.map(item => (
                    <div className="displayBox">
                        <a href={"www.google.com"} target="_blank">
                            <img src={item.photoUrl} />  
                        </a>
                        <div className="displayMeta">
                            <div className="displayTitle">{item.title}</div>
                            <div className="displayTags">Tags: [ {item.tags.map(tag =>(
                                tag + ",  "
                            ))} ]</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
