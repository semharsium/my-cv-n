'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * navigation module implementation.
 *
 * @author Davide De Giorgio <davide.degiorgio@namics.com>
 */

// const selectors = { button: '.js-navigation__button' };
// const stateClasses = { disabled: 'state-navigation--disabled' };

T.Module.Navigation = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
