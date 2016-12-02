/*
 *     Copyright (c) 2012-2017 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 *     This file is part of Wirecloud Platform.
 *
 *     Wirecloud Platform is free software: you can redistribute it and/or
 *     modify it under the terms of the GNU Affero General Public License as
 *     published by the Free Software Foundation, either version 3 of the
 *     License, or (at your option) any later version.
 *
 *     Wirecloud is distributed in the hope that it will be useful, but WITHOUT
 *     ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *     FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 *     License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with Wirecloud Platform.  If not, see
 *     <http://www.gnu.org/licenses/>.
 *
 */

/* globals Wirecloud */

(function (utils) {

    "use strict";

    var RenameWindowMenu = function RenameWindowMenu(what, title) {

        var fields = {
            'name': {
                label: utils.gettext('New Name'),
                type: 'text',
                required: true,
                initialValue: what.name
            }
        };
        this.what = what;
        Wirecloud.ui.FormWindowMenu.call(this, fields, title);

    };
    RenameWindowMenu.prototype = new Wirecloud.ui.FormWindowMenu();

    RenameWindowMenu.prototype.setFocus = function setFocus() {
        this.form.fieldInterfaces.name.focus();
    };

    RenameWindowMenu.prototype.executeOperation = function executeOperation(data) {
        return this.what.rename(data.name);
    };

    Wirecloud.ui.RenameWindowMenu = RenameWindowMenu;

})(Wirecloud.Utils);
