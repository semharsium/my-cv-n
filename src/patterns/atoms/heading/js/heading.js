'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * heading module implementation.
 *
 * @author Davide De Giorgio <davide.degiorgio@namics.com>
 */

// const selectors = { button: '.js-heading__button' };
// const stateClasses = { disabled: 'state-heading--disabled' };

T.Module.Heading = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
