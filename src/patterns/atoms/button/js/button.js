'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * button module implementation.
 *
 * @author Davide De Giorgio <davide.degiorgio@namics.com>
 */

// const selectors = { button: '.js-button__button' };
// const stateClasses = { disabled: 'state-button--disabled' };

T.Module.Button = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
