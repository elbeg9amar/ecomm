import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../reducer/shopData/shopSelector';

import Preview from '../preview-collection/Preview';
import './collectionsOverview.scss'


function CollectionsOverview( {collections} ) {
    return (
        <div className="collection-overview">
            {
            collections.map
            (({id, ...collectionProps}) => (
                <Preview key={id} {...collectionProps} />
            ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
