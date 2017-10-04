export function toggleDrawer(side, navigator) {
  navigator.toggleDrawer({
    side: side,
    animated: true,
  });
}

export function deepLinks(link, navigator) {
  const parts = link.split('/');
  if (parts[0] === "Login") {
    navigator.popToRoot();
  } else if(parts[0] === "Sites") {
    navigator.push({
      screen: parts[1],
      title: parts[0],
      backButtonHidden: true
    });
  } else {
    navigator.push({
      screen: parts[1],
      title: parts[0]
    });
  }
}
