<template>
	<div class="tasks-page">
		<nav>
			<h1>Team One Task Management</h1>
			<div class="menu">
				<!-- <p class="name">Kofi</p> -->
				<a href="#" @click="logout">Logout</a>
			</div>
		</nav>
		<main>
			<div class="task-section">
				<h2>Add Tasks</h2>
				<form action="#" class="task-form" @submit.prevent="addTasks">
					<!-- <input type="checkbox" class="checkbox-button" /> -->
					<input
						type="text"
						placeholder="Create a new todo..."
						id="task-input"
						v-model="postTaskForm.description"
					/>
				</form>
				<div class="tasks-list">
					<table>
						<tr v-for="(task, index) in tasks" :key="index">
							<td class="col-1">
								<input type="checkbox" class="checkbox-button" />
							</td>
							<td class="col-2">{{ task }}</td>
							<td class="col-3">X</td>
						</tr>
					</table>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'TasksView',
	data() {
		return {
			postTaskForm: {
				description: '',
			},
			tasks: [],
		};
	},
	methods: {
		logout() {
			localStorage.removeItem('userIsLogged');
		},
		addTasks() {
			const userId = localStorage.getItem('userIsLogged');
			axios
				.post(
					`http://localhost:8080/api/user/${userId}/tasks`,
					this.postTaskForm
				)
				.then((response) => {
					console.log(response);
					this.tasks.push(this.postTaskForm.description);
					this.postTaskForm.description = '';
				})
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style scoped>
nav {
	height: 10%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgb(65, 7, 65);
}
nav h1 {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 36px;
	color: white;
}
.menu {
	display: flex;
}
.menu p {
	margin-right: 30px;
	color: white;
	font-size: 18px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a {
	text-decoration: none;
	color: white;
	font-size: 18px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
main {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.task-section {
	width: 700px;
}
.task-section h2 {
	font-size: 36px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	text-align: center;
	color: purple;
}
.task-form {
	padding: 20px 24px;
	/* width: 540px; */
	background: #ffffff;
	box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	border-radius: 5px;
	border: none;
}
#task-input {
	border: none;
	padding: 4px;
	width: 90%;
	margin-left: 24px;
}
#task-input::placeholder {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #9495a5;
}
#task-input:focus {
	outline: none;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #393a4b;
}
.tasks-list {
	margin-top: 24px;
	margin-bottom: 49px;
	background: #ffffff;
	box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	border-radius: 5px;
}
.tasks {
	display: flex;
}
.task-title {
	margin-left: 24px;
}
table {
	border-collapse: collapse;
	width: 100%;
}
tr {
	border-bottom: 1px solid #e3e4f1;
	cursor: pointer;
}
td {
	padding: 24px 0;
	padding-left: 24px;
}
.col-1 {
	width: 40px;
}
.col-3 {
	width: 50px;
	margin-right: 10px;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #d8d8d8;
}
.col-2 {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #494c6b;
}
.task-menu {
	display: flex;
	justify-content: space-between;
	padding: 18px 24px;
}
.task-menu p {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.194444px;
	color: #9495a5;
}
</style>
