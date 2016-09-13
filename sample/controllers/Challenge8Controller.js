define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.controller('Challenge8Controller', function ($scope) {
        $scope.title = "Challenge 8";
        $scope.description = `Create 3 inputs each with maximum char. length 5. When entering the 5th char. in an input the
            cursor should jump to the next input right after the char. has been inserted. When deleting the 1st
            char. of an input the cursor should jump at the end of previous input right after that char. has
            been deleted.`;
    });

    angularAMD.directive('jumpFocus', function() {
        function getCursorPosition(element) {
            return element.setSelectionRange && element.selectionStart;
        }

        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                var tag = parseInt(attr.tag);
                var maxlength = parseInt(attr.maxlength);

                elem.on('input, keydown', function(e) {
                    var val = elem.val();
                    var keycode = e.which || e.keyCode;

                    if (val.length === maxlength && [8, 37, 38, 39, 40, 46].indexOf(keycode) === -1) {
                        var next = document.querySelectorAll('#code' + (tag + 1));
                        next.length && next[0].focus();
                        return;
                    }

                    var cp = getCursorPosition(this);
                    if ((cp === 0 && keycode === 46) || (cp === 1 && keycode === 8)) {
                        var prev = document.querySelectorAll('#code' + (tag - 1));
                        e.preventDefault();
                        elem.val(val.substring(1));
                        prev.length && prev[0].focus();
                        return;
                    }
                });
            }
        };
    });    
});