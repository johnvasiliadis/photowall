import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        // const id = this.props.match.params.id
        // const posts = this.props.posts
        // above redone to below
        const { match, posts } = this.props //this.props is params and ...props
        // match becomes this props. so id is match.params.id
        const id = Number(match.params.id)

        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || [] //default to empty with OR
        const index = this.props.posts.findIndex((post) => post.id === id)
//find the index of every post where the id = id

return <div className="single-photo">
            <Photo post={post} {...this.props} index={index}/>
            {/* <Comments {...this.props}/> */}
            {/* no need to send all props as in above. so just send */}
            <Comments addComment={this.props.addComment} comments={comments} id={id} />

        </div>
    }
}

export default Single