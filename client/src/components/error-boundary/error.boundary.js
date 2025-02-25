import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error.styled'

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasErrored : true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render () {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png'/>
                    <ErrorImageText>Something went wrong :((</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;