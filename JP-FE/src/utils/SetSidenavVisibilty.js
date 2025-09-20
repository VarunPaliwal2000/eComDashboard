const leftNavAllowedPaths = ["/dashboards", "/pages"];
const rightNavAllowedPaths = ["/dashboards"];

function setSideNavParams({ pathname, search }) {
  const lowerPath = pathname.toLowerCase();

  const leftsidenav = leftNavAllowedPaths.some((p) => lowerPath.startsWith(p));
  const rightsidenav = rightNavAllowedPaths.some((p) =>
    lowerPath.startsWith(p)
  );

  const searchParams = new URLSearchParams(search);

  // Only set if values have changed, to prevent flicker
  if (searchParams.get("leftsidenav") !== String(leftsidenav))
    searchParams.set("leftsidenav", leftsidenav.toString());
  if (searchParams.get("rightsidenav") !== String(rightsidenav))
    searchParams.set("rightsidenav", rightsidenav.toString());
  const newUrl = {
    pathname: pathname,
    searchParams: "?" + searchParams.toString(),
  };
  return newUrl;
}

export default setSideNavParams;
