import React from 'react'

const Quizzer = ({content, navbar}) => (
    <div className='Quizzer'>
        {navbar}
        {content || 'No content supplied'}
    </div>
)

export default Quizzer;