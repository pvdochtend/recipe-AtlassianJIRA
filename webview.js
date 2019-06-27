"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.querySelectorAll('[data-test-selector="NotificationIndicator"]').length > 0) {
      count = parseInt(document.querySelectorAll('[data-test-selector="NotificationIndicator"]')[0].childNodes[0].innerHTML, 10);
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};