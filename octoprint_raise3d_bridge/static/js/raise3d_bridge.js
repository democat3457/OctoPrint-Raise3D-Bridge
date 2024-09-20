/*
 * View model for OctoPrint-Raise3D-Bridge
 *
 * Author: Colin Wong
 * License: AGPLv3
 */
$(function() {
    function Raise3d_bridgeViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: Raise3d_bridgeViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_raise3d_bridge, #tab_plugin_raise3d_bridge, ...
        elements: [ /* ... */ ]
    });
});
