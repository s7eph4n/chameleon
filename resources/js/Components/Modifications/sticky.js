/**
 * This file integrates the jQuery Sticky plugin with the Chameleon skin
 *
 * This file is part of the MediaWiki skin Chameleon.
 *
 * @copyright 2013 - 2014, Stephan Gambke
 * @license   GNU General Public License, version 3 (or any later version)
 *
 * The Chameleon skin is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * The Chameleon skin is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * @author Stephan Gambke
 * @since 1.0
 * @ingroup Skins
 */


/*global window, document, jQuery, mediaWiki */

;( function (window, document, $, mw, undefined) {

    'use strict';

    mw.loader.using('skin.chameleon.jquery-sticky', function () {
        $('.sticky').stick_in_parent();
    });

}(window, document, jQuery, mediaWiki) );
