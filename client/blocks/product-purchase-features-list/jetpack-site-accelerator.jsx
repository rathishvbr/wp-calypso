/** @format */

/**
 * External dependencies
 */

import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import PurchaseDetail from 'components/purchase-detail';

export default localize( ( { selectedSite, translate } ) => {
	return (
		<div className="product-purchase-features-list__item">
			<PurchaseDetail
				icon={ <img alt="" src="/calypso/images/illustrations/jetpack-search.svg" /> }
				title={ translate( 'Site accelerator' ) }
				description={ translate(
					'Load pages faster, and serve your images and ' +
						'static files from our global network of servers.'
				) }
				buttonText={ translate( 'View settings' ) }
				href={ '/settings/writing/' + selectedSite.slug }
			/>
		</div>
	);
} );
