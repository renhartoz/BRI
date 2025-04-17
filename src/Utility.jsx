export function flattenRoutesWithChildren(routes, base = '') {
    return routes.flatMap(route => {
        const fullPath = `${base}/${route.path || ''}`.replace(/\/+/g, '/');
        const children = route.children ? flattenRoutesWithChildren(route.children, fullPath) : [];
        return [{ ...route, fullPath, basePath: base }, ...children];
    });
}

export function findParentRoute(pathname, routes) {
    const flat = flattenRoutesWithChildren(routes);
    return flat.find(route => {
        if (!route.children) return false;
        return route.children.some(child =>
            pathname.startsWith(`${route.fullPath}/${child.path}`)
        );
    }) || null;
}

export function saveBlog(key, blog) {
    localStorage.setItem(key, JSON.stringify(blog));
}

export function loadBlog(key) {
    const saved = localStorage.getItem(key);
    if (!saved) return null; // Return null or a default object
    try {
        return JSON.parse(saved);
    } catch (e) {
        console.error('Failed to parse saved blog:', e);
        return null;
    }
}

export function clearBlog() {
    localStorage.removeItem(LOCAL_KEY);
}
