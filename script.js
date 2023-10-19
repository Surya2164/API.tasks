let jobs = document.querySelector("#jobs")
    console.log(jobs);
    async function fetchjobs(url) {
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);

        fetchjobs("https://6530d94e6c756603295f269f.mockapi.io/jobs");

    }