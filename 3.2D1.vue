<template>
    <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
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
    padding: 10px;
    text-align: center;
}

.nav-link {
    margin: 0 20px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #007BFF;
}
</style>

