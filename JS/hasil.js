window.addEventListener('load', () => {
    const params = (new  URL(document.location)).searchParams;
    const name = params.get('name');
    const uname = params.get('username');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-uname').innerHTML = uname;
})