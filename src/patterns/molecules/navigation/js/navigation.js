import "../../hamburger/js/hamburger";
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
	selectors: {
		navigationMenu: ".js-navigation-menu"
	},
	stateClasses: {
		navigationMenuActive: "m-navigation--menu-active"
	},
	start(resolve) {
		this.$ctx = $(this._ctx);
		this.$navigationMenu = this.$ctx.find(this.selectors.navigationMenu);
		this.registerHandlers();
		resolve();
	},

	registerHandlers() {
		this.$ctx.on("click", this.handleMenuItem.bind(this));
	},

	handleMenuItem() {
		this.$navigationMenu.toggleClass(this.stateClasses.navigationMenuActive);
	}
});

