/* General Styling */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f4f4f4;
}

/* Navigation Bar */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #0073b1;
    padding: 15px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Hero Section */
#home {
    background: url('https://source.unsplash.com/1600x900/?technology,cloud') no-repeat center center/cover;
    height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.intro {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
}

.intro h1 {
    font-size: 3rem;
}

.intro .btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    color: white;
    background: #0073b1;
    text-decoration: none;
    border-radius: 5px;
}

/* Sections */
section {
    padding: 50px 20px;
    background: white;
    margin: 10px;
    border-radius: 5px;
}

.job {
    background-color: #e3e3e3;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
}

/* Footer */
footer {
    margin-top: 20px;
    padding: 10px;
    background-color: #333;
    color: white;
}
