/********************************************************************
 Copyright (C) 2020 Ryan Qian <i@bitbili.net>
*********************************************************************/

registerShortcut("customResizeWindow", "Move window to right bottom", "Meta+Ctrl+M", function() {
  var client = workspace.activeClient;
  var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
  if (client.moveable && client.resizeable && (client.width < maxArea.width || client.height < maxArea.height)) {
    client.geometry = {
      x: maxArea.width / 2 - 300 + maxArea.x,
      y: maxArea.height / 2 - 300 + maxArea.y,
      width: maxArea.width / 2 + 230,
      height: maxArea.height / 2 + 230
    };
  }
});
