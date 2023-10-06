<template>
    <nav class="navbar">
        <div class="logo">
            <img src="logo.png" alt="Logo">
        </div>
        <div class="nav-links">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped>
.navbar {
    background-color: #333;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 50px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #007BFF;
}
</style>
