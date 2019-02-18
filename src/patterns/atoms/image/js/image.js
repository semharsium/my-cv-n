'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * image module implementation.
 *
 * @author Davide De Giorgio <davide.degiorgio@namics.com>
 */

// const selectors = { button: '.js-image__button' };
// const stateClasses = { disabled: 'state-image--disabled' };

T.Module.Image = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
