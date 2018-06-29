import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const desc = event.target.elements.desc.value
        const post = {
            id: Number(new Date()),
            description: desc,
            imageLink: imageLink
        }
        if (desc && imageLink){
            this.props.addPost(post)
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Desc" name="desc" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )




    }
}

export default AddPhoto