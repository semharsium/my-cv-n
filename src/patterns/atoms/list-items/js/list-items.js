'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * list-items module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-list-items__button' };
// const stateClasses = { disabled: 'state-list-items--disabled' };

T.Module.ListItems= T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
