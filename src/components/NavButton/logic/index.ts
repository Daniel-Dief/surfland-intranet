export function redirect(path: string) {
    const redirectUrl = process.env.REACT_APP_PAGE_HREF + "/" + path;
    window.location.replace(redirectUrl);
}

export function userModal() {
    alert("Modal Usuário");
}