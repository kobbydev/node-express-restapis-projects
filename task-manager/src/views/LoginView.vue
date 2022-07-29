<template>
	<div class="home">
		<nav>
			<h1>Team One Task Management System</h1>
		</nav>
		<main>
			<figure class="bgimage-1">
				<img src="../assets/dots.svg" alt="" />
			</figure>
			<div class="login-section">
				<h2>Sign Up</h2>
				<form action="#" @submit.prevent="submit">
					<label for="fullname"><i class="uil uil-user"></i></label>
					<input
						type="text"
						placeholder="Enter your name"
						name="fullname"
						v-model="signUpForm.fullName"
					/>
					<br /><br />
					<label for="username"><i class="uil uil-user-circle"></i></label>
					<input
						type="text"
						name="username"
						placeholder="Enter your username"
						v-model="signUpForm.userName"
					/><br /><br />
					<label for="email"><i class="uil uil-envelope"></i></label>
					<input
						type="email"
						placeholder="Enter your email"
						name="email"
						v-model="signUpForm.email"
					/><br /><br />
					<label for="password"><i class="uil uil-key-skeleton"></i></label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						v-model="signUpForm.password"
					/>
					<br />
					<br />
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
	name: 'LoginView',
	components: {},
	data() {
		return {
			signUpForm: {
				fullName: '',
				email: '',
				userName: '',
				password: '',
			},
		};
	},
	methods: {
		submit() {
			axios
				.post('http://localhost:8080/api/taskmanager/users', this.signUpForm)
				.then((response) => {
					console.log(response);
					alert(response.data.message);
					localStorage.setItem('userIsLogged', response.data.data);
					this.$router.push({ name: 'taskspage' });
				})
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style scoped>
.home {
	height: 100vh;
}
nav {
	height: 10%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(65, 7, 65);
}
nav h1 {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 36px;
	color: white;
}
main {
	background: url('../assets/Rectangle.svg');
	position: absolute;
	height: 90%;
	width: 100%;
	z-index: 0;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.bgimage-1 {
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;
}
/* .bgimage-1 img {
	height: 100%;
	width: 100%;
} */
input {
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
	margin-left: 10px;
}
.login-section {
	background: rgb(116, 72, 116);
	padding: 20px;
	border-radius: 8px;
	z-index: 0;
}
.login-section h2 {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 18px;
	text-align: center;
	margin-bottom: 10px;
}
button {
	background: rgb(65, 7, 65);
	color: white;
	padding: 10px;
	border: none;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	cursor: pointer;
	margin: auto;
	margin-left: 35%;
}
</style>
